import { placeholders } from './content';

export const doctorsSeo = {
  title:
    'Meet Our Doctors | Cosmetic Dentist & Aesthetic Specialists | Capilla Perumbakkam',
  description:
    'Meet Capilla’s expert doctors in Perumbakkam — experienced cosmetic dentists, skin specialists, and trichologists in Chennai. Book a consultation with certified professionals near you.',
  keywords:
    'Dentist Near Me, Cosmetic Dentist Chennai, Best Dental Clinic in Perumbakkam, Skin Clinic Perumbakkam, Hair Clinic Perumbakkam, Dental Clinic in Perumbakkam',
  canonical: 'https://capillaclinic.com/doctors',
};

export const doctorsPageIntro = {
  title: 'Meet Our Expert Doctors',
  subtitle:
    'Board-certified specialists in dental care, medical aesthetics, and hair restoration — dedicated to precision outcomes and a luxury patient experience in Perumbakkam.',
};

export const doctorProfiles = [
  {
    id: 'dr-ananya-mehta',
    name: 'Dr. Ananya Mehta',
    qualification: 'MDS — Prosthodontics & Implantology',
    specialization: 'Implantology & Smile Design',
    experience: '14+ Years',
    languages: ['English', 'Tamil', 'Hindi'],
    shortDescription:
      'Chief dental surgeon specialising in precision implantology and bespoke digital smile makeovers for natural, lasting results.',
    image: placeholders.doctor,
    education: [
      'BDS — Prestigious Dental College, Chennai',
      'MDS — Prosthodontics & Implantology',
      'Fellowship in Digital Smile Design',
    ],
    experienceList: [
      '14+ years in advanced restorative and implant dentistry',
      'Led 2,000+ successful implant and smile design cases',
      'Faculty speaker at regional aesthetic dentistry forums',
    ],
    expertise: [
      'Dental Implants',
      'Smile Design',
      'Full Mouth Rehabilitation',
      'Veneers & Crowns',
      'Cosmetic Dentistry',
    ],
    memberships: [
      'Indian Dental Association',
      'Indian Prosthodontic Society',
      'International Congress of Oral Implantologists',
    ],
    certifications: [
      'Advanced Implantology Certification',
      'Digital Dentistry & CAD/CAM Training',
      'Sedation Dentistry Awareness Program',
    ],
    interests: ['Digital smile aesthetics', 'Minimally invasive prosthetics', 'Patient education'],
    timings: [
      { day: 'Mon – Fri', hours: '10:00 AM – 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM – 2:00 PM' },
    ],
  },
  {
    id: 'dr-rohan-kapoor',
    name: 'Dr. Rohan Kapoor',
    qualification: 'MD — Dermatology & Aesthetic Medicine',
    specialization: 'Skin & Anti-Aging',
    experience: '11+ Years',
    languages: ['English', 'Hindi', 'Tamil'],
    shortDescription:
      'Aesthetic physician focused on medical-grade facial therapies, peels, and anti-aging protocols with refined, natural results.',
    image: placeholders.doctorMale,
    education: [
      'MBBS — Leading Medical University',
      'MD — Dermatology',
      'Diploma in Aesthetic Medicine',
    ],
    experienceList: [
      '11+ years in clinical dermatology and aesthetics',
      'Specialist in HydraFacial and chemical peel protocols',
      'Consulted for 3,500+ skin rejuvenation treatments',
    ],
    expertise: [
      'HydraFacial',
      'Chemical Peels',
      'Acne & Pigmentation',
      'Anti-Aging Therapies',
      'Glass Skin Protocols',
    ],
    memberships: [
      'Indian Association of Dermatologists',
      'Cosmetic Dermatology Society of India',
    ],
    certifications: [
      'Advanced Chemical Peel Certification',
      'Injectables & Aesthetic Dermatology Workshop',
      'Laser Safety Training',
    ],
    interests: ['Barrier repair science', 'Evidence-based skincare', 'Subtle rejuvenation'],
    timings: [
      { day: 'Tue – Sat', hours: '11:00 AM – 7:00 PM' },
      { day: 'Sunday', hours: 'By Appointment' },
    ],
  },
  {
    id: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    qualification: 'MD — Trichology & Hair Restoration',
    specialization: 'Hair Restoration',
    experience: '9+ Years',
    languages: ['English', 'Tamil', 'Malayalam'],
    shortDescription:
      'Trichologist specialising in PRP, GFC, and FUE hair transplant planning for natural density and lifelong confidence.',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
    education: [
      'MBBS — Accredited Medical College',
      'MD — Dermatology with Trichology Focus',
      'Advanced FUE Hair Transplant Training',
    ],
    experienceList: [
      '9+ years in medical trichology and hair restoration',
      'Performed hundreds of PRP/GFC and FUE procedures',
      'Known for natural hairline design and patient counselling',
    ],
    expertise: [
      'PRP Hair Treatment',
      'GFC Therapy',
      'Hair Transplant (FUE)',
      'Pattern Hair Loss Management',
      'Scalp Diagnostics',
    ],
    memberships: [
      'Association of Hair Restoration Surgeons',
      'Indian Association of Dermatologists',
    ],
    certifications: [
      'FUE Hair Transplant Certification',
      'Growth Factor Therapy Workshop',
      'Trichoscopy Diagnostics Training',
    ],
    interests: ['Regenerative hair science', 'Female pattern hair loss', 'Natural hairlines'],
    timings: [
      { day: 'Mon – Sat', hours: '10:00 AM – 5:00 PM' },
      { day: 'Evening slots', hours: 'By Prior Booking' },
    ],
  },
];

