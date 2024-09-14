// Article Page
import React from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import RelatedTopics from "./RelatedTopics";
import ReadMore from "../../shared-components/widgets/ReadMore";
import ReadAlso from "../../shared-components/widgets/ReadAlso";
import ArticleInfo from "./ArticleInfo"
import ContactSection from "./ContactSection";
import Sidebar from "../../layout/Sidebar";
// store
import { setValues } from ".";
// css
import styles from "../../assets/css/components/article.module.css";

import articles from "../../json/article-2403311.json";
import { createRoot } from "react-dom/client";

export default function Article() {
  // const article = articles[0];
  const dispatch = useDispatch();
  const article = useSelector(store => store.article.article);

  React.useEffect(() => {
    if (article && article.related_article) {
      const content = document.getElementById("content");
      const paragraphs = content.getElementsByTagName("p");
      for (let i = 0; i < article.related_article.length; i++) {
        // call api with article.related_articles to get read also content
        const newDiv = document.createElement("div");
        newDiv.appendChild(paragraphs[(i+1)*6]);
        createRoot(newDiv).render(<ReadAlso />);
        paragraphs[(i+1)*6].replaceWith(newDiv);
      }
    }
  }, [article])

  React.useEffect(() => {
    dispatch(setValues({article: articles[0]}));
  }, [dispatch])

  return (
    <div className={styles.container}>
      <h1 className={styles['h1-title']} dangerouslySetInnerHTML={{__html: article.title}}></h1>
      <div className={styles['two-column']}>
        {/* left column */}
        <div className={styles['left-column']}>
          {article.image && 
            <React.Fragment>
              <img className={styles.image} src={article.image.media_image} alt="article-img"/>
              <span dangerouslySetInnerHTML={{__html: article.image.description}}></span>
            </React.Fragment>
          }
        </div>
        {/* right column */}
        <div className={styles['right-column']}>
          <ArticleInfo />
        </div>
      </div>
      <div className={styles['two-column']}>
        {/* left column */}
        <div className={styles['left-column']}>
          <div className={styles['content-container']}>
            <div className={styles.tldr} dangerouslySetInnerHTML={{__html: article.tldr}}></div>
          </div>
        </div>
      </div>
      <div className={styles['two-column']}>
        {/* left column */}
        <div className={styles['left-column']}>
          <div className={styles['content-container']}>
            <div id="content" className={styles.content} dangerouslySetInnerHTML={{__html: article.content && article.content[0].body}}></div>
            <RelatedTopics />
            <div className={styles['read-more']}>
              <ReadMore />
            </div>
            <ContactSection />
          </div>
        </div>
        {/* right column */}
        <div className={styles['right-column']}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
