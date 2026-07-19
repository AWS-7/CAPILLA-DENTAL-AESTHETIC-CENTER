import SEO from './SEO';
import PageHero from './PageHero';
import Breadcrumb from './Breadcrumb';
import Container from './Container';
import { placeholders } from '../../data/content';

/**
 * Temporary shell used until page content is built in later prompts.
 * Keeps routing, SEO, hero, and layout consistent across all routes.
 */
export default function PagePlaceholder({
  title,
  subtitle = 'Premium care crafted with clinical precision and aesthetic excellence.',
  path = '/',
  backgroundImage = placeholders.clinic,
}) {
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
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
              Coming Soon
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary-black">
              Page content will be built next
            </h2>
            <p className="mt-4 text-base font-light text-dark-bg/55 leading-relaxed">
              This route is registered and wired into the layout, navigation, and design system.
              Full page sections will be added in subsequent prompts without changing architecture.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
