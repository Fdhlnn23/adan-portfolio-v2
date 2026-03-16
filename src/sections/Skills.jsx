import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

function SkillBar({ name, level, index, inView }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView(0.15);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.sectionTag}>
            <span className={styles.tagLine} />
            <span>My Skills</span>
          </div>
          <h2 className={styles.heading}>
            Tech <em>Stack</em> & Expertise
          </h2>
          <p className={styles.subtext}>
            A curated set of technologies I use to build fast, scalable, and beautiful digital products.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              className={styles.group}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15 + 0.2, duration: 0.7 }}
            >
              <div className={styles.groupHeader}>
                <span className={styles.groupNum}>0{gi + 1}</span>
                <h3 className={styles.groupTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillList}>
                {group.items.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} inView={inView} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
