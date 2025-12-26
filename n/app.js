"use strict";

/* =========================================================
   OPTION LISTS (STRICT)
========================================================= */
const PROCEDURE_TYPES = [
  "General Surgery – Abdomen",
  "Head & Neck",
  "ENT / Airway surgery",
  "Thoracic",
  "Neurosurgery",
  "Obstetrics",
  "Orthopedics",
  "Short procedure / Day case",
  "Endoscopy",
  "Trauma surgery",
  "ICU Intubation / Procedure"
];

const LOCATIONS = [
  "Operating Room (OR)",
  "Emergency Department (ED)",
  "ICU",
  "Ward / Floor",
  "Prehospital / Ambulance",
  "Outside OR (NORA: endoscopy / radiology)"
];

const CONDITIONS = [
  "None / No special condition",
  "Anticipated difficult airway",
  "Full stomach / Aspiration risk",
  "Cervical spine concern / immobilization",
  "Obesity / High BMI",
  "Limited mouth opening / trismus",
  "Limited neck mobility",
  "Facial trauma / blood in airway",
  "Burns / inhalation injury",
  "Pregnancy",
  "Severe hypoxemia / Respiratory failure",
  "Need for lung isolation"
];

const CONSCIOUSNESS_LEVELS = ["Awake", "Semi-conscious", "Unconscious"];
const URGENCY_LEVELS = ["Emergency", "Non-emergency"];
const SEDATION_STATUS = ["Not sedated", "Sedated"];

