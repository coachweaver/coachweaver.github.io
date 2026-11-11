# App Lab Portfolio Studio

## What this package creates

This is a teacher-owned **Apps Script web app** backed by a teacher-owned Google Sheet. It uses the Google Classroom API to let you choose active classes, creates 54 named app slots for each student, and gives students an editable portfolio. The Practice page has all 54 concepts grouped by class build. The App Gallery has the 16 scheduled minor-grade builds. The Major Projects page has the two five-element assessments. Every app preview is an iframe, two across on desktop. Under each preview are the app title, a blank purpose field, and a blank UI-elements field.

The spreadsheet retains one row per student and app. Its columns include `courseId`, `studentEmail`, `appId`, `embedUrl`, `purpose`, `uiElements`, `readyAt`, `attempts`, `score`, and `evaluationNotes`. `appId` values remain stable, so a later evaluation script can find the exact card and rubric. The current `getMinorGradingRows()` function returns the ready queue. It does **not** assign scores automatically.

## Google Sites limit

Google's Sites API works only with **classic** Sites. It cannot create, edit, or inspect current Google Sites pages. Therefore this package cannot create a separate native Google Site for each student or insert native Sites text elements and iframes programmatically. The web app provides the requested portfolio layout and editing behavior. You may place the web app inside a teacher-owned Google Site using **Insert > Embed > URL**, but that wrapper site is created manually. The student content stays in the web app and teacher-owned Sheet. Do not expect a future grading script to read native Sites page structure; use the stable `Apps` sheet instead.

Official references: [Sites API scope](https://developers.google.com/workspace/sites), [Classroom advanced service](https://developers.google.com/apps-script/advanced/classroom), [web app deployment](https://developers.google.com/apps-script/guides/web), [Sites embeds](https://support.google.com/sites/answer/90569).

## Teacher setup

1. In your school Google account, create a blank Google Sheet named **App Lab Portfolios**. Keep it owned by you. Do not share the Sheet with students.
2. Open **Extensions > Apps Script**. Replace `Code.gs` and add `Catalog.gs`, `Index.html`, and `CoursePicker.html` from this folder. In Project Settings, show the manifest file and replace it with `appsscript.json` from this folder.
3. Under **Services**, confirm that **Google Classroom API** is enabled. If the script uses a standard Google Cloud project, enable the Classroom API in that project as well.
4. Run `initializePortfolio` once in the editor and approve the Google permissions. Reload the Sheet. Use **App portfolios > Choose Classroom classes** to select classes. This safely adds new slots without erasing existing app links or writing grades.
5. Deploy as a **Web app**. Choose **Execute as: Me** and **Who has access: users in your school domain**. Copy the `/exec` URL. Open it in a student account as a real sign-in check before sharing it with the class. The script refuses access when Google does not provide the signed-in student's email or that email is not on a selected roster.
6. Share the `/exec` URL through your normal classroom workflow. Students use the same URL. The script shows each person only their own app slots.

If your school does not make `Session.getActiveUser().getEmail()` available in this deployment, the portal will show a clear access error and will not expose another student's data. An administrator may need to allow the domain deployment. Do not switch to anonymous access.

## Student workflow

1. Build and test an app in Code.org App Lab.
2. Select **Share** in App Lab and copy the project link. Sharing must be enabled in the teacher-managed Code.org section.
3. In the portfolio, paste the link under the matching title and write one sentence about the app's purpose and a list of UI elements used. Select **Save this app**. The embedded preview appears above the fields.
4. For minor-grade apps, open **App gallery** and choose **Submit for check** only when ready. A ready submission increments the attempt count. Ordinary edits and Run clicks do not.

The web app accepts only `studio.code.org/projects/applab/...` links, creates the `/embed` URL itself, and rejects arbitrary iframe addresses. A project that Code.org does not permit students to share cannot be embedded until that setting is resolved.

## Later grading

Use `getMinorGradingRows()` as the input to a later teacher-only evaluator. It returns only explicit ready submissions, with the app URL, purpose, UI list, submission time, and attempt count. A working iframe can show behavior but does not itself prove the student's Design Mode IDs or block statements. A future evaluator needs a Code.org source-access method or teacher review to check those criteria. The `score` and `evaluationNotes` columns are reserved for that step.

## Testing done locally

The `.gs` and client JavaScript syntax, 54-slot catalog, two-column layout rules, URL validation, roster pagination, slot creation, student access checks, saving, and minor submission flow were tested with local mocks. **Live** Classroom authorization, school identity availability, Code.org share permissions, iframe rendering inside Apps Script, and any optional Google Sites wrapper still require a test in your school accounts. No real student roster or site was accessed while making this package.
