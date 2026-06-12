import { Github, Mail, MessageCircle, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

const navLinks = [
  { href: "#about", label: "Про мене" },
  { href: "#portfolio", label: "Портфоліо" },
  { href: "#services", label: "Послуги" },
  { href: "#process", label: "Процес" },
  { href: "#testimonials", label: "Відгуки" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакти" },
];

const socials = [
  { icon: <MessageCircle size={16} />, href: "https://t.me/salad_a", label: "Telegram" },
  { icon: <Mail size={16} />, href: "mailto:kriovkriv@gmail.com", label: "Email" },
  { icon: <Github size={16} />, href: "https://github.com/Raager", label: "GitHub" },
  {
    icon: <Linkedin size={16} />,
    href: "www.linkedin.com/in/володимир-бурлак-969a8422b",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topInner}>
            <div className={styles.brand}>
              <a href="#hero" className={styles.logo}>
                <span className={styles.logoMark}>VB</span>
                <span className={styles.logoText}>
                  Burlak<span>.dev</span>
                </span>
              </a>
              <p className={styles.tagline}>Full-stack розробник. Сучасні сайти під ключ.</p>
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={styles.social}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.nav}>
              <p className={styles.navTitle}>Навігація</p>
              <ul>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={styles.navLink}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.contacts}>
              <p className={styles.navTitle}>Контакти</p>
              <ul className={styles.contactList}>
                <li>
                  <a href="https://t.me/salad_a" className={styles.navLink}>
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="mailto:kriovkriv@gmail.com" className={styles.navLink}>
                    kriovkriv@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+380680314050" className={styles.navLink}>
                    +380 68 031 40 50
                  </a>
                </li>
              </ul>
              <a href="#contact" className={`btn-primary ${styles.cta}`}>
                Замовити сайт
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} Burlak Vladimir. Всі права захищені.
            </p>
            <p className={styles.made}>Розроблено з ❤️ в Україні</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
