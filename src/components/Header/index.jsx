import styles from "./Header.module.css";
import user from '../../assets/images/user.webp'
import home from '../../assets/icons/home-2.svg'
import car from '../../assets/icons/car.svg'
import award from '../../assets/icons/award.svg'
import logout from '../../assets/icons/log-in-1.svg'
import { Link } from 'react-router-dom'

function Header() {
  const ativo = (selected) => {
    let ids = ["home", "car", "pass"]
    ids.forEach((e)=>{
      document.getElementById(e+"Button").classList.remove(styles.active)
    })
    document.getElementById(selected+"Button").classList.add(styles.active)
    console.log(selected)
  } 
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
              src={user}
              alt="User"
            />
          </div>
          <span className={styles.username}>Pruu Pruu</span>
          <span className={styles.role}>Admin</span>
        </div>
        <div className={styles.nav_bar}>
            <ul>
                <Link id="homeButton" className={`${styles.active} ${styles.btn}`} onClick={()=>ativo("home")} to="/"><img src={home} /> Home</Link>
                <Link id="carButton" className={styles.btn}  onClick={()=>ativo("car")} to="/chassis"><img src={car} /> Chassis</Link>
                <Link className={styles.btn} id="passButton" onClick={()=>ativo("pass")} to="/pass"><img src={award} /> Pass</Link>
            </ul>
        </div>
        <div>
            <ul>
                <Link className={styles.btn} to="#"><img src={logout} />Logout</Link>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
