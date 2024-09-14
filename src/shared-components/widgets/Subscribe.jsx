// subscription box widget
import React from "react";
// function
import { isEmail } from "../../common/validations";
// css
import styles from "../../assets/css/shared-components/widgets/subscribe.module.css";
import { FaChevronRight } from "react-icons/fa";

export default function Subscribe() {
  const [errorMsg, setErrorMsg] = React.useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (validateFields()) {
      alert('Subscribed');
    }
  }

  const validateFields = () => {
    const email = document.forms['subscribe-form']['email'].value;
    if (!email) {
      setErrorMsg('Invalid email address.');
      return false;
    }
    if (!isEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return false;
    }
    setErrorMsg(false);
    return true;
  }

  return (
    <React.Fragment>
      <div className={styles['container']}>
        <div className={styles['title-container']}>
          <h2 className={styles['h2-title']}>Stay in the know. Anytime. Anywhere.</h2>
        </div>
        <div className={styles['body-container']}>
          <div className={styles['content-container']}>
            <img className={styles['img']} src="https://onecms-res.cloudinary.com/image/upload/s--JmrzKNBp--/f_auto,q_auto/v1/mediacorp/tdy/image/2023/02/01/todayonline_newsletter_0.png?itok=yFF5_J1w" alt="subscribe-img" />
            <p className={styles['p-content']}>Subscribe to our newsletter for the top features, insights and must reads delivered straight to your inbox.</p>
          </div>
          <div>
            <form name="subscribe-form" onSubmit={(e)=>onSubscribe(e)}>
              <input className={styles['textfield']} placeholder="Enter your email address" name="email" type="text" maxLength="128" />
              <button className={styles['subscribe-button']} onClick={(e)=>onSubscribe(e)}>Subscribe <FaChevronRight className={styles['subscribe-chevron']} /></button>
            </form>
            {errorMsg && <p className={styles['err-msg']}>{errorMsg}</p>}
            <p className={styles['p-footer']}>By clicking subscribe, I agree for my personal data to be used to send to me TODAY newsletter, promotional offers and for research and analysis.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
