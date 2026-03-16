import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoMark}>AF</span>
            <span className={styles.name}>{personalInfo.name}</span>
          </div>
          <p className={styles.tagline}>
            Building digital experiences with precision.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className={styles.built}>
            Built with{' '}
            <span className={styles.heart}>♥</span>
            {' '}using React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
