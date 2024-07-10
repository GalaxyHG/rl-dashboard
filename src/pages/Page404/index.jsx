import styles from './Page404.module.css'
import octane404 from '../../assets/images/404octane.png'
import { Link } from 'react-router-dom'
import arrow from '../../assets/icons/arrow-forward.svg'

function Page404() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.container404}>
                    <div>
                        <h1 className={styles.t404}>404</h1>
                        <h2 className={styles.h2404}>We didn't find this page...</h2>
                        <h4 className={styles.h4404}>But don't worry, this is Rocket League!</h4>
                    </div>
                    <img src={octane404} />
                </div>
                <Link className={styles.goback} to='/'>Go back <img src={arrow} /></Link>
            </section>
        </>
    )
}

export default Page404