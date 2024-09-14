// Related Topics component
import { useSelector } from "react-redux";
//components
import Trending from "../../shared-components/Tag/Trending";
// css
import styles from "../../assets/css/components/article.module.css";

export default function RelatedTopics() {
  const article = useSelector(store => store.article.article);

  return (
    <div className={styles['related-topics']}>
      <h2 className={styles['h2-topics']}>Related Topics</h2>
      <div className={styles['topic-list']}>
        {article.topics && article.topics.map((item, i) => {
          return (
            <Trending key={i} title={item.name} url={item.link} />
          );
        })}
      </div>
    </div>
  );
}
