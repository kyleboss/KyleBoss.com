import Card from "@/components/Card";
import cards from "@/data/cards";

import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          subtitle={card.subtitle}
          url={card.url}
        />
      ))}
    </div>
  );
};

export default Cards;
