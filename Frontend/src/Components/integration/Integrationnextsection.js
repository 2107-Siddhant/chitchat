import React from 'react';
import styles from './integrationnextsection.module.css';
import Navbar  from '../head/Navbar';
import images from '../../assets/images';


const App = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.integrationWrapper}>
      <div className={styles.integrationContent}>
        <h1 className={styles.integrationTitle}>
          <span className={styles.integrationPart1}>INNOVATIVE</span><br></br>
          <span className={styles.integrationPart2}>AI</span>
          <span className={styles.integrationPart3}><i>SOLUTIONS</i></span>
        </h1>
      </div>
      <div className={styles.integrationBackground}>
        <img
          src={images.integrationHero} // Replace with your futuristic image URL
          alt="Innovative AI Background"
          className={styles.integrationImage}
        />
      </div>
    </div>

        <div className={styles.integrationNext}>
        <div className={styles.pageLayout}>
      <header className={styles.headerSection}>
        <span className={styles.titleIcon}>✨</span>
        <h1 className={styles.mainTitle}>PROJECTS</h1>
      </header>


      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
          <div className={styles.integrationimage}>
            <img
            src={images.integrationImage} // Replace with your hummingbird image URL
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
        </div>
      </main>

      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
         
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
          <div className={styles.integrationimage}>
            <img
            src={images.integrationImage2} 
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
        </div>
      </main>


      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
          <div className={styles.integrationimage}>
            <img
            src={images.integrationImage3} // Replace with your hummingbird image URL
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
        </div>
      </main>
    </div>

        </div>
    <div>
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.docs}`}>
        <h2>Online Docs</h2>
        <p>
          Explore comprehensive guides and API references to integrate and
          manage the chatbot easily.
        </p>
        <button className={styles.button}>View Documentation</button>
      </div>

      <div className={`${styles.card} ${styles.support}`}>
        <h2>Dedicated Support</h2>
        <p>
          Need help with chatbot setup or queries? Our team is available 24/7 to
          provide support.
        </p>
        <button className={styles.button}>Get Support</button>
      </div>

      <div className={`${styles.card} ${styles.updates}`}>
        
        <h2>Regular Updates</h2>
        <p>
          We continuously enhance our chatbot with new features, performance
          improvements, and security patches.
        </p>
        <button className={styles.button}>Update Now</button>
      </div>
    </div>
      </div>        
    </div>
  );
};

export default App;