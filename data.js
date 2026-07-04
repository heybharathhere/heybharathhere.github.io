/* =====================================================================
   YOUR PORTFOLIO CONTENT — edit anything below and re-upload this file.
   This is the ONLY file you need to touch to change what your site says.
   Rules of thumb:
     • Text goes inside the "quotes".
     • Items in a list are separated by commas.
     • To hide something, set it to "" (empty) or empty the [ ] list.
   ===================================================================== */

const PORTFOLIO = {

  /* =============================================================
     FEATURE SWITCHES  —  turn the extra toys ON (true) or OFF (false)
     ============================================================= */
  features: {
    astronaut:          true,   // draggable peek-a-boo astronaut + moon
    fallingStars:       true,   // astronaut occasionally drops tiny stars
    moonUnlocksChapter: true,   // tapping the moon opens the Secret Chapter
    astronautChallenge: true,   // tapping the astronaut challenges you to Tic-Tac-Toe
    game:               true,   // Tic-Tac-Toe
    fortuneCookie:      true,   // Digital Fortune Cookie
    moodSwitcher:       true,   // color-theme switcher (bottom-left)
    secretChapter:      true,   // the hidden "Secret Chapter of Me" section
    secretMessageBox:   true,   // the message box inside the Secret Chapter
    sectionArrows:      true,   // animated down-arrow between every section
    dayNight:           false   // moon becomes a sun during daytime (6am–6pm)
  },

  /* ---------- BASICS ---------- */
  name: "Bharath Kumar",
  initials: "B",                       // shown if you don't set a logo below
  logo: "Logo_website.png",                             // put your logo file name here, e.g. "logo.png"
                                        // (upload the image to your repo first). Leave "" to use initials.
  role: "Data Engineer · Analytics · Visualization",
  availability: "Available for new opportunities",  // set "" to hide the little badge
  tagline: "I build and validate the data pipelines behind reliable banking systems — turning messy, high-volume data into something teams can actually trust.",
  resumeUrl: "https://drive.google.com/file/d/1kCu6m3cLK9sZpqIiKpWQ09zWlA-aib-C/view?usp=drive_link",                        // paste a link to your resume PDF, or leave "" to hide the button

  /* ---------- SOCIAL LINKS (leave any "" to hide it) ---------- */
  social: {
    github:   "https://github.com/heybharathhere",
    linkedin: "https://www.linkedin.com/in/ibobbychan/",                       // e.g. "https://linkedin.com/in/yourname"
    email:    "itsmebobbychan@gmail.com"         // your email address
  },

  /* ---------- ABOUT ---------- */
  about: {
    paragraphs: [
      "I'm a data professional focused on the unglamorous but critical layer of analytics: making sure the numbers are right. Day to day, I design and run validation across banking data pipelines — completeness, integrity, transformation logic, and reconciliation.",
      "My favourite kind of work is catching the discrepancy nobody else spotted before it reaches a report. I care about clean data, clear checks, and results people can defend in a room."
    ],
    highlights: [
      { value: "100M+", label: "Records validated daily" },
      { value: "100%", label: "Pipeline pass rate" },
      { value: "Banking", label: "Core domain" }
    ]
  },

  /* ---------- SKILLS ---------- */
  skills: [
    { group: "Data & Databases",      items: ["SQL", "PL/SQL", "Data Warehousing", "ETL", "Reconciliation"] },
    { group: "Testing & Validation",  items: ["Data Quality", "Completeness Checks", "Integrity Testing", "Transformation Testing", "Defect Tracking"] },
    { group: "Languages & Tools",     items: ["Python", "Pandas", "Excel (advanced)", "Git", "JIRA"] },
    { group: "Visualization",         items: ["Power BI", "Dashboards", "Reporting"] },
     { group: "AI & Automation",      items: ["Certified Prompt & Context Engineering", "Power Automate", "Excel VBA/Macros/Scripts"]}
  ],

  /* ---------- PROJECTS / CASE STUDIES ---------- */
  projects: [
    {
      title:   "Banking data pipeline validation",
      tag:     "Data Quality",
      summary: "End-to-end validation for a high-volume banking data pipeline.",
      problem: "A daily banking pipeline moved hundreds of thousands of records through multiple transformations, with no systematic way to catch data drops or transformation errors before they reached downstream reports.",
      approach:"Built a layered validation suite covering completeness (source vs target counts), integrity (keys, nulls, duplicates), transformation logic, and end-to-end reconciliation — with clear pass/fail reporting on every run.",
      result:  "Discrepancies are now caught at the pipeline level instead of in reports, cutting downstream defects and giving stakeholders numbers they can trust.",
      tech:    ["SQL", "Python", "Reconciliation"],
      link:    ""
    },
    {
      title:   "Reconciliation reporting",
      tag:     "Reporting",
      summary: "Automated source-to-target reconciliation with readable reports.",
      problem: "Manual reconciliation was slow, error-prone, and hard to hand over — every check lived in someone's head or a one-off spreadsheet.",
      approach:"Standardised the reconciliation checks and produced consistent, readable reports that anyone on the team could run and interpret.",
      result:  "Faster reconciliation cycles and a repeatable process that survives handovers.",
      tech:    ["SQL", "Excel", "Automation"],
      link:    ""
    }
  ],

  /* ---------- LIVE PIPELINE (your signature element) ---------- */
  pipeline: {
    stages: [
      { icon: "database",  label: "Source",    sub: "Core banking" },
      { icon: "transform", label: "Transform", sub: "ETL rules" },
      { icon: "shield",    label: "Validate",  sub: "12 checks", highlight: true },
      { icon: "load",      label: "Load",      sub: "Warehouse" }
    ],
    metrics: [
      { label: "Records processed",     value: 480000, format: "compact" },
      { label: "Validation pass rate",  value: 99.7,   format: "pct1", accent: true },
      { label: "Reconciled",            value: 100,    format: "pct0", accent: true },
      { label: "Anomalies flagged",     value: 3,      format: "int" }
    ]
  },

  /* ---------- EXPERIENCE (newest first) ---------- */
  experience: [
    {
      role:    "Hadoop Administrator",
      company: "Cognizant",
      period:  "Aug, 2022 — Oct, 2024",
      points: [
        "Validate banking data pipelines across completeness, integrity, transformation, and reconciliation.",
        "Design and run data-quality checks that catch discrepancies before they reach reporting.",
        "Track and drive resolution of data defects with engineering teams."
      ]
    },
    {
      role:    "Power BI Developer",
      company: "Cognizant",
      period:  "Oct, 2024 — Present",
      points: [
        "Architect and maintain scalable Power BI dashboards, transforming complex SQL datasets into actionable business insights.",
        "Develop complex DAX measures and optimize data models using Star Schema principles to ensure high-performance report delivery.",
        "Perform rigorous QA and data validation on all report releases, reconciling dashboard metrics against source systems to guarantee 100% data accuracy.",
        "Implement and audit Row-Level Security (RLS) to ensure data governance and secure access for cross-functional stakeholders."
      ]
    }
  ],

  /* ---------- SECRET CHAPTER OF ME (hidden until a visitor scrolls all the way, or taps the moon) ---------- */
  secretChapter: {
    intro: "Beyond the pipelines and pass-rates, here's what actually makes me tick.",
    passions: [
      { emoji: "🎮", title: "Gaming",         note: "High-action, high-stakes. If it’s fast and requires quick reflexes, I'm in—skip the long cutscenes." },
      { emoji: "🎧", title: "Music",          note: "I don't just listen to music; I write my own and use AI to bring it to life." },
      { emoji: "📚", title: "Learning",       note: "Always mid-way through a course on something new." },
      { emoji: "🌌", title: "Space & sci-fi", note: "Give me a night sky and a big question." },
      { emoji: "☕", title: "Coffee",         note: "Not a coffee addict, but I'm always down to grab one if it means a good conversation." },
      { emoji: "✈️", title: "Travel",         note: "Collecting places, food, and stories." }
    ],
    // Secret Message Box
    messagePrompt:  "Leave a secret, a note, or just say hi — no name needed.",
    messageConfirm: "Your secret is safe among the stars. ✨",
    // Starter messages shown on the rotating "Secret Wall" (visitor submissions get added on their own device)
    wallSeeds: [
        "Someone was here at 3am and left a smile. 🌙",
        "You're doing better than you think.",
        "First visit? Welcome to the quiet corner of the internet.",
        "A wish was made here once. They say it came true.",
        "Paused the hustle for a second. Hope you did too.",
        "If you’re reading this, you’re exactly where you need to be.",
        "Left a bit of good energy here. Help yourself.",
        "The best ideas usually happen when we aren't looking for them.",
        "Take a breath. The world can wait five minutes.",
        "This spot is for quiet thoughts and big plans.",
        "Reality is loud, this place is for the silence.",
        "Whatever you're carrying, put it down for a moment.",
        "Just a ghost in the machine, passing through.",
        "Not lost, just taking the scenic route.",
        "A quiet space for a noisy mind.",
        "The clock stops here. Stay a while.",
        "Borrowed a bit of inspiration, left some peace behind.",
        "Everything is a work in progress, including us.",
        "Small steps still take you across the map.",
        "Whatever you’re looking for, I hope you find it."
    ]
  },

  /* ---------- TIC-TAC-TOE MESSAGES (playful — make them your own) ---------- */
  game: {
    winPhrases: [
      "Okay, you actually beat me. Respect. 🎉",
      "You win! The universe is clearly on your side today. 🌟",
      "Victory! Go treat yourself — you've earned it. ✨",
      "Beaten fair and square. You're having a good day. 😄",
      "Well played. That move was surgical. 🎯",
      "Okay, I admit it: you’re sharper than me today. 🧠",
      "Level up! That was an impressive win. 📈",
      "You cracked the code. Fair play to you. 🔓"
    ],
    losePhrases: [
      "Ha! Better luck next time, human. 🤖",
      "Is that your final move? My circuits barely warmed up. 😏",
      "Defeated! Don't worry — I've had a lot of practice. 😎",
      "So close… and yet, not close at all. 😜",
      "Error 404: Victory not found for you. ⚡",
      "Too slow! You're gonna need more coffee for this. ☕",
      "Try again? I'm just getting started. 🎮",
      "Classic move, but not enough to take me down. 🛡️"
    ],
    drawPhrases: [
      "A draw! Great minds think alike. 🤝",
      "Stalemate — nobody blinks. 🧊",
      "Dead even. Rematch? 🔁",
      "Perfect balance. We’re in sync. ⚖️",
      "A rare moment of total equality. Respect. 🥂",
      "Neither one budging. Let's reset and go again. 🔄"
    ]
  },

  /* ---------- DIGITAL FORTUNE COOKIE (shown on each visit) ---------- */
  fortunes: [
    "Your next deploy passes on the first try. 🍀",
    "The bug you fear is smaller than you think.",
    "A pipeline you validate today saves someone a headache tomorrow.",
    "Clean data is coming your way. ✨",
    "Trust the checks. Then check again.",
    "Something you've been stuck on will suddenly make sense.",
    "Good things reconcile to those who wait. 🧮",
    "Today is a great day to catch that one discrepancy.",
    "If you know me, come to me and hold my hand.",
    "A journey of a thousand miles begins with a single line of code.",
    "The best way to predict the future is to ship it.",
    "Luck is what happens when preparation meets opportunity.",
    "Small steps in the right direction lead to big changes.",
    "The answers you seek are already in your logs.",
    "Patience is a virtue, but persistence is a superpower.",
    "Your perspective will shift in ways you didn't expect today.",
    "Be kind to your past self; they did the best they could.",
    "A smooth sea never made a skilled sailor.",
    "The code is reflecting your mood—keep it calm.",
    "Don't worry about the shadows; look at the light behind you.",
    "Everything you need is already within reach."
  ],

  /* ---------- MOOD PALETTE SWITCHER (color themes) ---------- */
  moods: [
    { name: "Default",    accent: "#38bdf8", accent2: "#34d399", bg: "#0a0e17" },
    { name: "Calm",       accent: "#7dd3fc", accent2: "#a5b4fc", bg: "#0b1020" },
    { name: "Energetic",  accent: "#fb923c", accent2: "#f43f5e", bg: "#150f13" },
    { name: "Mysterious", accent: "#a78bfa", accent2: "#22d3ee", bg: "#0a0912" },
    { name: "Deep Focus", accent: "#fca5a5", accent2: "#94a3b8", bg: "#0f0f12" },
    { name: "Midnight",   accent: "#6366f1", accent2: "#cbd5e1", bg: "#050508" },
    { name: "Cyberpunk",  accent: "#f59e0b", accent2: "#10b981", bg: "#0a0a0c" },
    { name: "Soft Glow",  accent: "#fda4af", accent2: "#fcd34d", bg: "#12100d" },
    { name: "Matrix",     accent: "#4ade80", accent2: "#15803d", bg: "#050805" },
    { name: "Retro Vibe", accent: "#f472b6", accent2: "#818cf8", bg: "#0f0812" }
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    heading: "Let's talk",
    text:    "Open to roles and collaborations in data engineering, analytics, and data quality. The fastest way to reach me is email.",
    email:   "itsmebobbychan@gmail.com"
  }

};
