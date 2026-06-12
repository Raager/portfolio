import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import styles from "./About.module.css";
import avatar from "../../images/avatar.jpg";

const stack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚂" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section className={`section ${styles.about}`} id="about" ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>
                <img src={avatar} alt="Volodymyr Burlak" className={styles.avatar} />
              </div>
              <div className={styles.avatarRing} />
              <div className={styles.avatarBadge}>
                <span>👋</span> Привіт!
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <p className="section-label">Про мене</p>
            <h2 className="section-title">
              Бурлак Володимир —<br />
              <span>full-stack розробник</span>
            </h2>

            <div className={styles.bio}>
              <p>
                Розробляю веб-додатки вже понад 3 роки. Спеціалізуюся на створенні сучасних, швидких
                і зручних сайтів для бізнесу різного масштабу — від landing page до повноцінних
                інтернет-магазинів.
              </p>
              <p>
                Кожен проєкт для мене — це не просто набір сторінок, а інструмент, який повинен
                приносити реальний результат: заявки, продажі, довіру клієнтів.
              </p>
            </div>

            <div className={styles.stackBlock}>
              <p className={styles.stackLabel}>Технологічний стек</p>
              <div className={styles.stackGrid}>
                {stack.map((s, i) => (
                  <motion.div
                    key={s.name}
                    className={styles.stackItem}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  >
                    <span className={styles.stackIcon}>{s.icon}</span>
                    <span className={styles.stackName}>{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.actions}>
              <a href="#contact" className="btn-primary">
                Зв'язатись зі мною
              </a>
              <a
                href="https://github.com/Raager"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub профіль
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
