import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import styles from './FurtherNav.module.css';
import images from '../../assets/images';

const FurtherNav = ({ onClose }) => {
  const [showMiddleMenu, setShowMiddleMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const menuRef = useRef(null);

  // Handle clicks outside to close the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose(); // Close the sidebar
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Show further menu on hover (but only hide if not clicked)
  const handleMouseEnter = () => {
    setShowMiddleMenu(true);
  };

  const handleMouseLeave = () => {
    if (!clicked) {
      setShowMiddleMenu(false);
    }
  };

  // Toggle menu on click
  const toggleMiddleMenu = () => {
    const newClicked = !clicked;
    setClicked(newClicked);
    setShowMiddleMenu(newClicked);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.sidebar} ref={menuRef}>
        <div className={styles.wholeMenu}>
          <div
            className={styles.leftMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.mainMenu}>
              <ul className={styles.mainMenuUl}>
                <Link to="/" className={styles.link}><li className={styles.menu} onClick={toggleMiddleMenu}>Feature</li></Link>
                <Link to="/App" className={styles.link}><li className={styles.menu}>App</li></Link>
                <Link to="/Pricing" className={styles.link}><li className={styles.menu}>Pricing</li></Link>
                <Link to="/Integration" className={styles.link}><li className={styles.menu}>Integration</li></Link>
                <Link to="/Help" className={styles.link}><li className={styles.menu}>Help</li></Link>
              </ul>
            </div>

            <div className={styles.furtherMenu}>
              {showMiddleMenu && (
                <div className={styles.middleMenu}>
                  <ul className={styles.middleMenuList}>
    <Link to="/widget"><a href="#" className={styles.furtherNavItem}><i className="fas fa-video icon"></i> Widget</a></Link>
    <Link className={styles.link}><a href="#" className={styles.furtherNavItem}><i className="fas fa-robot icon"></i> AI Chatbot</a></Link>
    <Link className={styles.link}><a href="#" className={styles.furtherNavItem}><i className="fas fa-database icon"></i> CRM</a></Link>
    <Link className={styles.link}><a href="#" className={styles.furtherNavItem}><i className="fas fa-envelope icon"></i> Shared Inbox</a></Link>
    <Link className={styles.link}><a href="#" className={styles.furtherNavItem}><i className="fas fa-globe icon"></i> AI</a></Link>
    <Link className={styles.link}><a href="#" className={styles.furtherNavItem}><i className="fas fa-th-large icon"></i> Knowledge</a></Link>
    <Link className={styles.link}><a href="#" className={styles.furtherNavItem}><i className="fas fa-ticket-alt icon"></i> Ticketing System</a></Link>
    <Link className={styles.link}><a href="#" className={styles.furtherNavItem}><i className="fas fa-sync icon"></i> Status Page</a></Link>
    <Link className={styles.link}><a href="#" className={styles.furtherNavItem}><i className="fas fa-code icon"></i> Chat SDK</a></Link>
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
