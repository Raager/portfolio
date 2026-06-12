import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { projects } from "../../data";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState("all");

  const filters = ["all"];
  const filtered = filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section className={`section ${styles.portfolio}`} id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Портфоліо</p>
          <h2 className="section-title">
            Мої <span>роботи</span>
          </h2>
          <p className="section-subtitle">
            Реальні проєкти з живими результатами. Кожен — унікальний підхід під задачу клієнта.
          </p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filter} ${filter === f ? styles.active : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "Всі" : f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index, inView }) {
  return (
    <motion.article
      className={`${styles.card} ${p.featured ? styles.featured : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.preview} style={{ background: p.color }}>
        <div className={styles.previewInner}>
          <div className={styles.browser}>
            <img src={p.image} alt={p.title} className={styles.previewImg} />
          </div>
        </div>
        <div className={styles.previewOverlay}>
          <div className={styles.previewActions}>
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.previewBtn}
            >
              <ExternalLink size={14} /> Переглянути
            </a>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.tags}>
          {p.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
        <h3 className={styles.title}>{p.title}</h3>
        <p className={styles.desc}>{p.description}</p>
        <div className={styles.links}>
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            <ExternalLink size={14} /> Переглянути
          </a>
        </div>
      </div>
    </motion.article>
  );
}
