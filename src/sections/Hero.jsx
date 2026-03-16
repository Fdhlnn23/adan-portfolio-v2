import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../data/portfolio';
import styles from './Hero.module.css';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

function ScrambleText({ text, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    let iteration = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (ref.current) {
          ref.current.innerText = text
            .split('')
            .map((char, idx) =>
              idx < iteration ? char : char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
            )
            .join('');
        }
        if (iteration >= text.length) clearInterval(interval);
        iteration += 0.5;
      }, 30);
    }, delay);

    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [text, delay]);

  return <span ref={ref}>{text}</span>;
}

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Animated background */}
      <div className={styles.bgOrbs}>
        <motion.div className={`${styles.orb} ${styles.orb1}`}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div className={`${styles.orb} ${styles.orb2}`}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div className={`${styles.orb} ${styles.orb3}`}
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid pattern */}
      <div className={styles.grid} />

      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.dot} />
          {personalInfo.available ? 'Available for work' : 'Currently busy'}
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className={styles.headingLine}>
            <ScrambleText text="Building" delay={600} />
          </span>
          <span className={`${styles.headingLine} ${styles.accent}`}>
            <ScrambleText text="Digital" delay={800} />
          </span>
          <span className={styles.headingLine}>
            <ScrambleText text="Experiences" delay={1000} />
          </span>
        </motion.h1>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button
            className={styles.primaryBtn}
            onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
