import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
  // console.log(styles);
  return (
    // <nav className={styles.navbar}
      <nav className={`${styles.navbar} container`}>
        <div className='logo'>
            <img src='/images/code.png' alt='do some coding logo' style={{width:"70px"}}/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>


  )
}

export default Navbar