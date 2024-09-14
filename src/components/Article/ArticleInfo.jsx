// Article Info Page
import { useSelector } from "react-redux";
// css
import styles from "../../assets/css/components/article.module.css";

export default function ArticleInfo() {
  // const article = articles[0];
  const article = useSelector(store => store.article.article);

  const byline = article.byline_detail ?? [];

  const formatDate = (date) => {
    if (date) {
      const oldFormat = new Date(date);
      const formatter = new Intl.DateTimeFormat('en-US', {month: "short", day: "numeric", year: "numeric"});
      return formatter.format(oldFormat);
    }
    return null;
  }

  return (
    <div>
      { byline.map((item, i) => {
        return (
          <div key={i} className={styles.byline}>
            <img src={item.hero_media && item.hero_media.thumbnail} alt="byline-thumbnail" /><span><i>By</i> <strong>{item.title}</strong></span>
          </div>
        );
      })}
      <div className={styles["byline-detail"]}>
        <i>Published </i><strong>{formatDate(article.publishdate)}</strong><br/>
        <i>Updated </i><strong>{formatDate(article.lastupdated)}</strong>
      </div>
      {/* add article buttons */}
    </div>
  );
}
