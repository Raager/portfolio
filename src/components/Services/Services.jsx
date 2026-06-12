import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { services } from '../../data';
import styles from './Services.module.css';

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section className={`section ${styles.services}`} id="services" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Послуги</p>
          <h2 className="section-title">
            Що я <span>розробляю</span>
          </h2>
          <p className="section-subtitle">
            Повний цикл розробки — від ідеї та дизайну до готового
            продукту на вашому сервері.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              className={styles.card}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              <ul className={styles.benefits}>
                {s.benefits.map(b => (
                  <li key={b}>
                    <Check size={13} className={styles.check} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
