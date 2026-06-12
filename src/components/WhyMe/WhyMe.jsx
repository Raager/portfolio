import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { whyMe } from '../../data';
import styles from './WhyMe.module.css';

export default function WhyMe() {
  const [ref, inView] = useInView();

  return (
    <section className={`section ${styles.whyme}`} id="whyme" ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Переваги</p>
            <h2 className="section-title">
              Чому обирають <span>мене</span>
            </h2>
            <p className="section-subtitle">
              За кожним проєктом — увага до деталей,
              прозора комунікація і орієнтація на ваш результат.
            </p>
            <a href="#contact" className={`btn-primary ${styles.cta}`}>
              Обговорити проєкт
            </a>
          </motion.div>

          <div className={styles.right}>
            {whyMe.map((item, i) => (
              <motion.div
                key={item.title}
                className={styles.item}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.iconBox}>{item.icon}</div>
                <div>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
