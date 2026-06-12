import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { faqs } from "../../data";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className={`section ${styles.faq}`} id="faq" ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">FAQ</p>
            <h2 className="section-title">
              Часті <span>питання</span>
            </h2>
            <p className="section-subtitle">
              Не знайшли відповіді? Напишіть мені в Telegram — відповім протягом кількох годин.
            </p>
            <a
              href="https://t.me/salad_a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: "fit-content" }}
            >
              Написати в Telegram
            </a>
          </motion.div>

          <motion.div
            className={styles.accordion}
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {faqs.map((item, i) => (
              <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}>
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                >
                  <span>{item.q}</span>
                  <span className={styles.icon}>
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      className={styles.answer}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className={styles.answerInner}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
