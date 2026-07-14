import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { fadeUp, slideInLeft, slideInRight } from '../../../utils/animations';
import { cn } from '../../../utils/helpers';

export function TreatmentOverview({ title = 'Overview', paragraphs = [], image }) {
  if (!paragraphs.length) return null;
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">About the Treatment</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-black">{title}</h2>
            <div className="mt-6 space-y-4">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-base md:text-lg font-light leading-relaxed text-dark-bg/60">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
          {image && (
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl aspect-[4/3] shadow-premium"
            >
              <motion.img
                src={image}
                alt=""
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function TreatmentBenefits({ benefits = [], title = 'Benefits' }) {
  if (!benefits.length) return null;
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle eyebrow="Outcomes" title={title} description="What you can expect when you choose Capilla for this treatment." />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-start gap-3 rounded-2xl border border-border bg-primary-white p-5 shadow-soft"
            >
              <Check size={18} className="mt-0.5 shrink-0 text-gold" />
              <p className="text-sm md:text-base font-light text-dark-bg/75">{b}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export function TreatmentListSection({
  eyebrow,
  title,
  description,
  items = [],
  dark = false,
}) {
  if (!items.length) return null;
  return (
    <section className={cn('section-padding', dark ? 'bg-dark-bg' : 'bg-primary-white')}>
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} light={dark} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {items.map((item) => (
            <motion.div
              key={typeof item === 'string' ? item : item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={cn(
                'rounded-2xl border p-5 md:p-6',
                dark
                  ? 'border-primary-white/10 bg-primary-white/5'
                  : 'border-border bg-light-bg'
              )}
            >
              {typeof item === 'string' ? (
                <p className={cn('text-sm font-light', dark ? 'text-primary-white/75' : 'text-dark-bg/70')}>
                  {item}
                </p>
              ) : (
                <>
                  <h3 className={cn('font-display text-xl', dark ? 'text-primary-white' : 'text-primary-black')}>
                    {item.title}
                  </h3>
                  {item.text || item.description ? (
                    <p className={cn('mt-2 text-sm font-light leading-relaxed', dark ? 'text-primary-white/55' : 'text-dark-bg/55')}>
                      {item.text || item.description}
                    </p>
                  ) : null}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TreatmentProcedure({ steps = [], title = 'Treatment Procedure' }) {
  if (!steps.length) return null;
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Process"
          title={title}
          description="A step-by-step overview of how we deliver this treatment with clarity and care."
        />
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-5 rounded-3xl border border-border bg-light-bg p-5 md:p-7"
            >
              <span className="font-display text-3xl md:text-4xl text-gold shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-primary-black">{step.title}</h3>
                <p className="mt-2 text-sm md:text-base font-light text-dark-bg/55 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TreatmentTextSection({
  eyebrow,
  title,
  text,
  dark = false,
}) {
  if (!text) return null;
  return (
    <section className={cn('section-padding', dark ? 'bg-dark-bg' : 'bg-light-bg')}>
      <Container narrow>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">{eyebrow}</p>
          )}
          <h2 className={cn('font-display text-3xl md:text-4xl', dark ? 'text-primary-white' : 'text-primary-black')}>
            {title}
          </h2>
          <p
            className={cn(
              'mt-6 text-base md:text-lg font-light leading-relaxed',
              dark ? 'text-primary-white/60' : 'text-dark-bg/60'
            )}
          >
            {text}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export function TreatmentFeatureGrid({
  eyebrow,
  title,
  description,
  items = [],
  dark = false,
}) {
  if (!items.length) return null;
  return (
    <section className={cn('section-padding', dark ? 'bg-dark-bg' : 'bg-primary-white')}>
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} light={dark} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={cn(
                'rounded-2xl border p-5 text-center',
                dark
                  ? 'border-primary-white/10 bg-primary-white/5 text-primary-white'
                  : 'border-border bg-light-bg text-primary-black'
              )}
            >
              <p className="font-display text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
