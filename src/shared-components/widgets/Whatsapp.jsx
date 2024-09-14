// whatsapp widget
// css
import styles from "../../assets/css/shared-components/widgets/whatsapp.module.css";

export default function Whatsapp() {

  return (
    <div className={styles.container}>
      <a href="https://www.whatsapp.com/channel/0029VaEGYYBCnA8212FmWA3Z?v=1">
        <img className={styles.img} src="https://onecms-res.cloudinary.com/image/upload/v1705599712/mediacorp/tdy/image/2024/01/19/whatsapp_3.png" alt="whatsapp-widget" />
      </a>
    </div>
  );
}
