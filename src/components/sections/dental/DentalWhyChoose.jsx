import { motion } from 'framer-motion';
import {
  Award,
  Cpu,
  HeartPulse,
  Scan,
  ShieldCheck,
  Gem,
  Microscope,
  Sparkles,
} from 'lucide-react';
import { Container, SectionTitle, Card } from '../../common';
import { dentalWhyChoose } from '../../../data/dental';
import { staggerContainer, staggerItem } from '../../../utils/animations';

const icons = {
  Award,
  Cpu,
  HeartPulse,
  Scan,
  ShieldCheck,
  Gem,
  Microscope,
  Sparkles,
};

export default function DentalWhyChoose() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Excellence"
          title="Why Choose Our Dental Clinic"
          description="A luxury dental destination in Perumbakkam built for painless care, digital precision, and lasting smiles."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {dentalWhyChoose.map((item) => {
            const Icon = icons[item.icon] || Sparkles;
            return (
              <motion.div key={item.id} variants={staggerItem}>
                <Card className="group h-full !p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-muted text-gold transition-colors group-hover:bg-gold group-hover:text-primary-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-primary-black group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-dark-bg/55 leading-relaxed">
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
