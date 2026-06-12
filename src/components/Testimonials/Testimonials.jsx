import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { testimonials } from '../../data';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className={`section ${styles.testimonials}`} id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Відгуки</p>
          <h2 className="section-title">
            Що кажуть <span>клієнти</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              className={styles.card}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className={styles.star} />
                ))}
              </div>
              <blockquote className={styles.text}>"{t.text}"</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
