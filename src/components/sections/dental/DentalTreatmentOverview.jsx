import PremiumTreatmentCardsSection from '../shared/PremiumTreatmentCardsSection';

export default function DentalTreatmentOverview() {
  const featuredTreatments = [
    {
      title: 'Dental Implants',
      description: 'Precision implantology for permanent tooth replacement with a natural look, comfortable recovery, and long-term stability.',
      benefits: ['Permanent tooth replacement', 'Natural-looking smile', 'Long-lasting solution'],
      path: '/treatments/dental-implants',
      icon: 'sparkles',
      duration: '45–90 mins',
      recovery: 'Few Days',
      bestFor: 'Missing Teeth',
    },
    {
      title: 'Root Canal Treatment',
      description: 'Gentle endodontic care that relieves pain, preserves your natural tooth, and restores function with confidence.',
      benefits: ['Relieves severe sensitivity', 'Preserves natural tooth', 'Comfort-focused care'],
      path: '/treatments/root-canal-treatment',
      icon: 'shieldCheck',
      duration: '45–75 mins',
      recovery: '1–2 Days',
      bestFor: 'Severe Sensitivity',
    },
    {
      title: 'Teeth Whitening',
      description: 'Clinical whitening that brightens stained teeth with safe protocols and a polished, radiant finish.',
      benefits: ['Fast visible results', 'Safe enamel care', 'Custom shade matching'],
      path: '/treatments/teeth-whitening',
      icon: 'smile',
      duration: '45–60 mins',
      recovery: 'Same Day',
      bestFor: 'Stained Teeth',
    },
    {
      title: 'Smile Design',
      description: 'Digital smile planning for balanced proportions, facial harmony, and a naturally confident new expression.',
      benefits: ['Digital smile planning', 'Facial harmony', 'Customised refinement'],
      path: '/treatments/smile-design',
      icon: 'sparkles',
      duration: '60–120 mins',
      recovery: 'Short Recovery',
      bestFor: 'Smile Confidence',
    },
    {
      title: 'Braces & Aligners',
      description: 'Elegant orthodontic solutions for misaligned teeth, improved bite function, and a more confident smile.',
      benefits: ['Corrects alignment', 'Improves bite', 'Predictable results'],
      path: '/treatments/braces-aligners',
      icon: 'badgeCheck',
      duration: '30–45 mins',
      recovery: 'Minimal',
      bestFor: 'Misaligned Teeth',
    },
    {
      title: 'Smile Makeover',
      description: 'A complete aesthetic transformation combining artistry and restorative care for a luminous final result.',
      benefits: ['Full facial harmony', 'Natural finishing', 'Confidence boost'],
      path: '/treatments/smile-design',
      icon: 'sparkles',
      duration: '60–180 mins',
      recovery: 'A Few Days',
      bestFor: 'Full Smile Refresh',
    },
    {
      title: 'Tooth Extraction',
      description: 'Comfort-focused extraction care for damaged or crowded teeth, designed for smooth healing and ease.',
      benefits: ['Gentle removal', 'Minimal discomfort', 'Controlled healing'],
      path: '/contact',
      icon: 'shieldCheck',
      duration: '20–40 mins',
      recovery: '3–5 Days',
      bestFor: 'Damaged Teeth',
    },
    {
      title: 'Dental Fillings',
      description: 'Tooth-coloured restorations that repair decay beautifully while preserving natural strength and comfort.',
      benefits: ['Natural finish', 'Restores strength', 'Quick procedure'],
      path: '/contact',
      icon: 'smile',
      duration: '20–45 mins',
      recovery: 'Same Day',
      bestFor: 'Cavities',
    },
    {
      title: 'Teeth Cleaning',
      description: 'Professional scaling and polishing for fresher breath, healthier gums, and a cleaner smile.',
      benefits: ['Freshens breath', 'Healthier gums', 'Removes plaque'],
      path: '/contact',
      icon: 'badgeCheck',
      duration: '30–60 mins',
      recovery: 'None',
      bestFor: 'Plaque Removal',
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Gentle, child-friendly care that supports healthy habits, comfort, and confidence from the first visit onward.',
      benefits: ['Child-first approach', 'Preventive focus', 'Comfort-led visits'],
      path: '/contact',
      icon: 'baby',
      duration: '20–45 mins',
      recovery: 'Minimal',
      bestFor: 'Child Dental Care',
    },
  ];

  return (
    <PremiumTreatmentCardsSection
      eyebrow="Featured Dental Treatments"
      title="Luxury Dental Care, Designed Around Your Smile"
      description="A refined collection of premium dental treatments for implants, whitening, braces, smile design, and restorative care — all delivered with clinical precision and elevated comfort."
      cards={featuredTreatments}
    />
  );
}
