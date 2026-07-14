import { Link } from 'react-router-dom';
import { SEO, Container, PrimaryButton, SecondaryButton } from '../components/common';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" noIndex description="The page you are looking for does not exist." />
      <section className="min-h-[70vh] flex items-center section-padding bg-light-bg">
        <Container className="text-center">
          <p className="font-display text-8xl md:text-9xl text-gold/40">404</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-primary-black">
            Page Not Found
          </h1>
          <p className="mt-4 text-base font-light text-dark-bg/55 max-w-md mx-auto">
            The page you requested may have been moved or no longer exists.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton to="/">Back to Home</PrimaryButton>
            <SecondaryButton to="/contact">Book Appointment</SecondaryButton>
          </div>
          <p className="mt-10 text-sm text-dark-bg/40">
            Or explore our{' '}
            <Link to="/dental" className="text-gold hover:underline">
              treatments
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
