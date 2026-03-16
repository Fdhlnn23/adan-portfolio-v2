import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';
import styles from './Work.module.css';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <motion.article
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      data-cursor
    >
<div className={styles.cardMock} style={{ background: project.mockColor }}>
  {project.image ? (
    <img src={project.image} alt={project.title} className={styles.mockImage} />
  ) : (
    <div className={styles.mockInner} style={{ background: project.gradient }}>
      <span className={styles.mockLabel}>{project.title}</span>
    </div>
  )}
  <div className={styles.mockDots}>
    <span /><span /><span />
  </div>
</div>

      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>

        <div className={styles.cardActions}>
          <a href={project.link || '#'} target="_blank" rel="noreferrer" className={styles.viewBtn}>
            View Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href={project.github || '#'} target="_blank" rel="noreferrer" className={styles.codeBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const [ref, inView] = useInView(0.1);
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'featured'];
  const filtered = filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  return (
    <section className={styles.work} id="work">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.sectionTag}>
            <span className={styles.tagLine} />
            <span>My Work</span>
          </div>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>
              Selected <em>Projects</em>
            </h2>
            <div className={styles.filters}>
              {filters.map((f) => (
                <button
                  key={f}
                  className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
