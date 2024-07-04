import styles from "./Chassis.module.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

function Chassis() {
  const [chassis, setChassis] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/GalaxyHG/api-rocketleague/main/chassis.json')
    .then(response => response.json())
    .then(data => {
      setChassis(data.chassis);
    })
    .catch(error => console.error('Error:', error));
  }, []);

  if (chassis == null) {
    return (
      <>
        <section className={styles.mainSection}>
          <h1>This is the Chassis page</h1>
          <p>Carregando chassis...</p>
        </section>
      </>
    )
  }

  return (
    <>
      <section className={styles.mainSection}>
        <h1>This is the Chassis page</h1>
        {chassis.length > 0 ? (
          <section className={styles.cardsContainer}>
            {chassis.map((chassi) => (
              <Card
                // key={chassi.id}
                carName={chassi.name}
                rarity={chassi.rarity}
                imgCar={chassi.image}
              />
            ))}
          </section>
        ) : (
          <p>Carregando chassis...</p>
        )}
      </section>
    </>
  );
}

export default Chassis;
