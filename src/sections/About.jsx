import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolio';
import styles from './About.module.css';

const tools = ['VS Code', 'Figma', 'Docker', 'Postman', 'Git', 'Linear', 'Notion', 'Arc Browser'];

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <img src="/images/adanganteng.png" alt="Profile" className={styles.profileImg} />
            </div>
            <div className={styles.imageBorder} />
            <div className={styles.imageAccent} />

            <div className={styles.floatingTag}>
              <span className={styles.tagIcon}>📍</span>
              {personalInfo.location}
            </div>

            <div className={`${styles.floatingTag} ${styles.floatingTagRight}`}>
              <span className={styles.tagDot} />
              Open to work
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.sectionTag}>
            <span className={styles.tagLine} />
            <span>About Me</span>
          </div>

          <h2 className={styles.heading}>
            Crafting code with<br />
            <em>purpose & precision</em>
          </h2>

          <p className={styles.text}>
            Hi, I'm <strong>{personalInfo.name}</strong> — a full-stack developer with a passion for
            building products that make a difference. I love working at the intersection of design
            and engineering, where great user experience meets solid technical architecture.
          </p>
          <p className={styles.text}>
            When I'm not coding, I'm exploring new design trends, contributing to open source,
            or sharing what I've learned with the developer community.
          </p>

          <div className={styles.toolsSection}>
            <span className={styles.toolsLabel}>Daily tools</span>
            <div className={styles.tools}>
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  className={styles.tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#" className={styles.resumeBtn} download>
              Download Resume
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v8M8 11L5 8M8 11L11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
