import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import styles from './FurtherNav.module.css';
import images from '../../assets/images';

const FurtherNav = ({ onClose }) => {
  const [showMiddleMenu, setShowMiddleMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const menuRef = useRef(null);
  const carouselRef = useRef(null);

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
useEffect(() => {
  const carousel = carouselRef.current;
  const prevBtn = document.querySelector(`.${styles.carouselBtn}.${styles.prev}`);
  const nextBtn = document.querySelector(`.${styles.carouselBtn}.${styles.next}`);
  const scrollAmount = 200;

  const scrollLeft = () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };
  const scrollRight = () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const updateButtonVisibility = () => {
    const isMobile = window.innerWidth <= 768;
    if (prevBtn && nextBtn) {
      prevBtn.style.display = isMobile ? 'block' : 'none';
      nextBtn.style.display = isMobile ? 'block' : 'none';
    }
  };

  updateButtonVisibility(); // Set visibility on mount
  window.addEventListener('resize', updateButtonVisibility);

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', scrollLeft);
    nextBtn.addEventListener('click', scrollRight);
  }

  return () => {
    window.removeEventListener('resize', updateButtonVisibility);
    if (prevBtn && nextBtn) {
      prevBtn.removeEventListener('click', scrollLeft);
      nextBtn.removeEventListener('click', scrollRight);
    }
  };
}, []);

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
                <div className={styles.carouselContainer}>
      <div className={styles.middleMenu} ref={carouselRef}>
        <ul className={styles.middleMenuList}>
          <li className={styles.menuItem}>
            <Link to="/widget" className={styles.furtherMenuLink}>
              <i className="icon fas fa-video"></i> Widget
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-robot"></i> AI Chatbot
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-database"></i> CRM
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-envelope"></i> Shared Inbox
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-globe"></i> AI
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-th-large"></i> Knowledge
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-ticket-alt"></i> Ticketing System
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-sync"></i> Status Page
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-code"></i> Chat SDK
            </Link>
          </li>
        </ul>
      </div>
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
