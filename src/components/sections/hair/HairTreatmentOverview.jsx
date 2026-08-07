import PremiumTreatmentCardsSection from '../shared/PremiumTreatmentCardsSection';

export default function HairTreatmentOverview() {
  const featuredTreatments = [
    {
      title: 'PRP Hair Treatment',
      description: 'Regenerative therapy that stimulates follicles and supports natural hair regrowth with minimal downtime.',
      benefits: ['Natural stimulation', 'Minimal downtime', 'Progressive density'],
      path: '/treatments/prp-hair-treatment',
      icon: 'sparkles',
      duration: '45–60 mins',
      recovery: 'Minimal',
      bestFor: 'Early Thinning',
    },
    {
      title: 'GFC Hair Treatment',
      description: 'Advanced growth-factor therapy for fuller, healthier hair with targeted scalp precision.',
      benefits: ['Concentrated growth factors', 'Targeted delivery', 'Visible thickening'],
      path: '/treatments/gfc-hair-treatment',
      icon: 'shieldCheck',
      duration: '45–60 mins',
      recovery: 'Minimal',
      bestFor: 'Hair Density',
    },
    {
      title: 'Hair Transplant',
      description: 'Precision FUE restoration for natural-looking hairlines and lasting density with premium surgical care.',
      benefits: ['Natural hairline', 'Scar-minimal FUE', 'Permanent grafts'],
      path: '/treatments/hair-transplant',
      icon: 'stethoscope',
      duration: '4–8 hrs',
      recovery: '7–10 Days',
      bestFor: 'Receding Hairline',
    },
    {
      title: 'Hair Regrowth Therapy',
      description: 'Medical regimens designed to revive dormant follicles and support healthier growth cycles.',
      benefits: ['Early thinning rescue', 'Customised plans', 'Tracked progress'],
      path: '/treatments/hair-regrowth-treatment',
      icon: 'leaf',
      duration: '30–45 mins',
      recovery: 'Short Recovery',
      bestFor: 'Shedding Concerns',
    },
    {
      title: 'Hair Loss Treatment',
      description: 'Comprehensive care for diffuse shedding, scalp issues, and pattern loss with expert medical guidance.',
      benefits: ['Medical assessment', 'Tailored protocols', 'Scalp support'],
      path: '/treatments/hair-loss-treatment',
      icon: 'heartPulse',
      duration: '30–60 mins',
      recovery: 'Short Recovery',
      bestFor: 'Hair Fall',
    },
    {
      title: 'Mesotherapy',
      description: 'Micro-delivery of vitamins and nutrients to nourish the scalp and support stronger hair vitality.',
      benefits: ['Targeted nourishment', 'Improved scalp health', 'Clinic-supervised'],
      path: '/contact',
      icon: 'droplets',
      duration: '20–30 mins',
      recovery: 'Minimal',
      bestFor: 'Scalp Nourishment',
    },
    {
      title: 'Scalp Detox',
      description: 'A deep scalp reset for buildup, irritation, and healthier conditions that support hair growth.',
      benefits: ['Scalp clarity', 'Soothes irritation', 'Boosts comfort'],
      path: '/contact',
      icon: 'badgeCheck',
      duration: '20–30 mins',
      recovery: 'Minimal',
      bestFor: 'Scalp Buildup',
    },
    {
      title: 'Hair Strengthening Therapy',
      description: 'Structured care to improve hair resilience, reduce breakage, and support lasting density.',
      benefits: ['Reduces breakage', 'Improves resilience', 'Improves shine'],
      path: '/contact',
      icon: 'zap',
      duration: '30–45 mins',
      recovery: 'Minimal',
      bestFor: 'Weak Hair',
    },
    {
      title: 'Dandruff Treatment',
      description: 'Targeted scalp therapy that calms flakes, irritation, and dryness for healthier hair growth.',
      benefits: ['Calms flakes', 'Soothes irritation', 'Healthier scalp'],
      path: '/contact',
      icon: 'leaf',
      duration: '20–30 mins',
      recovery: 'Minimal',
      bestFor: 'Scalp Flakes',
    },
    {
      title: 'Beard Growth Therapy',
      description: 'Specialist support for patchy growth, beard density, and more defined facial hair confidence.',
      benefits: ['Improves density', 'Supports growth', 'Confidence boost'],
      path: '/contact',
      icon: 'sparkles',
      duration: '30–45 mins',
      recovery: 'Minimal',
      bestFor: 'Beard Density',
    },
  ];

  return (
    <PremiumTreatmentCardsSection
      eyebrow="Featured Hair Treatments"
      title="Restoration Plans for Fuller, Healthier Hair"
      description="A tailored line of hair restoration treatments combining science, artistry, and premium post-care for lasting confidence."
      cards={featuredTreatments}
    />
  );
}
