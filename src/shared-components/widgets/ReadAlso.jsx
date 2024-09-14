// read also widget
import PropTypes from "prop-types";
// css
import styles from "../../assets/css/shared-components/widgets/readalso.module.css";

export default function ReadAlso(props) {

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Read Also</h4>
      <a className={styles['read-also-content']} href={props.url}>
        {/* hardcode props.content */}
        <span>Property analysts expect S$1m HDB resale transactions soon in last 4 towns yet to record such sales</span>
      </a>
    </div>
  );
}

ReadAlso.propTypes = {
  content: PropTypes.string,
  url: PropTypes.string,
};