import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { Container, SectionTitle, Card } from '../../common';
import { missionVisionValues } from '../../../data/about';
import { staggerContainer, staggerItem } from '../../../utils/animations';

const icons = { Target, Eye, Heart };

export default function AboutMissionVision() {
  return (
    <section className="section-padding bg-light-bg">
      <Container>
        <SectionTitle
          eyebrow="Purpose"
          title="Mission, Vision & Values"
          description="The principles that guide every consultation, treatment, and patient relationship at Capilla."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {missionVisionValues.map((item) => {
            const Icon = icons[item.icon] || Heart;
            return (
              <motion.div key={item.id} variants={staggerItem}>
                <Card className="group h-full text-center !p-8">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-muted text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-white">
                    <Icon size={26} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-primary-black group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-light leading-relaxed text-dark-bg/55">
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
