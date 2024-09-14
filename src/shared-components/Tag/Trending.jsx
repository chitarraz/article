// trending tags in articles
import PropTypes from "prop-types";
// function
// css
import styles from "../../assets/css/shared-components/trending.module.css";

export default function Trending(props) {

  return (
    <a href={props.url}>
      <div className={styles.container}>
        <span>{props.title}</span>
      </div>
    </a>
  );
}

Trending.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};