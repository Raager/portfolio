import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg}>
        <div className={styles.gradient1} />
        <div className={styles.gradient2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <motion.div {...fadeUp(0.1)} className={styles.badge}>
            <span className={styles.dot} />
            Доступний для нових проєктів
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className={styles.title}>
            Створюю сучасні сайти,
            <br />
            які допомагають бізнесу
            <br />
            <span className={styles.accent}>заробляти більше</span>
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className={styles.subtitle}>
            Full-stack розробник з досвідом у React, Node.js та PostgreSQL. Від ідеї до запуску —
            під ключ, вчасно, якісно.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className={styles.actions}>
            <a href="#contact" className="btn-primary">
              Замовити сайт <ArrowRight size={16} />
            </a>
            <a href="#portfolio" className="btn-secondary">
              Переглянути роботи
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.55)} className={styles.stats}>
            {[
              { val: "3+", label: "роки досвіду" },
              { val: "20+", label: "проєктів" },
              { val: "100%", label: "задоволених клієнтів" },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot2} style={{ background: "#ef4444" }} />
              <span className={styles.dot2} style={{ background: "#f59e0b" }} />
              <span className={styles.dot2} style={{ background: "#22c55e" }} />
              <span className={styles.cardFile}>portfolio.jsx</span>
            </div>
            <div className={styles.cardBody}>
              <CodeBlock />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.techList}>
                {["React", "Node.js", "PostgreSQL", "TypeScript"].map((t) => (
                  <span key={t} className={styles.tech}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.floatBadge1}>
            <span>⚡</span> PageSpeed 95+
          </div>
          <div className={styles.floatBadge2}>
            <span className={styles.greenDot} />
            Проєкт запущено
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}

function CodeBlock() {
  return (
    <pre className={styles.code}>
      <span className={styles.cLine}>
        <span className={styles.cKey}>const</span> <span className={styles.cVar}>developer</span>
        {" = {"}
      </span>
      <span className={styles.cLine}>
        {"  "}
        <span className={styles.cProp}>name</span>:{" "}
        <span className={styles.cStr}>'Burlak Volodymyr'</span>,
      </span>
      <span className={styles.cLine}>
        {"  "}
        <span className={styles.cProp}>stack</span>:{" "}
        <span className={styles.cStr}>'React · Node · PG'</span>,
      </span>
      <span className={styles.cLine}>
        {"  "}
        <span className={styles.cProp}>available</span>: <span className={styles.cBool}>true</span>,
      </span>
      <span className={styles.cLine}>
        {"  "}
        <span className={styles.cProp}>focus</span>:{" "}
        <span className={styles.cStr}>'результат клієнта'</span>
      </span>
      <span className={styles.cLine}>{"};"}</span>
      <span className={styles.cLine}>&nbsp;</span>
      <span className={styles.cLine}>
        <span className={styles.cKey}>export default</span>{" "}
        <span className={styles.cFn}>developer</span>
        <span className={styles.cursor}>|</span>
      </span>
    </pre>
  );
}
