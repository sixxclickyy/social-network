import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div>
          <NavLink to="/content" className={styles.profile} activeClassName={styles.activeLink}>
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/messages" className={styles.msg} activeClassName={styles.activeLink}>
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink to="/news" className={styles.news} activeClassName={styles.activeLink}>
            News
          </NavLink>
        </div>
        <div>
          <NavLink to="/music" className={styles.music} activeClassName={styles.activeLink}>
            Music
          </NavLink>
        </div>
        <div>
          <NavLink to="/settings" className={styles.sett} activeClassName={styles.activeLink}>
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
