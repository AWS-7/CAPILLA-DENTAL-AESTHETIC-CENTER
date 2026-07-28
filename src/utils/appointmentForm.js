import { BRANCH_CONTACTS, DEFAULT_BRANCH } from '../config/contact.js';

export const DEPARTMENT_OPTIONS = ['Dental', 'Skin', 'Hair'];
export const BRANCH_OPTIONS = [
  { value: 'chennai', label: 'Perumbakkam · Chennai' },
  { value: 'salem', label: 'Salem' },
];

export const TREATMENT_OPTIONS = {
  Dental: [
    'Dental Implants',
    'Root Canal Treatment',
    'Smile Design',
    'Teeth Whitening',
    'Braces & Aligners',
    'Dental Veneers',
    'Wisdom Tooth Extraction',
    'Pediatric Dentistry',
    'Dental Extraction',
    'Impacted Tooth Extraction',
    'Dental Braces',
    'Artificial Dental Braces',
    'Braces & Invisalign',
    'Cosmetic Fillings',
    'Gum Disease Treatment',
    'Teeth Cleaning',
  ],
  Skin: [
    'Hydra Facial',
    'Chemical Peel',
    'Acne Treatment',
    'Acne Scar Treatment',
    'Pigmentation',
    'Skin Brightening',
    'Glass Skin',
    'Anti Ageing',
    'Medi Facials',
    'Skin Peels',
    'Acne Correction',
    'Acne Scar Reduction',
    'Laser Hair Removal',
    'IV Glow / Whitening',
    'Skin Whitening Treatment',
    'Korean Glass Skin Facial',
    'Dark Circle Treatment',
    'Melasma Treatment',
    'Skin Rejuvenation Therapy',
    'Face GFC Treatment',
  ],
  Hair: [
    'PRP Hair Therapy',
    'GFC Therapy',
    'Hair Transplant',
    'Hair Loss Treatment',
    'Scalp Analysis',
    'Low Level Laser Therapy',
    'Dandruff Treatment',
    'Hair Regrowth',
    'QR678 Hair Therapy',
    'Exosomes Treatment',
    'Hair Re-Growth Therapy',
    'Hair Extension',
    'Scalp Micropigmentation',
    'Micro Needling (Hair)',
  ],
};

export function getTreatmentOptions(department) {
  const normalized = department?.trim();
  return normalized ? TREATMENT_OPTIONS[normalized] ?? [] : [];
}

function normalizeBranch(branch) {
  if (!branch) return DEFAULT_BRANCH;
  const key = `${branch}`.trim().toLowerCase();
  return key in BRANCH_CONTACTS ? key : DEFAULT_BRANCH;
}

export function getBranchNumber(branch) {
  return BRANCH_CONTACTS[normalizeBranch(branch)]?.number ?? BRANCH_CONTACTS[DEFAULT_BRANCH].number;
}

export function validateAppointmentForm(form, today = new Date().toISOString().split('T')[0]) {
  const errors = {};

  if (form.name?.trim().length < 2) errors.name = 'Please enter your name.';
  if (form.phone?.replace(/\D/g, '').length < 10) errors.phone = 'Enter a valid phone number.';
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address.';
  if (!form.branch) errors.branch = 'Please select a branch.';
  if (!form.department) errors.department = 'Please select a department.';
  if (!form.treatment) errors.treatment = 'Please select a treatment.';
  if (!form.date) errors.date = 'Please select a preferred date.';
  if (form.date && form.date < today) errors.date = 'Date cannot be in the past.';
  if (!form.time) errors.time = 'Please select a preferred time.';

  return errors;
}

export function buildAppointmentWhatsAppLink(form = {}) {
  const branch = normalizeBranch(form.branch);
  const branchInfo = BRANCH_CONTACTS[branch];
  const lines = [
    '*New Appointment Request*',
    form.name ? `Name: ${form.name}` : null,
    form.phone ? `Phone: ${form.phone}` : null,
    branchInfo?.label ? `Branch: ${branchInfo.label}` : null,
    form.department ? `Department: ${form.department}` : null,
    form.treatment ? `Treatment: ${form.treatment}` : null,
    form.date ? `Preferred Date: ${form.date}` : null,
    form.time ? `Preferred Time: ${form.time}` : null,
    form.message ? `Message: ${form.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${branchInfo?.number ?? BRANCH_CONTACTS[DEFAULT_BRANCH].number}?text=${encodeURIComponent(lines)}`;
}
