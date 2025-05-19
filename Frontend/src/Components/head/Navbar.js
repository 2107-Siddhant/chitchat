import React, { useState } from 'react';
import styles from './Navbar.module.css';
import FurhterNav from './FurtherNav';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <div className={styles.hamburger} onClick={toggleSidebar} title="menu">
            <div />
            <div />
            <div />
          </div>
        
        </div>

        <div className={styles.center}>
          <h1 className={styles.logo}>
            Mediator<span className={styles.brain}>🧠</span>
              </h1>
        </div>

        <div className={styles.right}>
          <button className={styles.headerBtn}>Sign Up</button>
          <button className={styles.headerBtn}>Login</button>
        </div>

      </nav>

      {showSidebar && 
        <div>
          <FurhterNav onClose={closeSidebar} />
        </div>
      }
    </>
  );
};

export default Navbar;
