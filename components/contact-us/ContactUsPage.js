import styles from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  return (
    <div className={styles.container}>
      <h1>تماس با ما :</h1>
      <div className={styles.subContainer}>
        <div className={styles.info}>
          <div>
            <img src="/Global.svg" alt="address" />
            <p>تهران ، جنب مترو بیمه ، کارخانه نوآوری آزادی ، زاویه</p>
          </div>
          <div>
            <img src="/phone.svg" alt="phone" />
            <p>{"09216556270"}</p>
          </div>
          <div>
            <img src="/mail.svg" alt="email" />
            <p>kelaasor@gmail.com</p>
          </div>

          <div>
            <img src="/telegram.svg" alt="telegram" />
            <p>
              <a href="https://t.me/kelaasoradmin">پشتیبانی تلگرام</a>
            </p>
          </div>
        </div>
        <div className={styles.media}>
          <img src="/location.png" alt="location" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
