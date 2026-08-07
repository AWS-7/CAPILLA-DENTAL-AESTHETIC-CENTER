import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';
import { useNavigate } from 'react-router-dom';

export default function ServiceCategorySelector({ currentCategory, categories = [] }) {
  const navigate = useNavigate();

  if (!categories || categories.length === 0) return null;

  return (
    <section className="section-padding bg-primary-white">
      <div className="mx-auto w-full max-w-container px-5 md:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-black text-center">
            Service Categories
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category, index) => {
            const isActive = category.id === currentCategory;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(category.path)}
                className={`
                  px-5 py-3 md:px-6 md:py-4 rounded-2xl border-2 font-medium text-sm md:text-base
                  transition-all duration-300 hover:scale-105
                  ${isActive 
                    ? 'bg-gold border-gold text-primary-white' 
                    : 'bg-primary-white border-gold/30 text-primary-black hover:border-gold hover:bg-gold/5'
                  }
                `}
              >
                {category.name}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
