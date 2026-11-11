// Stable app catalog. Keep appId values unchanged for future grading.
const APP_CATALOG = [
  {
    "appId": "01",
    "title": "Button Beacon",
    "purposeHint": "A one-tap status message for a busy room",
    "group": 1,
    "week": 1,
    "meeting": 1,
    "slot": 1,
    "category": "minor",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "02",
    "title": "One-Tap Compliment",
    "purposeHint": "A button offers a kind message",
    "group": 1,
    "week": 1,
    "meeting": 1,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "03",
    "title": "Hydration Nudge",
    "purposeHint": "A discreet water reminder",
    "group": 1,
    "week": 1,
    "meeting": 1,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "04",
    "title": "Resettable Status",
    "purposeHint": "Start and reset a visible status",
    "group": 2,
    "week": 1,
    "meeting": 1,
    "slot": 2,
    "category": "minor",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "05",
    "title": "Borrowed Item Tracker",
    "purposeHint": "Mark an item out or returned",
    "group": 2,
    "week": 1,
    "meeting": 1,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "06",
    "title": "Classroom Signal",
    "purposeHint": "Quietly show ready or need help",
    "group": 2,
    "week": 1,
    "meeting": 1,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "07",
    "title": "Name Badge",
    "purposeHint": "Turn a typed name into a display badge",
    "group": 3,
    "week": 1,
    "meeting": 1,
    "slot": 3,
    "category": "minor",
    "expectedElements": [
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "08",
    "title": "Meeting Greeting",
    "purposeHint": "Welcome a visitor by name",
    "group": 3,
    "week": 1,
    "meeting": 1,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "09",
    "title": "Locker Label",
    "purposeHint": "Preview a clear label",
    "group": 3,
    "week": 1,
    "meeting": 1,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "10",
    "title": "Color Check",
    "purposeHint": "Switch a screen between two visual moods",
    "group": 4,
    "week": 1,
    "meeting": 2,
    "slot": 1,
    "category": "minor",
    "expectedElements": [
      "Screen",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setProperty",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "11",
    "title": "Weather Theme",
    "purposeHint": "Make a weather card easier to read",
    "group": 4,
    "week": 1,
    "meeting": 2,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Screen",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setProperty"
    ],
    "screens": 1
  },
  {
    "appId": "12",
    "title": "Focus Palette",
    "purposeHint": "Choose a low-glare color scheme",
    "group": 4,
    "week": 1,
    "meeting": 2,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Screen",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "setProperty"
    ],
    "screens": 1
  },
  {
    "appId": "13",
    "title": "Gallery Preview",
    "purposeHint": "Reveal one picture at a time",
    "group": 5,
    "week": 1,
    "meeting": 2,
    "slot": 2,
    "category": "minor",
    "expectedElements": [
      "Image",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "showElement",
      "hideElement",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "14",
    "title": "Recycling Guide",
    "purposeHint": "Show one sorting example at a time",
    "group": 5,
    "week": 1,
    "meeting": 2,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Image",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "showElement",
      "hideElement"
    ],
    "screens": 1
  },
  {
    "appId": "15",
    "title": "Plant ID Card",
    "purposeHint": "Flip between two plant pictures",
    "group": 5,
    "week": 1,
    "meeting": 2,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Image",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "onEvent",
      "showElement",
      "hideElement"
    ],
    "screens": 1
  },
  {
    "appId": "16",
    "title": "Option Menu",
    "purposeHint": "Echo a selected help topic",
    "group": 6,
    "week": 1,
    "meeting": 2,
    "slot": 3,
    "category": "minor",
    "expectedElements": [
      "Dropdown",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "17",
    "title": "Bus Stop Helper",
    "purposeHint": "Select a stop to display its name",
    "group": 6,
    "week": 1,
    "meeting": 2,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Dropdown",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "18",
    "title": "Meal Picker",
    "purposeHint": "Preview a lunch choice",
    "group": 6,
    "week": 1,
    "meeting": 2,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Dropdown",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "19",
    "title": "Checklist Check",
    "purposeHint": "Confirm a packed item",
    "group": 7,
    "week": 2,
    "meeting": 3,
    "slot": 1,
    "category": "minor",
    "expectedElements": [
      "Checkbox",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "20",
    "title": "Trip Packing Check",
    "purposeHint": "Confirm a travel item",
    "group": 7,
    "week": 2,
    "meeting": 3,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Checkbox",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "21",
    "title": "Safety Check",
    "purposeHint": "Confirm a step before continuing",
    "group": 7,
    "week": 2,
    "meeting": 3,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Checkbox",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "22",
    "title": "Route Choice",
    "purposeHint": "Pick exactly one route option",
    "group": 8,
    "week": 2,
    "meeting": 3,
    "slot": 2,
    "category": "minor",
    "expectedElements": [
      "Radio Button",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "23",
    "title": "Break Type",
    "purposeHint": "Choose one kind of break",
    "group": 8,
    "week": 2,
    "meeting": 3,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Radio Button",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "24",
    "title": "Study Mode",
    "purposeHint": "Choose one study setting",
    "group": 8,
    "week": 2,
    "meeting": 3,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Radio Button",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "25",
    "title": "Study Sprint Plan",
    "purposeHint": "Assessment 1: combine five UI elements into a useful plan",
    "group": 9,
    "week": 2,
    "meeting": 3,
    "slot": 3,
    "category": "major",
    "expectedElements": [
      "Text Input",
      "Dropdown",
      "Checkbox",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "26",
    "title": "Homework Start Plan",
    "purposeHint": "Turn a task and time choice into a start plan",
    "group": 9,
    "week": 2,
    "meeting": 3,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Text Input",
      "Dropdown",
      "Checkbox",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "27",
    "title": "Event Checklist",
    "purposeHint": "Create a simple event preparation message",
    "group": 9,
    "week": 2,
    "meeting": 3,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Text Input",
      "Dropdown",
      "Checkbox",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "getChecked",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "28",
    "title": "Minutes Slider",
    "purposeHint": "See a chosen duration update",
    "group": 10,
    "week": 2,
    "meeting": 4,
    "slot": 1,
    "category": "minor",
    "expectedElements": [
      "Slider",
      "Label"
    ],
    "uiBlocks": [
      "getProperty",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "29",
    "title": "Stretch Timer Dial",
    "purposeHint": "Set a short stretch length",
    "group": 10,
    "week": 2,
    "meeting": 4,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Slider",
      "Label"
    ],
    "uiBlocks": [
      "getProperty",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "30",
    "title": "Budget Dial",
    "purposeHint": "Preview a spending limit",
    "group": 10,
    "week": 2,
    "meeting": 4,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Slider",
      "Label"
    ],
    "uiBlocks": [
      "getProperty",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "31",
    "title": "Class Time Chart",
    "purposeHint": "Show a small prepared data set",
    "group": 11,
    "week": 2,
    "meeting": 4,
    "slot": 2,
    "category": "minor",
    "expectedElements": [
      "Chart",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "drawChart (teacher)",
      "onEvent",
      "hideElement",
      "showElement",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "32",
    "title": "Reading Pulse",
    "purposeHint": "Compare reading minutes by day",
    "group": 11,
    "week": 2,
    "meeting": 4,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Chart",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "drawChart (teacher)",
      "showElement"
    ],
    "screens": 1
  },
  {
    "appId": "33",
    "title": "Water Use Snapshot",
    "purposeHint": "Show a simple category chart",
    "group": 11,
    "week": 2,
    "meeting": 4,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Chart",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "drawChart (teacher)",
      "showElement"
    ],
    "screens": 1
  },
  {
    "appId": "34",
    "title": "Time Adder",
    "purposeHint": "Add two durations with supplied arithmetic",
    "group": 12,
    "week": 2,
    "meeting": 4,
    "slot": 3,
    "category": "minor",
    "expectedElements": [
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getNumber",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "35",
    "title": "Travel Time Total",
    "purposeHint": "Combine two trip legs",
    "group": 12,
    "week": 2,
    "meeting": 4,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getNumber",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "36",
    "title": "Supply Cost",
    "purposeHint": "Combine two item prices",
    "group": 12,
    "week": 2,
    "meeting": 4,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getNumber",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "37",
    "title": "Sound Cue",
    "purposeHint": "Play and stop a chosen sound",
    "group": 13,
    "week": 3,
    "meeting": 5,
    "slot": 1,
    "category": "minor",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "playSound",
      "stopSound",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "38",
    "title": "Beat Pad",
    "purposeHint": "Trigger two short percussion sounds",
    "group": 13,
    "week": 3,
    "meeting": 5,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "playSound",
      "onEvent"
    ],
    "screens": 1
  },
  {
    "appId": "39",
    "title": "Alert Tester",
    "purposeHint": "Compare two notification sounds",
    "group": 13,
    "week": 3,
    "meeting": 5,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "playSound",
      "stopSound",
      "onEvent"
    ],
    "screens": 1
  },
  {
    "appId": "40",
    "title": "Two-Screen Guide",
    "purposeHint": "Use Next and Back to move through a tiny guide",
    "group": 14,
    "week": 3,
    "meeting": 5,
    "slot": 2,
    "category": "minor",
    "expectedElements": [
      "Screen",
      "Image",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "setScreen",
      "onEvent"
    ],
    "screens": 2
  },
  {
    "appId": "41",
    "title": "Museum Gallery",
    "purposeHint": "Browse two exhibit cards",
    "group": 14,
    "week": 3,
    "meeting": 5,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Screen",
      "Image",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "setScreen",
      "onEvent"
    ],
    "screens": 2
  },
  {
    "appId": "42",
    "title": "How-To Cards",
    "purposeHint": "Read two steps on separate screens",
    "group": 14,
    "week": 3,
    "meeting": 5,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Screen",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "setScreen",
      "onEvent"
    ],
    "screens": 2
  },
  {
    "appId": "43",
    "title": "Idea Capture",
    "purposeHint": "Turn a long note into a visible receipt",
    "group": 15,
    "week": 3,
    "meeting": 5,
    "slot": 3,
    "category": "minor",
    "expectedElements": [
      "Text Area",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "44",
    "title": "Feedback Box",
    "purposeHint": "Preview a useful feedback note",
    "group": 15,
    "week": 3,
    "meeting": 5,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Text Area",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "45",
    "title": "Lab Observation",
    "purposeHint": "Capture a science observation",
    "group": 15,
    "week": 3,
    "meeting": 5,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Text Area",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "46",
    "title": "Photo Note",
    "purposeHint": "Select a photo and add a caption",
    "group": 16,
    "week": 3,
    "meeting": 6,
    "slot": 1,
    "category": "minor",
    "expectedElements": [
      "Photo Select",
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText",
      "getImageURL (demo)"
    ],
    "screens": 1
  },
  {
    "appId": "47",
    "title": "Lost Item Report",
    "purposeHint": "Record what a lost item looks like",
    "group": 16,
    "week": 3,
    "meeting": 6,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Photo Select",
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "48",
    "title": "Field Observation",
    "purposeHint": "Attach a picture to a field note",
    "group": 16,
    "week": 3,
    "meeting": 6,
    "slot": 1,
    "category": "practice",
    "expectedElements": [
      "Photo Select",
      "Text Input",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "49",
    "title": "Pattern Poster",
    "purposeHint": "Place a canvas and generate a simple drawing",
    "group": 17,
    "week": 3,
    "meeting": 6,
    "slot": 2,
    "category": "minor",
    "expectedElements": [
      "Canvas",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "setActiveCanvas (teacher)",
      "circle (teacher)",
      "clearCanvas (teacher)",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "50",
    "title": "Random Flag",
    "purposeHint": "Draw a color pattern on a canvas",
    "group": 17,
    "week": 3,
    "meeting": 6,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Canvas",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "setActiveCanvas (teacher)",
      "rect (teacher)",
      "onEvent"
    ],
    "screens": 1
  },
  {
    "appId": "51",
    "title": "Poster Stamp",
    "purposeHint": "Stamp shapes inside a poster",
    "group": 17,
    "week": 3,
    "meeting": 6,
    "slot": 2,
    "category": "practice",
    "expectedElements": [
      "Canvas",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "setActiveCanvas (teacher)",
      "circle (teacher)",
      "onEvent"
    ],
    "screens": 1
  },
  {
    "appId": "52",
    "title": "Focus Break Coach",
    "purposeHint": "Assessment 2: use five UI elements for a personal recommendation",
    "group": 18,
    "week": 3,
    "meeting": 6,
    "slot": 3,
    "category": "major",
    "expectedElements": [
      "Radio Button",
      "Slider",
      "Text Area",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "getProperty",
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "53",
    "title": "Errand Plan",
    "purposeHint": "Combine a choice, duration and note",
    "group": 18,
    "week": 3,
    "meeting": 6,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Radio Button",
      "Slider",
      "Text Area",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "getProperty",
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  },
  {
    "appId": "54",
    "title": "Wellness Pause",
    "purposeHint": "Choose a gentle pause idea",
    "group": 18,
    "week": 3,
    "meeting": 6,
    "slot": 3,
    "category": "practice",
    "expectedElements": [
      "Radio Button",
      "Slider",
      "Text Area",
      "Button",
      "Label"
    ],
    "uiBlocks": [
      "getChecked",
      "getProperty",
      "getText",
      "onEvent",
      "setText"
    ],
    "screens": 1
  }
];
