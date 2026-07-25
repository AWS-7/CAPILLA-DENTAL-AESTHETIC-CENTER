import SEO from './SEO';
import PageHero from './PageHero';
import Breadcrumb from './Breadcrumb';
import Container from './Container';
import SectionTitle from './SectionTitle';
import Card from './Card';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { placeholders } from '../../data/content';

/**
 * Flexible placeholder shell for treatment and clinic routes.
 * Keeps routing, SEO, hero, and layout consistent while presenting polished content.
 */
export default function PagePlaceholder({
  title,
  subtitle = 'Premium care crafted with clinical precision and aesthetic excellence.',
  path = '/',
  backgroundImage = placeholders.clinic,
}) {
  const highlights = [
    {
      title: 'Precision-led care',
      description:
        'Every treatment plan is tailored to your concerns, comfort, and long-term aesthetic goals.',
    },
    {
      title: 'Comfort-first experience',
      description:
        'From consultation to aftercare, the process is designed to feel calm, transparent, and reassuring.',
    },
    {
      title: 'Trusted clinical standards',
      description:
        'Advanced protocols, hygiene-focused treatment spaces, and attentive follow-up support every visit.',
    },
  ];

  const steps = [
    'A detailed consultation to understand your goals',
    'A personalised treatment plan with clear expectations',
    'A refined, comfortable treatment experience with aftercare guidance',
  ];

  return (
    <>
      <SEO title={title} description={subtitle} canonical={`https://capillaaesthetic.com${path}`} />
      <PageHero
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        breadcrumb={<Breadcrumb items={[{ label: title }]} />}
      />

      <section className="section-padding bg-light-bg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              eyebrow="Treatment experience"
              title={`A premium approach to ${title}`}
              description="Every visit is shaped around clinical precision, thoughtful communication, and results you can feel confident about."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <Card key={item.title} className="bg-primary-white">
                  <h3 className="font-display text-2xl text-primary-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-dark-bg/65">{item.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid gap-8 rounded-[2rem] border border-border bg-primary-white p-8 shadow-soft md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">What to expect</p>
                <h3 className="mt-4 font-display text-3xl text-primary-black">
                  A treatment journey built around clarity and care
                </h3>
                <p className="mt-4 text-base leading-8 text-dark-bg/65">
                  Whether you are exploring a single treatment or planning a full aesthetic transformation,
                  our team focuses on a smooth experience from consultation through aftercare.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-dark-bg/70">
                  {steps.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] bg-light-bg p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Ready to begin?</p>
                <h4 className="mt-3 font-display text-2xl text-primary-black">Let us guide your next step</h4>
                <p className="mt-3 text-sm leading-7 text-dark-bg/65">
                  Share your goals and we will help you choose the right treatment path with confidence.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <PrimaryButton to="/contact" size="md">
                    Book Consultation
                  </PrimaryButton>
                  <SecondaryButton to="/dental" size="md">
                    Explore Treatments
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
