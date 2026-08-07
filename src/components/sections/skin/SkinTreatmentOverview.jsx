import PremiumTreatmentCardsSection from '../shared/PremiumTreatmentCardsSection';

export default function SkinTreatmentOverview() {
  const featuredTreatments = [
    {
      title: 'Hydrafacial',
      description: 'A deep cleanse, exfoliation, and hydration ritual that restores glow instantly with no downtime.',
      benefits: ['Instant glow', 'No downtime', 'Custom boosters'],
      path: '/treatments/hydrafacial',
      icon: 'droplets',
      duration: '30–45 mins',
      recovery: 'Same Day',
      bestFor: 'Dull Skin',
    },
    {
      title: 'Chemical Peel',
      description: 'Medical-grade exfoliation that refines texture, smooths tone, and encourages healthy skin renewal.',
      benefits: ['Smoother texture', 'Brighter tone', 'Clinical protocols'],
      path: '/treatments/chemical-peel',
      icon: 'leaf',
      duration: '20–40 mins',
      recovery: '2–4 Days',
      bestFor: 'Texture Renewal',
    },
    {
      title: 'Korean Glass Skin Facial',
      description: 'A layered hydration treatment for dewy, luminous skin with a refined glass-like finish.',
      benefits: ['Dewy finish', 'Pore refinement', 'Barrier support'],
      path: '/treatments/korean-glass-skin-facial',
      icon: 'sparkles',
      duration: '45–60 mins',
      recovery: 'Same Day',
      bestFor: 'Glass Glow',
    },
    {
      title: 'Acne Scar Treatment',
      description: 'Specialist protocols design to soften acne marks and restore smoother, more even texture.',
      benefits: ['Scar refinement', 'Texture improvement', 'Confidence restored'],
      path: '/treatments/acne-scar-treatment',
      icon: 'shieldCheck',
      duration: '30–60 mins',
      recovery: 'Few Days',
      bestFor: 'Acne Marks',
    },
    {
      title: 'Skin Brightening',
      description: 'Targeted brightening care that refreshes tired tones and enhances natural skin radiance.',
      benefits: ['Even tone', 'Luminous finish', 'Gentle actives'],
      path: '/contact',
      icon: 'smile',
      duration: '30–45 mins',
      recovery: 'Minimal',
      bestFor: 'Uneven Tone',
    },
    {
      title: 'Anti Ageing Treatment',
      description: 'Refined anti-ageing therapies for softer lines, firmer skin, and a lifted, rested appearance.',
      benefits: ['Softens fine lines', 'Firms skin', 'Natural results'],
      path: '/treatments/anti-ageing-treatment',
      icon: 'heartPulse',
      duration: '45–60 mins',
      recovery: 'Minimal',
      bestFor: 'Fine Lines',
    },
    {
      title: 'Pigmentation Treatment',
      description: 'Evidence-based solutions for stubborn pigmentation, sun spots, and uneven skin tone.',
      benefits: ['Pigment control', 'Custom plans', 'Sun-safe guidance'],
      path: '/contact',
      icon: 'zap',
      duration: '30–60 mins',
      recovery: 'Few Days',
      bestFor: 'Pigment Spots',
    },
    {
      title: 'Carbon Laser Facial',
      description: 'A soothing laser facial that clears congestion and leaves skin visibly fresh and refined.',
      benefits: ['Deep cleanse', 'Refined pores', 'Fresh glow'],
      path: '/contact',
      icon: 'stethoscope',
      duration: '20–30 mins',
      recovery: 'Minimal',
      bestFor: 'Oily Skin',
    },
    {
      title: 'Medi Facial',
      description: 'Medical-grade facial care tailored to your skin type for visible freshness and calm.',
      benefits: ['Personalised ritual', 'Clinical actives', 'Visible freshness'],
      path: '/contact',
      icon: 'sparkles',
      duration: '45–60 mins',
      recovery: 'Same Day',
      bestFor: 'Sensitive Skin',
    },
    {
      title: 'Skin Tightening',
      description: 'Non-surgical tightening therapies designed to refresh laxity and contour the skin with elegance.',
      benefits: ['Tighter look', 'Lifting effect', 'Minimal downtime'],
      path: '/contact',
      icon: 'shieldCheck',
      duration: '30–45 mins',
      recovery: 'Minimal',
      bestFor: 'Skin Laxity',
    },
  ];

  return (
    <PremiumTreatmentCardsSection
      eyebrow="Featured Skin Treatments"
      title="Refined Skin Rituals for Radiance & Renewal"
      description="A curated collection of advanced skin treatments designed to restore glow, improve texture, and elevate confidence with luxurious clinical care."
      cards={featuredTreatments}
    />
  );
}
