import React, { useState } from "react";

import { Header } from "../header";
import { Sidebar } from "../sidebar";

import * as styles from "./styles.module.scss";

const Layout = ({children, title="Staff Tracker"}) => {

  const [hambOpen, setHambOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar hambOpen={hambOpen} />
      <div className={styles.layoutChildren}>
        <Header setHambOpen={setHambOpen} hambOpen={hambOpen} title={title} />
        {children}
      </div>
    </div>
  )
}

export { Layout };