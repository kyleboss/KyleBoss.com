import Image from "next/image";

import headshotImage from "@/images/headshot.webp";

import styles from "./Headshot.module.css";

const Headshot = () => {
  return (
    <Image
      src={headshotImage.src}
      placeholder="blur"
      blurDataURL={headshotImage.blurDataURL}
      width={150}
      height={150}
      alt="Kyle Boss's Headshot"
      className={styles.headshot}
    />
  );
};

export default Headshot;
