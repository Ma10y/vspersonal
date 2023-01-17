import React from "react";
import Navbar from "../Navbar";
import styles from "./window.module.scss";
const Window = ({ children }: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <Navbar></Navbar>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Window;
