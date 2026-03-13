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

      <section id="about" className={styles.section}>
        <div className={styles.aboutTitleContainer}>
          <h2 className={styles.aboutTitleText}>About Me</h2>
        </div>
        
        <div className={styles.aboutGrid}>
          {/* Left Column */}
          <div className={styles.aboutColumn}>
            {/* Quick Facts Card */}
            <div className={`${styles.card} glass`} style={{ padding: '1.5rem' }}>
              <h3 className={styles.aboutCardTitle}>Quick Facts</h3>
              <div className={styles.factList}>
                <div className={styles.factItem}>
                  <div className={styles.factIcon}>📍</div>
                  <div className={styles.factTextContainer}>
                    <span className={styles.factLabel}>Location</span>
                    <span className={styles.factValue}>Kerala, India</span>
                  </div>
                </div>
                <div className={styles.factItem}>
                  <div className={`${styles.factIcon} ${styles.factIconPurple}`}>🎓</div>
                  <div className={styles.factTextContainer}>
                    <span className={styles.factLabel}>Education</span>
                    <span className={styles.factValue}>Pursuing B.Tech in CS</span>
                  </div>
                </div>
                <div className={styles.factItem}>
                  <div className={`${styles.factIcon} ${styles.factIconOrange}`}>💼</div>
                  <div className={styles.factTextContainer}>
                    <span className={styles.factLabel}>Experience</span>
                    <span className={styles.factValue}>Fresher / Student</span>
                  </div>
                </div>
              </div>
            </div>

            {/* When I'm Not Coding Card */}
            <div className={`${styles.card} glass`} style={{ padding: '1.5rem' }}>
              <h3 className={styles.aboutCardTitle}>When I&apos;m Not Coding</h3>
              <div className={styles.hobbyList}>
                <div className={styles.hobbyItem}>
                  <span className={styles.hobbyIcon}>💻</span>
                  <span>Surfing Web</span>
                </div>
                <div className={styles.hobbyItem}>
                  <span className={styles.hobbyIcon}>📚</span>
                  <span>Reading</span>
                </div>
                <div className={styles.hobbyItem}>
                  <span className={styles.hobbyIcon}>🎵</span>
                  <span>Music</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.aboutColumn}>
            {/* My Journey Card */}
            <div className={`${styles.card} glass`} style={{ padding: '2rem' }}>
              <h3 className={styles.aboutCardTitle} style={{ color: '#60a5fa' }}>My Journey</h3>
              <div className={styles.aboutTextContent}>
                <p>
                  Hello! I&apos;m <span style={{color: '#c084fc', fontWeight: '600'}}>Amegh Dinesh</span>, a Computer Science undergraduate currently in my third year of B.Tech at Madappally, Vadakara, Kerala, India. I am passionate about technology and enjoy exploring how software can be used to solve real-world problems.
                </p>
                <p>
                  My journey in computer science started with curiosity about how systems and applications work. Over time, this interest developed into a strong focus on programming and problem-solving. I have been building my foundation in C, C++, Python, and Java, while also strengthening my understanding of data structures, algorithms, and software development concepts.
                </p>
                <p>
                  As a student developer, I continuously work on improving my skills through learning, experimentation, and academic projects. I am eager to apply my knowledge to real-world challenges and grow as a software engineer.
                </p>
              </div>
            </div>

            {/* My Approach Card */}
            <div className={`${styles.card} glass`} style={{ padding: '2rem' }}>
              <h3 className={styles.aboutCardTitle} style={{ color: '#60a5fa' }}>My Approach</h3>
              <div className={styles.aboutTextContent}>
                <p>
                  I believe in writing clear, efficient, and well-structured code. My goal is to understand problems deeply and design logical solutions that are both practical and scalable. I value continuous learning and consistently explore new technologies to expand my technical abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills & Proficiencies</h2>
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
