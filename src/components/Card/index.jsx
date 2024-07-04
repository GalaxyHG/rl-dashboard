import styles from './Card.module.css'
// import img from '../../assets/images/octane.webp'
import arrow from '../../assets/icons/arrow-forward.svg'

function Card({carName, rarity, imgCar}) {
    return (
        <>
            <section className={styles.card}>
                <div className={styles.imgChassiCar}><img src={imgCar} /></div>
                <div className={styles.containerInfo}>
                    <h2 className={styles.carName}>{carName}</h2>
                    <p className={styles.rarity}>{rarity}</p>
                    <button className={styles.seeMoreBtn}>See more <img src={arrow} /></button>
                </div>
            </section>
            {/* <section className={styles.card}>
                <div className={styles.imgChassiCar}><img src={img} /></div>
                <div className={styles.containerInfo}>
                    <h2 className={styles.carName}>Octane</h2>
                    <p className={styles.rarity}>Rarity: Common</p>
                    <button className={styles.seeMoreBtn}>See more <img src={arrow} /></button>
                </div>
            </section> */}
        </>
    )
}

export default Card

// 