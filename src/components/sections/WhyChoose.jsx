import { motion } from 'framer-motion';
import {
  Award,
  Cpu,
  Sparkles,
  Gem,
  Microscope,
  ShieldCheck,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import { Container, SectionTitle, Card } from '../common';
import { whyChooseItems } from '../../data/home';
import { staggerContainer, staggerItem } from '../../utils/animations';

const icons = {
  Award,
  Cpu,
  Sparkles,
  Gem,
  Microscope,
  ShieldCheck,
  Clock,
  HeartHandshake,
};

export default function WhyChoose() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Why Capilla"
          title="Why Choose Capilla"
          description="A premium medical destination where technology, expertise, and hospitality meet — built for patients who expect the exceptional."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {whyChooseItems.map((item) => {
            const Icon = icons[item.icon] || Sparkles;
            return (
              <motion.div key={item.id} variants={staggerItem}>
                <Card className="group h-full !p-6 md:!p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-muted text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-primary-black group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-dark-bg/55">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
