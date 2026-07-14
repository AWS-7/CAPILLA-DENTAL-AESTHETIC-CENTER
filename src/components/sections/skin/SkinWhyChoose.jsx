import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Cpu,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Eye,
  Gem,
  HeartHandshake,
} from 'lucide-react';
import { Container, SectionTitle, Card } from '../../common';
import { skinWhyChoose } from '../../../data/skin';
import { staggerContainer, staggerItem } from '../../../utils/animations';

const icons = {
  BadgeCheck,
  Cpu,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Eye,
  Gem,
  HeartHandshake,
};

export default function SkinWhyChoose() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Excellence"
          title="Why Choose Our Skin Clinic"
          description="A luxury aesthetic clinic in Perumbakkam built for safe procedures, visible glow, and personalized skin analysis."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {skinWhyChoose.map((item) => {
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
