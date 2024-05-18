import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_logo}>EV-olution</div>
      <ul className={styles.nav_menu}>
        <li>Home</li>
        <li>About</li>
        <li>Explore</li>
        <li className={styles.nav_contact}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
