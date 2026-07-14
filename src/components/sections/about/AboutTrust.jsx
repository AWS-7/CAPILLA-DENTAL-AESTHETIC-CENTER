import { motion } from 'framer-motion';
import {
  Award,
  Cpu,
  Globe,
  ShieldCheck,
  Sparkles,
  Gem,
  Star,
  Microscope,
} from 'lucide-react';
import { Container, SectionTitle, Card } from '../../common';
import { trustFeatures } from '../../../data/about';
import { staggerContainer, staggerItem } from '../../../utils/animations';

const icons = {
  Award,
  Cpu,
  Globe,
  ShieldCheck,
  Sparkles,
  Gem,
  Star,
  Microscope,
};

export default function AboutTrust() {
  return (
    <section className="section-padding bg-primary-white">
      <Container>
        <SectionTitle
          eyebrow="Trust"
          title="Why Patients Trust Us"
          description="A premium dental clinic in Perumbakkam built on expertise, hygiene, and experiences that patients recommend."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {trustFeatures.map((item) => {
            const Icon = icons[item.icon] || Sparkles;
            return (
              <motion.div key={item.id} variants={staggerItem}>
                <Card className="group h-full !p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-muted text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-white group-hover:scale-105">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-primary-black group-hover:text-gold transition-colors">
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
