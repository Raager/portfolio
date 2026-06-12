import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MessageCircle, Github, Linkedin } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    icon: <MessageCircle size={18} />,
    label: "Telegram",
    value: "@salad_a",
    href: "https://t.me/salad_a",
    color: "#29B6F6",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "kriovkriv@gmail.com",
    href: "mailto:kriovkriv@gmail.com",
    color: "#22C55E",
  },
  {
    icon: <Phone size={18} />,
    label: "Телефон",
    value: "+380 68 031 40 50",
    href: "tel:+380680314050",
    color: "#A78BFA",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/Raager",
    href: "https://github.com/Raager",
    color: "#94A3B8",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/Raager",
    href: "www.linkedin.com/in/володимир-бурлак-969a8422b",
    color: "#0A66C2",
  },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const SERVICE_ID = "service_4uc96mi";
  const TEMPLATE_ID = "template_gl9cpj7";
  const PUBLIC_KEY = "CkHse5-YlI9xbMoJK";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className={`section ${styles.contact}`} id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Контакти</p>
          <h2 className="section-title">
            Розпочнемо <span>співпрацю</span>
          </h2>
          <p className="section-subtitle">
            Опишіть ваш проєкт — і я зв'яжусь з вами протягом кількох годин.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Form */}
          <motion.div
            className={styles.formWrap}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === "sent" ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h3>Заявку отримано!</h3>
                <p>Дякую за звернення. Я зв'яжусь з вами найближчим часом.</p>
                <button className="btn-primary" onClick={() => setStatus("idle")}>
                  Надіслати ще
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <h3 className={styles.formTitle}>Залишити заявку</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Ім'я *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ваше ім'я"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Телефон</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+380 XX XXX XX XX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Опис проєкту *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Розкажіть про ваш проєкт: тип сайту, функціонал, терміни..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn-primary ${styles.submit}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className={styles.spinner} /> Надсилаємо...
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Надіслати заявку
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Зв'яжіться зі мною</h3>
              <div className={styles.links}>
                {contactLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <span
                      className={styles.linkIcon}
                      style={{ color: l.color, background: `${l.color}15` }}
                    >
                      {l.icon}
                    </span>
                    <div>
                      <p className={styles.linkLabel}>{l.label}</p>
                      <p className={styles.linkValue}>{l.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.availability}>
              <div className={styles.availDot} />
              <div>
                <p className={styles.availTitle}>Доступний для проєктів</p>
                <p className={styles.availDesc}>
                  Відповідаю в робочий час. Зазвичай — протягом 2–4 годин.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
