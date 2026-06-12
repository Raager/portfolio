import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { steps } from '../../data';
import styles from './Process.module.css';

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <section className={`section ${styles.process}`} id="process" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Як це працює</p>
          <h2 className="section-title">
            Етапи <span>роботи</span>
          </h2>
          <p className="section-subtitle">
            Прозорий процес від першого контакту до запуску.
            Ніяких сюрпризів — тільки результат.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.stepLeft}>
                <div className={styles.num}>{step.num}</div>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.stepRight}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
