import React from 'react'
import styles from './knowledgeTestimonials.module.css'
import images from '../../../assets/images';

import { FaCheckCircle, FaPlus } from 'react-icons/fa';
// import AiSolutions from './AISolutions';

const KnowledgeTestimonials = () => {
  return (
    <>
         <section className={styles['testimonials-section']}>
      <div className={styles['testimonials-container']}>
        <div className={styles['testimonials-circleLayout']}>
          <img src={images.testimonialCircle} alt="Trustpilot" className={styles['testimonials-maincircle']} />
          <img src={images.circle2} alt="Client 1" className={`${styles['testimonials-client']} ${styles['testimonials-clientTop']}`} />
          <img src={images.circle2} alt="Client 2" className={`${styles['testimonials-client']} ${styles['testimonials-clientLeft']}`} />
          <img src={images.circle2} alt="Client 3" className={`${styles['testimonials-client']} ${styles['testimonials-clientRight']}`} />
          <img src={images.circle2} alt="Client 4" className={`${styles['testimonials-client']} ${styles['testimonials-clientBottom']}`} />
        </div>

        <div className={styles['testimonials-text']}>
          <h4 className={styles['testimonials-subHeading']}>TESTIMONIALS</h4>
          <h2 className={styles['testimonials-heading']}>What Our Clients Say About Us</h2>
          
          <p className={styles['testimonials-description']}>
            Thanks to our advanced technological infrastructure and expert staff, we offer a wide range of services such as supply chain management, warehousing, distribution, transportation.
          </p>
          <h5 className={styles['testimonials-author']}>ABC</h5>
          <span className={styles['testimonials-designation']}>Marketing Coordinator</span>
        </div>
      </div>
    </section>




 
    <section className={styles.section}>
      <h4 className={styles.subheading}>OUR PRODUCT</h4>
      <h2 className={styles.heading}>Recent AI solutions Product</h2>
      <p className={styles.description}>
        There are many variations of passages of Lorem Ipsum are many variations of passages of lorem Ipsum available but .suffered.
      </p>

      <div className={styles.cardsWrapper}>
        {/* LEFT CARD */}
        <div className={styles.card}>
          <div className={styles.content}>
            <h3>AI-Powered Business Solutions</h3>
            <p>
              <a href="#">AI chat bot</a> we are dedicated is the safeguarding your digital.
            </p>

            <ul className={styles.features}>
              <li><FaCheckCircle className={styles.icon} /> Advanced automation & analytics</li>
              <li><FaCheckCircle className={styles.icon} /> API access with higher rate limits</li>
            </ul>

            <button className={styles.demoButton}>
              <FaPlus /> Get a Demo
            </button>
          </div>

          <div className={styles.image}>
            <img src={images.robotanimate} alt="AI Solution" />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={images.knowledgeHeroImage} alt="Statistics Illustration" />
          </div>

          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <h3>25k+</h3>
              <p>Project Complete</p>
            </div>
            <div className={styles.statItem}>
              <h3>40m+</h3>
              <p>Data Inducted</p>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* <AiSolutions/> */}

    </>

  );
};


export default KnowledgeTestimonials
