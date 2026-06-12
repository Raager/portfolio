import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#about', label: 'Про мене' },
  { href: '#portfolio', label: 'Портфоліо' },
  { href: '#services', label: 'Послуги' },
  { href: '#process', label: 'Процес' },
  { href: '#contact', label: 'Контакти' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLink = () => setOpen(false);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`container ${styles.nav}`}>
        <a href="#hero" className={styles.logo} onClick={handleLink}>
          <span className={styles.logoMark}>VB</span>
          <span className={styles.logoText}>Burlak<span>.dev</span></span>
        </a>

        <nav className={styles.links}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className={`btn-primary ${styles.cta}`}>
          Замовити сайт
        </a>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <nav className={styles.mobileLinks}>
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className={styles.mobileLink}
                  onClick={handleLink}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className={`btn-primary ${styles.mobileCta}`}
                onClick={handleLink}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                Замовити сайт
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
