import styles from "./Chassis.module.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

function Chassis() {
  const [chassis, setChassis] = useState([]);

  useEffect(() => {
    const buscarChassis = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/GalaxyHG/api-rocketleague/main/chassis.json"
      );
      const data = await response.json();
      setChassis(data.chassis);
    };
    buscarChassis();
  }, []);

  return (
    <>
      <section className={styles.mainSection}>
        <h1>Chassis / Bodies</h1>
        {chassis.length > 0 ? (
          <section className={styles.cardsContainer}>
            {chassis.map((chassi) => (
              <Card
                key={chassi.id}
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
