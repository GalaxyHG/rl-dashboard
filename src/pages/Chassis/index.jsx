import styles from "./Chassis.module.css";
import Card from "../../components/Card";

function Chassis() {
  return (
    <>
      <section className={styles.mainSection}>
        <h1>This is the Chassis page</h1>
        <section className={styles.cardsContainer}>
          {/* <Card
            key={repo.id}
            carName={repo.name}
            rarity={repo.description}
            imgCar={repo.html_url}
          /> */}
        </section>
      </section>
    </>
  );
}

export default Chassis;