/* =========================================================
   AIRWAY TOOLS DATABASE (CLINICALLY CONSISTENT)
========================================================= */
const TOOLS_DB = [
  {
    id: "ett_standard",
    tool_name: "Standard cuffed endotracheal tube",
    tool_category: "Endotracheal",
    insertion_method: "Oral intubation using laryngoscope",
    insertion_site: "Oral",
    contraindications: [],
    advantages: ["Definitive airway", "Aspiration protection"],
    preferred_in: ["General anesthesia", "ICU ventilation"],
    warnings: ["Confirm tube position and cuff pressure"],
    backup_tools: ["Bougie", "Video laryngoscope"],
    skill_level: "Basic",
    image: { alt: "Standard ETT", url: "https://www.eboshealthcare.com.au/globalassets/product-images/1/100-199.jpg?mode=max&width=800&height=800" },
    supported_procedure_types: [
      "General Surgery – Abdomen",
      "Orthopedics",
      "Trauma surgery",
      "Neurosurgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU",
      "Emergency Department (ED)"
    ],
    preferred_conditions: [
      "Full stomach / Aspiration risk",
      "None / No special condition"
    ],
    contraindicated_conditions: [],
    consciousness_levels: ["Unconscious"],
    urgency_levels: ["Emergency", "Non-emergency"],
    sedation_status: ["Sedated"]
  },

  {
    id: "ett_reinforced",
    tool_name: "Reinforced endotracheal tube",
    tool_category: "Endotracheal",
    insertion_method: "Oral intubation with stylet",
    insertion_site: "Oral",
    contraindications: [],
    advantages: ["Resists kinking"],
    preferred_in: ["Head & neck surgery"],
    warnings: ["Check patency after positioning"],
    backup_tools: ["Standard ETT"],
    skill_level: "Advanced",
    image: { alt: "Reinforced ETT", url: "ihttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMXb_Dzl3Sgk67nfiwUtA-SCNL6STLBXVzA&s" },
    supported_procedure_types: [
      "Head & Neck",
      "ENT / Airway surgery",
      "Neurosurgery"
    ],
    supported_locations: ["Operating Room (OR)"],
    preferred_conditions: ["None / No special condition"],
    contraindicated_conditions: [],
    consciousness_levels: ["Unconscious"],
    urgency_levels: ["Emergency", "Non-emergency"],
    sedation_status: ["Sedated"]
  },

  {
    id: "dlt",
    tool_name: "Double-lumen endotracheal tube",
    tool_category: "Endotracheal",
    insertion_method: "Oral intubation with bronchoscopic confirmation",
    insertion_site: "Tracheal",
    contraindications: [],
    advantages: ["Lung isolation"],
    preferred_in: ["Thoracic surgery"],
    warnings: ["Requires correct positioning"],
    backup_tools: ["Bronchial blocker"],
    skill_level: "Advanced",
    image: { alt: "DLT", url: "https://d1jhm577bx9zey.cloudfront.net/admin/public/getimage.ashx?Crop=0&Image=/Files/Images/ambu/products/airway-management/Double_lumen_tubes_with_integrated_camera/VivaSight_DL/VivaSight-2-DLT-3.png&Width=1600&Height=0&Quality=90&donotupscale=true" },
    supported_procedure_types: ["Thoracic"],
    supported_locations: ["Operating Room (OR)", "ICU"],
    preferred_conditions: ["Need for lung isolation"],
    contraindicated_conditions: [],
    consciousness_levels: ["Unconscious"],
    urgency_levels: ["Non-emergency"],
    sedation_status: ["Sedated"]
  },

  {
    id: "lma_classic",
    tool_name: "Classic LMA",
    tool_category: "Supraglottic",
    insertion_method: "Blind supraglottic insertion",
    insertion_site: "Oral",
    contraindications: [],
    advantages: ["Rapid placement"],
    preferred_in: ["Short procedures"],
    warnings: ["Does not protect from aspiration"],
    backup_tools: ["ETT"],
    skill_level: "Basic",
    image: { alt: "Classic LMA", url: "https://us.myteleflex.com/medias/-300Wx300H-100040-supraglottic-airways-100030-LMA-Classic-Reusable-1200.png?context=bWFzdGVyfGltYWdlc3w2NTI4MnxpbWFnZS9wbmd8YURObUwyZzBNeTg0T1RJNU5UWTVPRE15T1Rrd0x5OHpNREJYZURNd01FZ3ZNVEF3TURRd1gxOXpkWEJ5WVdkc2IzUjBhV010WVdseWQyRjVjMTh4TURBd016QmZURTFCTFVOc1lYTnphV010VW1WMWMyRmliR1ZmTVRJd01DNXdibWN8NjU2Y2E0ZGM0Mzk1OWM1MjIxMmU5MGY4YjZhNWFlNDE5MzExZDU1MGI0ZGQxMTEyNmI1ODI1YWIzOTllMTVjMQ" },
    supported_procedure_types: [
      "Short procedure / Day case",
      "Endoscopy"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Outside OR (NORA: endoscopy / radiology)"
    ],
    preferred_conditions: ["None / No special condition"],
    contraindicated_conditions: [
      "Full stomach / Aspiration risk",
      "Pregnancy"
    ],
    consciousness_levels: ["Unconscious"],
    urgency_levels: ["Non-emergency"],
    sedation_status: ["Sedated"]
  },

  {
    id: "igel",
    tool_name: "i-gel supraglottic airway",
    tool_category: "Supraglottic",
    insertion_method: "Non-inflatable supraglottic device",
    insertion_site: "Oral",
    contraindications: [],
    advantages: ["Fast rescue airway"],
    preferred_in: ["Emergency rescue"],
    warnings: ["Aspiration risk remains"],
    backup_tools: ["ETT"],
    skill_level: "Basic",
    image: { alt: "i-gel", url: "images/igel.png" },
    supported_procedure_types: [
      "Trauma surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Emergency Department (ED)",
      "Prehospital / Ambulance"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure"
    ],
    contraindicated_conditions: [
      "Full stomach / Aspiration risk"
    ],
    consciousness_levels: ["Unconscious"],
    urgency_levels: ["Emergency"],
    sedation_status: ["Sedated"]
  },

  {
    id: "fiberoptic_awake",
    tool_name: "Fiberoptic bronchoscope (awake)",
    tool_category: "Visualization",
    insertion_method: "Awake scope-guided intubation",
    insertion_site: "Oral",
    contraindications: [],
    advantages: ["Minimal neck movement"],
    preferred_in: ["Anticipated difficult airway"],
    warnings: ["Requires patient cooperation"],
    backup_tools: ["Video laryngoscope"],
    skill_level: "Advanced",
    image: { alt: "Fiberoptic", url: "https://img500.exportersindia.com/product_images/bc-500/2018/8/5843882/fiber-optic-bronchoscope-1535089183-4225702.jpeg" },
    supported_procedure_types: [
      "ENT / Airway surgery",
      "Head & Neck",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU"
    ],
    preferred_conditions: [
      "Anticipated difficult airway",
      "Limited neck mobility"
    ],
    contraindicated_conditions: [
      "Severe hypoxemia / Respiratory failure"
    ],
    consciousness_levels: ["Awake", "Semi-conscious"],
    urgency_levels: ["Non-emergency"],
    sedation_status: ["Not sedated"]
  },

  {
    id: "bougie",
    tool_name: "Bougie (intubating introducer)",
    tool_category: "Adjunct",
    insertion_method: "Introducer passed then tube railroaded",
    insertion_site: "Other",
    contraindications: [],
    advantages: ["Improves success in poor view"],
    preferred_in: ["Difficult laryngoscopy"],
    warnings: ["Avoid forceful insertion"],
    backup_tools: ["Video laryngoscope"],
    skill_level: "Basic",
    image: { alt: "Bougie", url: "https://lh5.googleusercontent.com/proxy/umX0nqUcC2HtogzSAiS1SLBKtPsrbnI12rGfu6NvuIxxKcVikfii1dUbOZXlD8dqzRhJoSQ-U9FIeqS86Cd_QLo4duQi-KzibZ0U4d768QHRb8HPWeRDIb1pHCdib62EoU3HR5x18sbsPJpxwuru72ooeRbIXQ" },
    supported_procedure_types: [
      "General Surgery – Abdomen",
      "Trauma surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Emergency Department (ED)",
      "ICU"
    ],
    preferred_conditions: ["Anticipated difficult airway"],
    contraindicated_conditions: [],
    consciousness_levels: ["Unconscious"],
    urgency_levels: ["Emergency", "Non-emergency"],
    sedation_status: ["Sedated"]
  },
  {
  id: "oral_rae_ett",
  tool_name: "Oral RAE endotracheal tube",
  tool_category: "Endotracheal",
  insertion_method: "Oral intubation with preformed tube",
  insertion_site: "Oral",
  contraindications: [],
  advantages: ["Keeps tube away from surgical field"],
  preferred_in: ["ENT procedures"],
  warnings: ["Fixed curvature limits repositioning"],
  backup_tools: ["Reinforced ETT"],
  skill_level: "Basic",
  image: { alt: "Oral RAE ETT", url: "https://mainlinemedical.com/wp-content/uploads/2020/04/1-1117-35_Web.jpg" },
  supported_procedure_types: [
    "ENT / Airway surgery",
    "Head & Neck"
  ],
  supported_locations: ["Operating Room (OR)"],
  preferred_conditions: ["None / No special condition"],
  contraindicated_conditions: [],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},

{
  id: "nasal_rae_ett",
  tool_name: "Nasal RAE endotracheal tube",
  tool_category: "Endotracheal",
  insertion_method: "Nasal intubation under laryngoscopy or fiberoptic guidance",
  insertion_site: "Nasal",
  contraindications: [],
  advantages: ["Frees oral surgical field"],
  preferred_in: ["Maxillofacial surgery"],
  warnings: ["Risk of epistaxis"],
  backup_tools: ["Standard ETT"],
  skill_level: "Advanced",
  image: { alt: "Nasal RAE ETT", url: "https://mainlinemedical.com/wp-content/uploads/2020/04/1-1178-35_Web.jpg" },
  supported_procedure_types: [
    "ENT / Airway surgery",
    "Head & Neck"
  ],
  supported_locations: ["Operating Room (OR)"],
  preferred_conditions: ["None / No special condition"],
  contraindicated_conditions: [
    "Facial trauma / blood in airway"
  ],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
  {
    id: "surgical_cric",
    tool_name: "Surgical cricothyrotomy",
    tool_category: "Rescue",
    insertion_method: "Open surgical airway",
    insertion_site: "Surgical",
    contraindications: [],
    advantages: ["Life-saving airway"],
    preferred_in: ["CICO scenario"],
    warnings: ["High-risk procedure"],
    backup_tools: [],
    skill_level: "Advanced",
    image: { alt: "Cricothyrotomy", url: "images/cric.png" },
    supported_procedure_types: [
      "Trauma surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Emergency Department (ED)",
      "Prehospital / Ambulance"
    ],
    preferred_conditions: [
      "Burns / inhalation injury",
      "Facial trauma / blood in airway"
    ],
    contraindicated_conditions: [],
    consciousness_levels: ["Unconscious"],
    urgency_levels: ["Emergency"],
    sedation_status: ["Sedated"]
  }
];

/* =========================================================
   HELPERS
========================================================= */
function populateSelect(select, values) {
  values.forEach(v => {
    const o = document.createElement("option");
    o.value = v;
    o.textContent = v;
    select.appendChild(o);
  });
}

/* =========================================================
   SCORING LOGIC
========================================================= */
function scoreToolAgainstContext(
  tool,
  procedureType,
  location,
  condition,
  consciousness,
  urgency,
  sedation
) {
  if (tool.contraindicated_conditions.includes(condition)) return null;
  if (!tool.consciousness_levels.includes(consciousness)) return null;
  if (!tool.urgency_levels.includes(urgency)) return null;
  if (!tool.sedation_status.includes(sedation)) return null;

  let score = 0;
  const reasons = [];

  if (tool.preferred_conditions.includes(condition)) score += 3;
  if (tool.supported_procedure_types.includes(procedureType)) score += 2;
  if (tool.supported_locations.includes(location)) score += 2;

  const surgical = [
    "General Surgery – Abdomen",
    "Head & Neck",
    "ENT / Airway surgery",
    "Thoracic",
    "Neurosurgery",
    "Obstetrics",
    "Orthopedics",
    "Trauma surgery"
  ];

  if (
    surgical.includes(procedureType) &&
    tool.tool_category === "Endotracheal"
  ) {
    score += 4;
  }

  return { tool, score, reasons };
}

/* =========================================================
   UI RENDER
========================================================= */
function buildCardHTML(entry, label) {
  if (!entry) return "";
  const t = entry.tool;
  return `
    <article class="card ${label === "Recommended" ? "recommended" : ""}">
      <h3>${label}</h3>
      <img src="${t.image.url}" alt="${t.image.alt}">
      <p><strong>${t.tool_name}</strong></p>
      <p>${t.insertion_method}</p>
      <p class="warning">${t.warnings[0]}</p>
    </article>
  `;
}

function renderResults(best, b1, b2) {
  document.getElementById("results").innerHTML = `
    <div class="results-grid">
      ${buildCardHTML(best, "Recommended")}
      ${b1 ? buildCardHTML(b1, "Backup 1") : ""}
      ${b2 ? buildCardHTML(b2, "Backup 2") : ""}
    </div>
  `;
}

/* =========================================================
   EVENT HANDLER
========================================================= */
function handleCalculateClick() {
  const scored = [];

  TOOLS_DB.forEach(t => {
    const e = scoreToolAgainstContext(
      t,
      procedureSelect.value,
      locationSelect.value,
      conditionSelect.value,
      consciousnessSelect.value,
      urgencySelect.value,
      sedationSelect.value
    );
    if (e) scored.push(e);
  });

  scored.sort((a, b) => b.score - a.score);
  renderResults(scored[0], scored[1], scored[2]);
}

/* =========================================================
   INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  window.procedureSelect = document.getElementById("procedureSelect");
  window.locationSelect = document.getElementById("locationSelect");
  window.conditionSelect = document.getElementById("conditionSelect");
  window.consciousnessSelect = document.getElementById("consciousnessSelect");
  window.urgencySelect = document.getElementById("urgencySelect");
  window.sedationSelect = document.getElementById("sedationSelect");
  window.calculateBtn = document.getElementById("calculateBtn");

  populateSelect(procedureSelect, PROCEDURE_TYPES);
  populateSelect(locationSelect, LOCATIONS);
  populateSelect(conditionSelect, CONDITIONS);
  populateSelect(consciousnessSelect, CONSCIOUSNESS_LEVELS);
  populateSelect(urgencySelect, URGENCY_LEVELS);
  populateSelect(sedationSelect, SEDATION_STATUS);

  calculateBtn.addEventListener("click", handleCalculateClick);
});
