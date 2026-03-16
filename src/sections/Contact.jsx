import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personalInfo, socialLinks } from '../data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  const [ref, inView] = useInView(0.15);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sectionTag}>
            <span className={styles.tagLine} />
            <span>Contact</span>
          </div>
          <h2 className={styles.heading}>
            Let's Build<br />
            Something <em>Great</em>
          </h2>
          <p className={styles.subtext}>
            Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you as soon as possible.
          </p>

          <div className={styles.contactInfo}>
            <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>{personalInfo.email}</span>
              </div>
            </a>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <span className={styles.contactLabel}>Location</span>
                <span className={styles.contactValue}>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.formCard}>
            {sent ? (
              <motion.div
                className={styles.successMsg}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`${styles.input} ${styles.textarea}`}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
