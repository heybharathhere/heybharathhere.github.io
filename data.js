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
  initials: "B",                       // shown in the top-left nav
  role: "Data Engineer · Analytics · Visualization",
  availability: "Available for new opportunities",  // set "" to hide the little badge
  tagline: "I build and validate the data pipelines behind reliable banking systems — turning messy, high-volume data into something teams can actually trust.",
  resumeUrl: "https://drive.google.com/file/d/1kCu6m3cLK9sZpqIiKpWQ09zWlA-aib-C/view?usp=drive_link",                        // paste a link to your resume PDF, or leave "" to hide the button

  /* ---------- SOCIAL LINKS (leave any "" to hide it) ---------- */
  social: {
    github:   "https://github.com/heybharathhere",
    linkedin: "",                       // e.g. "https://linkedin.com/in/yourname"
    email:    "itsmebobbychan@gmail.com"         // your email address
  },

  /* ---------- ABOUT ---------- */
  about: {
    paragraphs: [
      "I'm a data professional focused on the unglamorous but critical layer of analytics: making sure the numbers are right. Day to day, I design and run validation across banking data pipelines — completeness, integrity, transformation logic, and reconciliation.",
      "My favourite kind of work is catching the discrepancy nobody else spotted before it reaches a report. I care about clean data, clear checks, and results people can defend in a room."
    ],
    // Small highlight stats shown beside the text. Edit the numbers/labels, or empty the list [] to hide.
    highlights: [
      { value: "100M+", label: "Records validated daily" },
      { value: "99.9%", label: "Pipeline pass rate" },
      { value: "Banking", label: "Core domain" }
    ]
  },

  /* ---------- SKILLS (grouped — add/remove groups or items freely) ---------- */
  skills: [
    { group: "Data & Databases",      items: ["SQL", "PL/SQL", "Data Warehousing", "ETL", "Reconciliation"] },
    { group: "Testing & Validation",  items: ["Data Quality", "Completeness Checks", "Integrity Testing", "Transformation Testing", "Defect Tracking"] },
    { group: "Languages & Tools",     items: ["Python", "Pandas", "Excel (advanced)", "Git", "Jenkins"] },
    { group: "Automations & AI",     items: ["Power Automate", "Excel VBA & Macros", "Prompt & Context Engineer"] },
    { group: "Visualization",         items: ["Power BI", "Dashboards", "Reporting"] }
  ],

  /* ---------- PROJECTS / CASE STUDIES ----------
     Each project shows a summary on the card; clicking it reveals problem → approach → result.
     Copy a { ... } block to add more. Delete blocks you don't want. */
  projects: [
    {
      title:   "Banking data pipeline validation",
      tag:     "Data Quality",
      summary: "End-to-end validation for a high-volume banking data pipeline.",
      problem: "A daily banking pipeline moved hundreds of thousands of records through multiple transformations, with no systematic way to catch data drops or transformation errors before they reached downstream reports.",
      approach:"Built a layered validation suite covering completeness (source vs target counts), integrity (keys, nulls, duplicates), transformation logic, and end-to-end reconciliation — with clear pass/fail reporting on every run.",
      result:  "Discrepancies are now caught at the pipeline level instead of in reports, cutting downstream defects and giving stakeholders numbers they can trust.",
      tech:    ["SQL", "Python", "Reconciliation"],
      link:    ""   // optional: link to a repo, write-up, or demo
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
    // ← add another project by copying a block above
  ],

  /* ---------- LIVE PIPELINE (your signature element) ----------
     This is the animated demo behind the "Run pipeline" button.
     Edit stage labels and the metric numbers to match your real work. */
  pipeline: {
    stages: [
      { icon: "database",        label: "Source",    sub: "Core banking" },
      { icon: "transform",       label: "Transform", sub: "ETL rules" },
      { icon: "shield",          label: "Validate",  sub: "12 checks", highlight: true },
      { icon: "load",            label: "Load",      sub: "Warehouse" }
    ],
    metrics: [
      { label: "Records processed",     value: 100000000, format: "compact" },
      { label: "Validation pass rate",  value: 100,   format: "pct1", accent: true },
      { label: "Reconciled",            value: 100,    format: "pct0", accent: true },
      { label: "Anomalies flagged",     value: 0,      format: "int" }
    ]
  },

  /* ---------- EXPERIENCE (newest first) ---------- */
  experience: [
    {
      role:    "Data Engineer & Analytics",
      company: "Cognizant",           // ← edit to your real title/company/dates
      period:  "Aug, 2022 — Oct, 2024",
      points: [
        "Validate banking data pipelines across completeness, integrity, transformation, and reconciliation.",
        "Design and run data-quality checks that catch discrepancies before they reach reporting.",
        "Track and drive resolution of data defects with engineering teams."
      ]
    },
   {
      role:    "Data Visualization - Power BI Devolper",
      company: "Cognizant",           // ← edit to your real title/company/dates
      period:  "Oct, 2024 — Present",
      points: [
                 "Transform complex banking datasets into interactive Power BI dashboards that drive data-driven decision-making.",
                 "Develop optimized DAX measures and Power Query transformations to handle high-volume, mission-critical data.",
                 "Create user-centric visualizations that simplify complex reconciliation logic for stakeholders.",
                 "Build automated reporting solutions that replace manual tracking, significantly increasing team efficiency."
      ]
    }
    // ← add earlier roles by copying the block above
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    heading: "Let's talk",
    text:    "Open to roles and collaborations in data engineering, analytics, and data quality. The fastest way to reach me is email.",
    email:   "itsmebobbychan@gmail.com"       // your email address
  }

};
