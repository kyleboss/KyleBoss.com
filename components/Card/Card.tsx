import Image, { StaticImageData } from "next/image";
import styles from "./Card.module.css";

type CardProps = {
  image: StaticImageData;
  subtitle: string;
  title: string;
  url: string;
};

const Card = ({ image, subtitle, title, url }: CardProps) => {
  return (
    <a className={styles.card} href={url}>
      {/* <div className={styles.imageContainer}>
        <Image src={image} alt="" width={90} />
      </div> */}
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>
    </a>
  );
};

export default Card;
