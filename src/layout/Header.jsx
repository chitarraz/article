// header
import React from "react";
import { useSelector } from "react-redux";
//css
import styles from "../assets/css/layout/header.module.css";

import header from '../json/header.json';
import { FaChevronDown, FaGamepad, FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  // const [prevScrollTop, setPrevScrollTop] = React.useState(0);
  // article to change header to title on scroll
  const article = useSelector(store => store.article.article);

  var prevScrollTop = 0;
  const changeHeader = () => {
    const root = document.getElementById("mainPanel");
    const standard = document.getElementById("standard");
    const scrollup = document.getElementById("scrollup");
    const scrolldown = document.getElementById("scrolldown");
    if (root.scrollTop === 0) { // if top of page
      standard.classList.remove(styles.hidden);
      scrollup.classList.add(styles.hidden);
    } else {
      standard.classList.add(styles.hidden);
      if (prevScrollTop > root.scrollTop) { // user scrolled up
        scrollup.classList.remove(styles.hidden);
        scrolldown.classList.add(styles.hidden);
      } else { // user scrolled down
        scrollup.classList.add(styles.hidden);
        scrolldown.classList.remove(styles.hidden);
      }
    }
    prevScrollTop = (root.scrollTop);
  }

  React.useEffect(() => {
    document.getElementById("mainPanel").addEventListener("scroll", changeHeader);
  },[])

  // on scroll change ui
  return (
    <div className={styles.header}>
      <div id="standard">
        <div className={styles['top-nav']}>
          <a href={"https://www.todayonline.com/"}>
            <img className={styles.logo} src="https://www.todayonline.com/themes/custom/mc_todayonline_theme/images/logo.svg" alt="today-logo" />
          </a>
          <div className={styles.login}>
            <button><FaGamepad /> Games</button>
            <button><FaSearch /> Search</button>
            <button><FaUser /> Sign In</button>
          </div>
        </div>
        <div className={styles.appbar}>
          {header.map((item, i) => {
            if (item.enabled) {
              if (item.below && item.below.length) {
                return (
                  <div key={i} className={styles.dropdown}>
                    <span className={styles.menu}>{item.title} <FaChevronDown className={styles['more-icon']} /></span>
                    <div className={styles["dropdown-content"]}>
                      {item.below.map((subItem) => {
                        return <a key={i} href={subItem.absolute_url} className={styles.menu}>{subItem.title}</a>;
                      })
                      }
                    </div>
                  </div>
                );
              }
              return (
                <a key={i} href={item.absolute_url} className={styles.menu}>{item.title}</a>
              );
            }
          })}
        </div>
      </div>
      <div id="scrollup" className={styles.scroll + ' ' + styles.hidden}>
        <a href={"https://www.todayonline.com/"}>
          <img className={styles.logo} src="https://www.todayonline.com/themes/custom/mc_todayonline_theme/images/logo.svg" alt="today-logo" />
        </a>
        <div className={styles.appbar}>
          {header.map((item, i) => {
            if (item.enabled) {
              if (item.below && item.below.length) {
                return (
                  <div key={i} className={styles.dropdown}>
                    <span className={styles.menu}>{item.title} <FaChevronDown className={styles['more-icon']} /></span>
                    <div className={styles["dropdown-content"]}>
                      {item.below.map((subItem) => {
                        return <a key={i} href={subItem.absolute_url} className={styles.menu}>{subItem.title}</a>;
                      })
                      }
                    </div>
                  </div>
                );
              }
              return (
                <a key={i} href={item.absolute_url} className={styles.menu}>{item.title}</a>
              );
            }
          })}
        </div>
        <div className={styles.login}>
          <button><FaGamepad /></button>
          <button><FaSearch /></button>
          <button><FaUser /></button>
        </div>
      </div>
      <div id="scrolldown" className={styles.scroll + ' ' + styles.hidden}>
        <div className={styles.scrolldown}>
          <a href={"https://www.todayonline.com/"}>
            <img className={styles.logo} src="https://www.todayonline.com/themes/custom/mc_todayonline_theme/images/logo.svg" alt="today-logo" />
          </a>
          <div className={styles['title-container']}>
            <p className={styles.news}>News</p>
            <h5 className={styles['news-title']} dangerouslySetInnerHTML={{__html: article.title}}></h5>
          </div>
        </div>
        {/* change to article buttons */}
        <div className={styles.login}>
          <button><FaGamepad /></button>
          <button><FaSearch /></button>
          <button><FaUser /></button>
        </div>
      </div>
    </div>
  );
};

export default Header;