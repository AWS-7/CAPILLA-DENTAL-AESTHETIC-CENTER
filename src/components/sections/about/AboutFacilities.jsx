import { motion } from 'framer-motion';
import {
  MonitorSmartphone,
  Armchair,
  Droplets,
  Scan,
  Coffee,
  Radio,
  Zap,
  Siren,
} from 'lucide-react';
import { Container, SectionTitle } from '../../common';
import { facilities } from '../../../data/about';
import { staggerContainer, staggerItem } from '../../../utils/animations';

const icons = {
  MonitorSmartphone,
  Armchair,
  Droplets,
  Scan,
  Coffee,
  Radio,
  Zap,
  Siren,
};

export default function AboutFacilities() {
  return (
    <section className="section-padding bg-dark-bg">
      <Container>
        <SectionTitle
          eyebrow="Infrastructure"
          title="Clinic Facilities"
          description="Thoughtfully designed spaces and advanced equipment for dental, skin, and hair care under one roof."
          light
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {facilities.map((item) => {
            const Icon = icons[item.icon] || Zap;
            return (
              <motion.div
                key={item.id}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-primary-white/10 bg-primary-white/5 p-6 md:p-8 text-center backdrop-blur-sm transition-colors hover:border-gold/40"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-base md:text-lg text-primary-white">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
