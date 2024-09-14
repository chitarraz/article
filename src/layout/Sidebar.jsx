/* eslint-disable no-unused-vars */ // TO REMOVE
import React from "react";
// component
import Tabs from "../shared-components/Tabs/Tabs";
// css
import styles from "../assets/css/layout/sidebar.module.css";

import sidebar from '../json/sidebar.json';

const Sidebar = () => {
  const [tab, setTab] = React.useState(0);

  const articleList = (list) => {
    let components = [];
    for (let i = 0; i < list.length; i ++) {
      components.push(
        article(list[i])
      );
    }
    return components;
  }

  const article = (item) => {
    return (
      <a src={item.url} className={styles['sidebar-article']}>
        <img className={styles.thumbnail} src={item.thumbnail} alt="thumbnail" />
        <span>{item.title}</span>
      </a>
    );
  }

  const renderContent = () => {
    switch (tab) {
      case 0:
        return articleList(sidebar.items ?? []);
      case 1: 
        return articleList(sidebar.items ?? []);
    }
  }

  React.useEffect(() => {
    // assume on change tab, call api to get list of sidebar items
  }, [tab])

  return (
    <React.Fragment>
      <Tabs 
        items={['You might like', 'Trending']} 
        tab={tab}
        onChangeTab={(index)=>setTab(index)}
      />
      {renderContent()}
    </React.Fragment>
  );
}

export default Sidebar;