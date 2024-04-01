import styles from "./Card.module.css";

type CardProps = {
  subtitle: string;
  title: string;
  url: string;
};

const Card = ({ subtitle, title, url }: CardProps) => {
  return (
    <a className={styles.card} href={url}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>
    </a>
  );
};

export default Card;
