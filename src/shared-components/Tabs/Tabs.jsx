// tabs
import React from "react";
import PropTypes from "prop-types";
// function
// css
import styles from "../../assets/css/shared-components/tabs.module.css";

export default function Tabs(props) {

  const onClickTab = (e,index) => {
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(styles.active, "");
    }
    e.currentTarget.className += " " + styles.active;
    props.onChangeTab(index)
  }
  return (
    <div className={styles.container}>
      {props.items.map((item, i) => {
        return <button key={i} className={'tablinks ' + styles.btn + (props.tab === i ? ' ' + styles.active : '')} onClick={(e)=>onClickTab(e, i)}>{item}</button>
      })}
    </div>
  );
}

Tabs.propTypes = {
  items: PropTypes.array,
  tab: PropTypes.number,
  onChangeTab: PropTypes.func
};