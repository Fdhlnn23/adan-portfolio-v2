import styles from './Marquee.module.css';

const items = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'Docker', 'AWS', 'Figma', 'GraphQL', 'Tailwind', 'Framer Motion',
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'Docker', 'AWS', 'Figma', 'GraphQL', 'Tailwind', 'Framer Motion',
];

export default function Marquee() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
