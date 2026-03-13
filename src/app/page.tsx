import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>Ameg Dines</div>
        <nav className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.title}>Software Engineer <br/> & Tech Enthusiast</h1>
        <p className={styles.subtitle}>
          Passionate about data structures, algorithms, and building robust systems. 
          Currently pursuing B.Tech in Computer Science at Lovely Professional University.
        </p>
        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.primaryButton}>View My Work</a>
          <a href="mailto:amegdines@gmail.com" className={styles.secondaryButton}>Contact Me</a>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical Expertise</h2>
        <div className={styles.skillsGrid}>
          <div className={`${styles.skillCategory} glass`}>
            <h3 className={styles.skillCategoryTitle}>Languages</h3>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>Java</li>
              <li className={styles.skillItem}>Python</li>
              <li className={styles.skillItem}>C / C++</li>
            </ul>
          </div>
          <div className={`${styles.skillCategory} glass`}>
            <h3 className={styles.skillCategoryTitle}>Web & Tools</h3>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>HTML & CSS</li>
              <li className={styles.skillItem}>MySQL</li>
              <li className={styles.skillItem}>Git & GitHub</li>
            </ul>
          </div>
          <div className={`${styles.skillCategory} glass`}>
            <h3 className={styles.skillCategoryTitle}>Core CS</h3>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>DBMS & OS</li>
              <li className={styles.skillItem}>Computer Networks</li>
              <li className={styles.skillItem}>OOPs Concepts</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.grid}>
          {/* Event Manager Project */}
          <div className={`${styles.card} glass`}>
            <h3 className={styles.cardTitle}>Event Manager</h3>
            <div className={styles.cardDate}>Jun &apos;25 &mdash; Jul &apos;25</div>
            <p className={styles.cardDesc}>
              A robust event-handling system that allows users to efficiently organize and manage scheduled activities. Built using object-oriented principles, ensuring modularity and clear system architecture.
            </p>
            <div className={styles.cardTags}>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>Java Swing</span>
              <span className={styles.tag}>OOP</span>
            </div>
          </div>

          {/* Mental Health Simulator Project */}
          <div className={`${styles.card} glass`}>
            <h3 className={styles.cardTitle}>Mental Health Simulator</h3>
            <div className={styles.cardDate}>Dec &apos;25 &mdash; Jan &apos;26</div>
            <p className={styles.cardDesc}>
              An interactive text-based simulator providing tailored wellness guidance based on user mood evaluation. Includes scenario-based question flows and input validation for smooth interaction.
            </p>
            <div className={styles.cardTags}>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>Java Swing</span>
              <span className={styles.tag}>JSON</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
