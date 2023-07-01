import styles from "./FOU.module.css";

const FOU = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topTitle}>
        <h5>فقط از زبان ما نشنوید</h5>
      </div>
      <div className={styles.title}>
        <h3>از زبان کارجویان</h3>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <h6>،،</h6>

            <p>
              من شغل فنی خود را در کلاسور 4 سال پیش گرفتم و هنوز هم خوشحالم!
              پرداخت خوب، فرهنگ عالی و PTO نامحدود.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h6>،،</h6>

            <p>
              من عاشق کلاسور هستم. من سال گذشته کار فعلی خود را در یک استارتاپ
              کاملاً از طریق سایت دریافت کردم - استفاده از آن بسیار آسان است و
              من عاشق رابط کاربری هستم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOU;
