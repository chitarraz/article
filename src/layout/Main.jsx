// main layout
import React from "react";
// css
import Header from "./Header";
import Article from "../components/Article/Article";
import styles from "../assets/css/layout/main.module.css";

export default function Main() {
  const contentRef = React.useRef(null);

  return (
    <React.Fragment>
      <div id="mainPanel" className={styles.mainPanel} ref={contentRef}>
        <div className={styles.mainContainer}>
          <Header />
          <div className={styles.container}>
            <Article />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
