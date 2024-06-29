import styles from "./Header.module.css";
import home from '../../assets/icons/home-2.svg'
import car from '../../assets/icons/car.svg'
import award from '../../assets/icons/award.svg'
import logout from '../../assets/icons/log-in-1.svg'

function Header() {
  return (
    <>
      <div className={styles.header}>
        {/* <div className={styles.main_title}> */}
          {/* <hr /> */}
          <div className={styles.title}>ROCKET LEAGUE</div>
        {/* </div> */}
        <div className={styles.user_area}>
          <div className={styles.circle_img}>
            <img
              src="https://s2.glbimg.com/khtwDhvIrhx3-12UEnSoQPyeVnM=/e.glbimg.com/og/ed/f/original/2017/12/06/pidgeon-425672_1920.jpg"
              alt="User"
            />
          </div>
          <span className={styles.username}>Pruu Pruu</span>
          <span className={styles.role}>Admin</span>
        </div>
        <div className={styles.nav_bar}>
            <ul>
                <li className={styles.active}><img src={home} /><a href="#" >Home</a></li>
                <li><img src={car} /><a href="#">Cars</a></li>
                <li><img src={award} /><a href="#">Pass</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><img src={logout} /><a href="#">Logout</a></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
