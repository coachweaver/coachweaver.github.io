/**
 * App Lab Portfolio Studio
 * Teacher-owned Apps Script web app. New Google Sites cannot be created or
 * populated by the deprecated Sites API. See SETUP.md for the Sites wrapper.
 */
const COURSE_HEADERS = ['courseId','name','section','selected','syncedAt'];
const STUDENT_HEADERS = ['courseId','studentId','studentEmail','studentName','syncedAt'];
const APP_HEADERS = [
  'courseId','studentEmail','appId','title','group','category',
  'shareUrl','embedUrl','purpose','uiElements','updatedAt',
  'readyAt','attempts','score','evaluationNotes'
];

function onOpen() {
  SpreadsheetApp.getUi().createMenu('App portfolios')
    .addItem('Initialize portfolio', 'initializePortfolio')
    .addItem('Choose Classroom classes', 'showCoursePicker')
    .addItem('Refresh selected classes', 'refreshSelectedClasses')
    .addToUi();
}

function initializePortfolio() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error('Bind this script to your teacher-owned Google Sheet.');
  const email = cleanEmail_(Session.getEffectiveUser().getEmail());
  if (!email) throw new Error('The teacher account email is unavailable.');
  const props = PropertiesService.getScriptProperties();
  const previous = props.getProperty('OWNER_EMAIL');
  if (previous && previous !== email) throw new Error('This portfolio belongs to a different teacher account.');
  props.setProperties({MASTER_ID:spreadsheet.getId(), OWNER_EMAIL:email});
  sheet_('Courses', COURSE_HEADERS);
  sheet_('Students', STUDENT_HEADERS);
  sheet_('Apps', APP_HEADERS);
  return 'Initialized. Use App portfolios > Choose Classroom classes.';
}

function showCoursePicker() {
  requireOwner_();
  SpreadsheetApp.getUi().showModalDialog(
    HtmlService.createHtmlOutputFromFile('CoursePicker').setWidth(520).setHeight(520),
    'Choose Classroom classes'
  );
}

function listClassroomCourses() {
  requireOwner_();
  const courses=[];
  let token='';
  do {
    const opts={teacherId:'me',pageSize:100};
    if (token) opts.pageToken=token;
    const result=Classroom.Courses.list(opts) || {};
    (result.courses || []).forEach(c => {
      if (c.courseState === 'ACTIVE') courses.push({
        id:String(c.id),name:String(c.name || 'Untitled class'),
        section:String(c.section || '')
      });
    });
    token=result.nextPageToken || '';
  } while (token);
  courses.sort((a,b)=>(a.name+' '+a.section).localeCompare(b.name+' '+b.section));
  const chosen=new Set(values_('Courses').slice(1).filter(r=>r[3]===true).map(r=>String(r[0])));
  return courses.map(c=>Object.assign(c,{selected:chosen.has(c.id)}));
}

function provisionSelectedClasses(courseIds) {
  requireOwner_();
  if (!Array.isArray(courseIds) || !courseIds.length) throw new Error('Select at least one class.');
  const allowed=listClassroomCourses();
  const allowedById=Object.fromEntries(allowed.map(c=>[c.id,c]));
  const selected=[...new Set(courseIds.map(String))];
  selected.forEach(id=>{if (!allowedById[id]) throw new Error('Class not found or not active: '+id);});
  const now=new Date().toISOString();
  const courseRows=allowed.map(c=>[c.id,c.name,c.section,selected.includes(c.id),now]);
  replaceRows_('Courses',COURSE_HEADERS,courseRows);

  const studentRows=[];
  const seenStudents=new Set();
  let missingEmail=0;
  selected.forEach(courseId=>{
    let token='';
    do {
      const opts={pageSize:100};
      if (token) opts.pageToken=token;
      const result=Classroom.Courses.Students.list(courseId,opts) || {};
      (result.students || []).forEach(student=>{
        const profile=student.profile || {};
        const email=cleanEmail_(profile.emailAddress);
        if (!email) { missingEmail++; return; }
        const key=courseId+'|'+email;
        if (seenStudents.has(key)) return;
        seenStudents.add(key);
        studentRows.push([courseId,String(student.userId || profile.id || ''),email,
          String((profile.name && profile.name.fullName) || email),now]);
      });
      token=result.nextPageToken || '';
    } while (token);
  });
  replaceRows_('Students',STUDENT_HEADERS,studentRows);

  const appSheet=sheet_('Apps',APP_HEADERS);
  const present=new Set(values_('Apps').slice(1).map(r=>[r[0],r[1],r[2]].join('|')));
  const additions=[];
  studentRows.forEach(student=>APP_CATALOG.forEach(app=>{
    const key=[student[0],student[2],app.appId].join('|');
    if (present.has(key)) return;
    present.add(key);
    additions.push([student[0],student[2],app.appId,app.title,app.group,app.category,
      '','','','','','','', '', '']);
  }));
  if (additions.length) appSheet.getRange(appSheet.getLastRow()+1,1,additions.length,APP_HEADERS.length).setValues(additions);
  return {classes:selected.length,students:studentRows.length,newAppSlots:additions.length,missingEmail:missingEmail};
}

