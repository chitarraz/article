// Contact section
import React from "react";
//components
import ReadMore from "../../shared-components/widgets/ReadMore";
import Subscribe from "../../shared-components/widgets/Subscribe";
import Whatsapp from "../../shared-components/widgets/Whatsapp";
// css
import styles from "../../assets/css/components/article.module.css";

export default function ContactSection() {

  return (
    <React.Fragment>
      <div className={styles['contact-container']}>
        <Subscribe />
        <Whatsapp />
      </div>
    </React.Fragment>
  );
}
