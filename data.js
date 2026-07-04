/* =====================================================================
   YOUR PORTFOLIO CONTENT — edit anything below and re-upload this file.
   This is the ONLY file you need to touch to change what your site says.
   Rules of thumb:
     • Text goes inside the "quotes".
     • Items in a list are separated by commas.
     • To hide something, set it to "" (empty) or empty the [ ] list.
   ===================================================================== */

const PORTFOLIO = {

  /* ---------- BASICS ---------- */
  name: "Bharath Kumar",
  initials: "BK",                       // shown if you don't set a logo below
  logo: "",                             // put your logo file name here, e.g. "logo.png"
                                        // (upload the image to your repo first). Leave "" to use initials.
  role: "Data Engineer · Analytics · Visualization",
  availability: "Available for new opportunities",  // set "" to hide the little badge
  tagline: "I build and validate the data pipelines behind reliable banking systems — turning messy, high-volume data into something teams can actually trust.",
  resumeUrl: "",                        // paste a link to your resume PDF, or leave "" to hide the button

  /* ---------- SOCIAL LINKS (leave any "" to hide it) ---------- */
  social: {
    github:   "https://github.com/heybharathhere",
    linkedin: "",                       // e.g. "https://linkedin.com/in/yourname"
    email:    "you@example.com"         // your email address
  },

  /* ---------- ABOUT ---------- */
  about: {
    paragraphs: [
      "I'm a data professional focused on the unglamorous but critical layer of analytics: making sure the numbers are right. Day to day, I design and run validation across banking data pipelines — completeness, integrity, transformation logic, and reconciliation.",
      "My favourite kind of work is catching the discrepancy nobody else spotted before it reaches a report. I care about clean data, clear checks, and results people can defend in a room."
    ],
    highlights: [
      { value: "500K+", label: "Records validated daily" },
      { value: "99.7%", label: "Pipeline pass rate" },
      { value: "Banking", label: "Core domain" }
    ]
  },

  /* ---------- SKILLS ---------- */
  skills: [
    { group: "Data & Databases",      items: ["SQL", "PL/SQL", "Data Warehousing", "ETL", "Reconciliation"] },
    { group: "Testing & Validation",  items: ["Data Quality", "Completeness Checks", "Integrity Testing", "Transformation Testing", "Defect Tracking"] },
    { group: "Languages & Tools",     items: ["Python", "Pandas", "Excel (advanced)", "Git", "JIRA"] },
    { group: "Visualization",         items: ["Power BI", "Dashboards", "Reporting"] }
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
      role:    "Data & Analytics Test Engineer",
      company: "Accenture",
      period:  "2023 — Present",
      points: [
        "Validate banking data pipelines across completeness, integrity, transformation, and reconciliation.",
        "Design and run data-quality checks that catch discrepancies before they reach reporting.",
        "Track and drive resolution of data defects with engineering teams."
      ]
    }
  ],

  /* ---------- SECRET CHAPTER OF ME (your passions & hobbies) ----------
     A more personal block. Edit these to be truly yours — swap emojis and text. */
  secretChapter: {
    intro: "Beyond the pipelines and pass-rates, here's what actually makes me tick.",
    passions: [
      { emoji: "🎮", title: "Gaming",         note: "Strategy games and anything that rewards a well-planned move." },
      { emoji: "🎧", title: "Music",          note: "A good playlist is my debugging co-pilot." },
      { emoji: "📚", title: "Learning",       note: "Always mid-way through a course on something new." },
      { emoji: "🌌", title: "Space & sci-fi", note: "Give me a night sky and a big question." },
      { emoji: "☕", title: "Coffee",         note: "The real dependency in all my projects." },
      { emoji: "✈️", title: "Travel",         note: "Collecting places, food, and stories." }
    ]
  },

  /* ---------- TIC-TAC-TOE MESSAGES (playful — make them your own) ---------- */
  game: {
    winPhrases: [
      "Okay, you actually beat me. Respect. 🎉",
      "You win! The universe is clearly on your side today. 🌟",
      "Victory! Go treat yourself — you've earned it. ✨",
      "Beaten fair and square. You're having a good day. 😄"
    ],
    losePhrases: [
      "Ha! Better luck next time, human. 🤖",
      "Is that your final move? My circuits barely warmed up. 😏",
      "Defeated! Don't worry — I've had a lot of practice. 😎",
      "So close… and yet, not close at all. 😜"
    ],
    drawPhrases: [
      "A draw! Great minds think alike. 🤝",
      "Stalemate — nobody blinks. 🧊",
      "Dead even. Rematch? 🔁"
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
    "Today is a great day to catch that one discrepancy."
  ],

  /* ---------- MOOD PALETTE SWITCHER (color themes) ----------
     Pick colors you like. "accent" and "accent2" are the highlights; "bg" is the background. */
  moods: [
    { name: "Default",    accent: "#38bdf8", accent2: "#34d399", bg: "#0a0e17" },
    { name: "Calm",       accent: "#7dd3fc", accent2: "#a5b4fc", bg: "#0b1020" },
    { name: "Energetic",  accent: "#fb923c", accent2: "#f43f5e", bg: "#150f13" },
    { name: "Mysterious", accent: "#a78bfa", accent2: "#22d3ee", bg: "#0a0912" }
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    heading: "Let's talk",
    text:    "Open to roles and collaborations in data engineering, analytics, and data quality. The fastest way to reach me is email.",
    email:   "you@example.com"
  }

};