function refreshSelectedClasses() {
  requireOwner_();
  const ids=values_('Courses').slice(1).filter(r=>r[3]===true).map(r=>String(r[0]));
  if (!ids.length) throw new Error('Choose classes first.');
  const result=provisionSelectedClasses(ids);
  SpreadsheetApp.getUi().alert('Roster refreshed: '+result.students+' students, '+result.newAppSlots+' new app slots.');
  return result;
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('App Lab Portfolio Studio')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getPortfolioData(courseId) {
  const email=actorEmail_();
  const memberships=memberCourses_(email);
  if (!memberships.length) throw new Error('Your account is not in a selected Classroom class. Ask your teacher to refresh the roster.');
  const chosen=memberships.find(c=>c.id===String(courseId)) || memberships[0];
  const rows=values_('Apps').slice(1).filter(r=>String(r[0])===chosen.id && cleanEmail_(r[1])===email);
  const byId=Object.fromEntries(rows.map(r=>[String(r[2]),r]));
  const apps=APP_CATALOG.map(app=>{
    const r=byId[app.appId] || [];
    return Object.assign({},app,{
      shareUrl:String(r[6] || ''),embedUrl:String(r[7] || ''),
      purpose:String(r[8] || ''),uiElements:String(r[9] || ''),
      updatedAt:String(r[10] || ''),readyAt:String(r[11] || ''),
      attempts:Number(r[12] || 0)
    });
  });
  return {studentEmail:email,studentName:chosen.studentName,
          courses:memberships.map(c=>({id:c.id,name:c.name,section:c.section})),
          courseId:chosen.id,apps:apps};
}

function saveApp(payload) {
  const email=actorEmail_();
  const courseId=String(payload && payload.courseId || '');
  const appId=String(payload && payload.appId || '');
  requireMembership_(email,courseId);
  if (!APP_CATALOG.some(a=>a.appId===appId)) throw new Error('Unknown app slot.');
  const normalized=normalizeAppUrl_(payload.shareUrl || '');
  const purpose=cleanField_(payload.purpose,240);
  const uiElements=cleanField_(payload.uiElements,240);
  const lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const found=appRow_(courseId,email,appId);
    if (!found) throw new Error('App slot missing. Ask your teacher to refresh the class.');
    const updatedAt=new Date().toISOString();
    found.sheet.getRange(found.row,7,1,5).setValues([[
      normalized.shareUrl,normalized.embedUrl,purpose,uiElements,updatedAt
    ]]);
    return {appId:appId,shareUrl:normalized.shareUrl,embedUrl:normalized.embedUrl,
            purpose:purpose,uiElements:uiElements,updatedAt:updatedAt};
  } finally { lock.releaseLock(); }
}

function submitMinor(courseId,appId) {
  const email=actorEmail_();
  courseId=String(courseId || ''); appId=String(appId || '');
  requireMembership_(email,courseId);
  const app=APP_CATALOG.find(a=>a.appId===appId);
  if (!app || app.category!=='minor') throw new Error('This is not a minor-grade app.');
  const lock=LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const found=appRow_(courseId,email,appId);
    if (!found) throw new Error('App slot missing.');
    const row=found.sheet.getRange(found.row,1,1,APP_HEADERS.length).getValues()[0];
    if (!row[6] || !row[8] || !row[9])
      throw new Error('Save an app link, a one-sentence purpose, and your UI element list first.');
    const attempts=Number(row[12] || 0)+1;
    const readyAt=new Date().toISOString();
    found.sheet.getRange(found.row,12,1,2).setValues([[readyAt,attempts]]);
    return {appId:appId,readyAt:readyAt,attempts:attempts};
  } finally { lock.releaseLock(); }
}

