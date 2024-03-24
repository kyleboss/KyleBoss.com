import Headshot from "@/components/Headshot";
import Description from "@/components/Description";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Headshot />
      <Description />
    </header>
  );
};

export default Header;
