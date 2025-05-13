import React from 'react';
import styles from './Footer.module.css';
import images from '../../assets/images';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.logoContainer}>
          {/* <img src={images.footerimg} alt="logo" className={styles.logo} /> */}
          <span className={styles.logoText}>cRISP</span>
        </div>
        <div className={styles.socials}>
          <img src={images.facebook} alt="facebook" />
          <img src={images.whatsapp} alt="google" />
          <img src={images.youtube} alt="twitter" />
          <img src={images.whatsapp} alt="whatsapp" />
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.heading}>Product</p>
        <p>Testimonials</p>
        <p>Comparison</p>
        <p>Alternatives</p>
        <p>Developer Hub</p>
      </div>

      <div className={styles.section}>
        <p className={styles.headingabout}>About Us</p>
        <p>Career</p>
        <p>Brand Assets</p>
        <p>Partnership</p>
      </div>

      <div className={styles.section}>
        <p className={styles.headingabout}>Resources</p>
        <p>Read Our Blog</p>
        <p>Help Center</p>
        <p>Security</p>
      </div>

      <div className={styles.section}>
        <p className={styles.headingabout}>Legal</p>
        <p>Terms Of Use</p>
        <p>Privacy</p>
      </div>
    </footer>
  );
};

export default Footer;