function getMinorGradingRows() {
  requireOwner_();
  return values_('Apps').slice(1).filter(r=>r[5]==='minor' && r[11])
    .map(r=>({courseId:r[0],studentEmail:r[1],appId:r[2],title:r[3],
      shareUrl:r[6],embedUrl:r[7],purpose:r[8],uiElements:r[9],
      readyAt:r[11],attempts:r[12],score:r[13],evaluationNotes:r[14]}));
}

function actorEmail_() {
  const email=cleanEmail_(Session.getActiveUser().getEmail());
  if (!email) throw new Error('Google did not provide your signed-in school email. Ask your teacher to check the web app deployment.');
  return email;
}

function requireOwner_() {
  const expected=PropertiesService.getScriptProperties().getProperty('OWNER_EMAIL');
  if (!expected) throw new Error('Run initializePortfolio first.');
  if (actorEmail_()!==expected) throw new Error('Teacher access only.');
}

function cleanEmail_(email) {return String(email || '').trim().toLowerCase();}

function cleanField_(value,maxLength) {
  const s=String(value || '').trim();
  if (s.length>maxLength) throw new Error('Keep this field under '+maxLength+' characters.');
  // Prevent student text from becoming a spreadsheet formula.
  return /^[=+\-@]/.test(s) ? "'"+s : s;
}

function normalizeAppUrl_(value) {
  const raw=String(value || '').trim();
  if (!raw) return {shareUrl:'',embedUrl:''};
  const match=raw.match(/^https:\/\/studio\.code\.org\/projects\/applab\/([A-Za-z0-9_-]+)(?:\/(?:embed|view))?(?:\?[^#]*)?$/);
  if (!match) throw new Error('Paste a Code.org App Lab Share link, not an edit link or another website.');
  const base='https://studio.code.org/projects/applab/'+match[1];
  return {shareUrl:base,embedUrl:base+'/embed'};
}

function master_() {
  const id=PropertiesService.getScriptProperties().getProperty('MASTER_ID');
  if (!id) throw new Error('Run initializePortfolio first.');
  return SpreadsheetApp.openById(id);
}

function sheet_(name,headers) {
  const ss=master_();
  let sheet=ss.getSheetByName(name);
  if (!sheet) sheet=ss.insertSheet(name);
  if (sheet.getLastRow()===0) sheet.getRange(1,1,1,headers.length).setValues([headers]);
  return sheet;
}

function values_(name) {
  const sheet=sheet_(name,name==='Courses'?COURSE_HEADERS:name==='Students'?STUDENT_HEADERS:APP_HEADERS);
  return sheet.getDataRange().getValues();
}

function replaceRows_(name,headers,rows) {
  const sheet=sheet_(name,headers);
  if (sheet.getLastRow()>1) sheet.getRange(2,1,sheet.getLastRow()-1,headers.length).clearContent();
  if (rows.length) sheet.getRange(2,1,rows.length,headers.length).setValues(rows);
}

function memberCourses_(email) {
  const courses=Object.fromEntries(values_('Courses').slice(1).filter(r=>r[3]===true)
    .map(r=>[String(r[0]),{id:String(r[0]),name:String(r[1]),section:String(r[2])}]));
  return values_('Students').slice(1).filter(r=>cleanEmail_(r[2])===email && courses[String(r[0])])
    .map(r=>Object.assign({},courses[String(r[0])],{studentName:String(r[3])}));
}

function requireMembership_(email,courseId) {
  if (!memberCourses_(email).some(c=>c.id===courseId)) throw new Error('This class does not belong to your account.');
}

function appRow_(courseId,email,appId) {
  const sheet=sheet_('Apps',APP_HEADERS);
  const rows=sheet.getDataRange().getValues();
  for (let i=1;i<rows.length;i++) {
    if (String(rows[i][0])===courseId && cleanEmail_(rows[i][1])===email && String(rows[i][2])===appId)
      return {sheet:sheet,row:i+1};
  }
  return null;
}