export const whyChooseDoctors = [
  {
    id: 1,
    title: 'Highly Experienced',
    description: 'Years of specialised practice across dental, skin, and hair care.',
    icon: 'Award',
  },
  {
    id: 2,
    title: 'Certified Professionals',
    description: 'Advanced degrees, fellowships, and recognised clinical credentials.',
    icon: 'BadgeCheck',
  },
  {
    id: 3,
    title: 'Advanced Techniques',
    description: 'Evidence-based methods with modern digital and aesthetic tools.',
    icon: 'Sparkles',
  },
  {
    id: 4,
    title: 'Patient-Focused Care',
    description: 'Clear communication, comfort-first visits, and ethical advice.',
    icon: 'HeartHandshake',
  },
  {
    id: 5,
    title: 'Continuous Learning',
    description: 'Ongoing training to stay aligned with international standards.',
    icon: 'GraduationCap',
  },
  {
    id: 6,
    title: 'Modern Equipment',
    description: 'Treatment suites equipped for precision diagnostics and care.',
    icon: 'Microscope',
  },
];

export const consultationSteps = [
  {
    id: 1,
    title: 'Book Appointment',
    description: 'Schedule online, via WhatsApp, or by phone at your convenience.',
  },
  {
    id: 2,
    title: 'Consultation',
    description: 'Meet your specialist for a private, unhurried clinical discussion.',
  },
  {
    id: 3,
    title: 'Diagnosis',
    description: 'Digital scans and assessments to understand your unique needs.',
  },
  {
    id: 4,
    title: 'Treatment Plan',
    description: 'A transparent, personalised plan with clear timelines and pricing.',
  },
  {
    id: 5,
    title: 'Follow-up Care',
    description: 'Continued support to protect results and long-term wellness.',
  },
];

export const doctorFaqs = [
  {
    id: 1,
    question: 'How do I book an appointment?',
    answer:
      'You can book through our Contact page, WhatsApp consultation, or by calling the clinic directly. Our team will help match you with the right specialist and preferred time slot.',
  },
  {
    id: 2,
    question: 'Which doctor should I consult?',
    answer:
      'For dental implants, smile design, or restorative work, see Dr. Ananya Mehta. For skin treatments and anti-aging, consult Dr. Rohan Kapoor. For hair loss or transplant planning, book Dr. Priya Nair. Our reception team can also guide you.',
  },
  {
    id: 3,
    question: 'Do you accept emergency appointments?',
    answer:
      'Yes. We accommodate urgent dental needs wherever possible during working hours. Call us immediately so we can prioritise your visit and prepare the clinical team.',
  },
  {
    id: 4,
    question: 'How long is the consultation?',
    answer:
      'Initial consultations typically last 20–40 minutes depending on complexity. This allows time for examination, discussion of options, and clear next steps without rushing.',
  },
];
