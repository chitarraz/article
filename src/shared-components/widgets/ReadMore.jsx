// read more widget
// css
import { FaChevronRight } from "react-icons/fa";
import styles from "../../assets/css/shared-components/widgets/readmore.module.css";

export default function ReadMore() {

  return (
    <a href="https://www.todayonline.com/news">
      <div className={styles.container}>
        <div className={styles.content}>
          <span>Read more of the latest in</span><span className={styles.news}>News</span>
        </div>
        <div>
          <span className={styles.explore}>Explore Now <FaChevronRight /></span>
        </div>
      </div>
    </a>
  );
}
