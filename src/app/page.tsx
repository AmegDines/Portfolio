import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>Ameg Dines</div>
        <nav className={styles.navLinks}>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#education" className={styles.navLink}>Education</a>
          <a href="#training" className={styles.navLink}>Training</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.title}>Data Science Engineer <br/> & Tech Enthusiast</h1>
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
          <div className={`${styles.skillCategory} glass`}>
            <h3 className={styles.skillCategoryTitle}>Soft Skills</h3>
            <ul className={styles.skillList}>
              <li className={styles.skillItem}>Time Management</li>
              <li className={styles.skillItem}>Leadership</li>
              <li className={styles.skillItem}>Problem-Solving</li>
              <li className={styles.skillItem}>Adaptability & Quick Learner</li>
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

      <section id="education" className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <h3 className={styles.cardTitle}>Lovely Professional University</h3>
            <div className={styles.cardDate}>Aug &apos;23 &mdash; Present</div>
            <p className={styles.cardDesc}>Bachelor of Technology - Computer Science and Engineering</p>
            <div className={styles.cardTags}>
              <span className={styles.tag}>CGPA: 6.4</span>
            </div>
          </div>
          
          <div className={`${styles.card} glass`}>
            <h3 className={styles.cardTitle}>Gvhss Madappally</h3>
            <div className={styles.cardDate}>Jun &apos;21 &mdash; Mar &apos;23</div>
            <p className={styles.cardDesc}>Intermediate Education</p>
            <div className={styles.cardTags}>
              <span className={styles.tag}>Score: 93.9%</span>
            </div>
          </div>

          <div className={`${styles.card} glass`}>
            <h3 className={styles.cardTitle}>Gvhss Madappally</h3>
            <div className={styles.cardDate}>Jun &apos;20 &mdash; Mar &apos;21</div>
            <p className={styles.cardDesc}>Matriculation</p>
            <div className={styles.cardTags}>
              <span className={styles.tag}>Score: 95%</span>
            </div>
          </div>
        </div>
      </section>

      <section id="training" className={styles.section}>
        <h2 className={styles.sectionTitle}>Training & Certifications</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <h3 className={styles.cardTitle}>Java with Data Structures and Algorithms</h3>
            <div className={styles.cardDate}>Jun &apos;25 &mdash; Jul &apos;25</div>
            <p className={styles.cardDesc}>
              <strong>CipherSchools</strong><br/>
              Engineered interactive applications using Java and Java Swing, applying structured UI components. 
              Gained practical experience in core and advanced Java practices including OOP and component-based design.
            </p>
          </div>

          <div className={`${styles.card} glass`}>
            <h3 className={styles.cardTitle}>Certificates & Achievements</h3>
            <div className={styles.cardDesc}>
              <ul className={styles.list}>
                <li><strong>Udemy:</strong> Master Generative AI and Generative AI Tools (Aug &apos;25)</li>
                <li><strong>Udemy:</strong> Build Generative AI Apps and Solutions with No-Code Tools (Aug &apos;24)</li>
                <li><strong>FreeCodeCamp:</strong> Legacy Responsive Web Design V8 (Jun &apos;24)</li>
              </ul>
              <br/>
              <strong>Achievements:</strong><br/>
              Earned Top badge on HackerRank, including a 3-Star rating in Java for consistent performance (Nov &apos;25).
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
