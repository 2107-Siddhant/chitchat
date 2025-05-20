import React, { useState } from 'react';
import styles from './FurtherNav.module.css';
import images from '../../assets/images';

const FurtherNav = ({ onClose }) => {
    const [showMiddleMenu, setShowMiddleMenu] = useState(false);

  
  const toggleMiddleMenu = () => {
    setShowMiddleMenu(!showMiddleMenu);
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.sidebar}>
        <div className={styles.wholeMenu}>

          <div className={styles.leftMenu}>
         <div className={styles.mainMenu}>
           <ul className={styles.mainMenuUl}>
        <li className={styles.menu} onClick={toggleMiddleMenu}>Feature</li>
            <li>App</li>
            <li>Pricing</li>
            <li>Integration</li>
            <li>Help</li>
          </ul>
         </div>

          <div className={styles.furtherMenu}>
             {showMiddleMenu && (
        <div className={styles.middleMenu}>
          <ul className={styles.middleMenuList}>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-video icon"></i> Widget</a>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-robot icon"></i> AI Chatbot</a>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-database icon"></i> CRM</a>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-envelope icon"></i> Shared Inbox</a>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-globe icon"></i> AI</a>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-th-large icon"></i> Knowledge</a>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-ticket-alt icon"></i> Ticketing System</a>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-sync icon"></i> Status Page</a>
        <a href="#" className={styles.furtherNavItem}><i className="fas fa-code icon"></i> Chat SDK</a>

          </ul>
        </div>
      )}
          </div>
        </div>

        
        </div>
        <div className={styles.rightContent}>
          <div className={styles.headerImgContainer}>
            <img src={images.headerImg} alt="industry" className={styles.bgImage} />
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.socialIcons}>
              <strong>Email:</strong>
              <p>iqonic@gmail.com</p>
              <p>markino@gmail.com</p>
            </div>
            <div className={styles.socialIcons}>
              <strong>Contact Us:</strong>
              <p>(+264)012321111</p>
              <p>(+255)112447776</p>
            </div>
            <div>
              <strong>Social</strong>
               <div className={styles.socialIcons}>
                          <i className="fab fa-facebook-f"></i>
                          <i className="fab fa-x-twitter"></i>
                          <i className="fab fa-instagram"></i>
                        </div>
            </div>
          </div>
        </div>

        {/* Right-side close button */}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      </div>

                 <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            />
    </div>
  );
};

export default FurtherNav;
