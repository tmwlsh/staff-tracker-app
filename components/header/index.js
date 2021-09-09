import * as React from "react";

import * as styles from "./styles.module.scss";

const Header = ({title, setHambOpen, hambOpen}) => {

  const hambClasses = [styles.headerHamb, hambOpen ? styles['hamb-open'] : styles['hamb-closed']];

  return (
    <header className={styles.header}>
      <div onClick={() => setHambOpen(!hambOpen)} className={hambClasses.join(" ")}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  )
}

export { Header };