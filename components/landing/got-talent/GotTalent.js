import Link from "next/link";
import styles from "./GotTalent.module.css";

const GotTalent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <img src="/images/user.png" alt="got-talent" />
      </div>
      <div className={styles.text}>
        <div className={styles.topTitle}>
          <h5>استعداد داری ؟</h5>
        </div>
        <div className={styles.title}>
          <h3>چرا کارجویان مارو دوست دارند ؟</h3>
        </div>
        <div className={styles.items}>
          <div>
            <div>
              <p>آموزش مهارت‌هایی که نیاز داری زیر نظر بهترین مربی‌ها</p>
            </div>
            <div>
              <img src="/Star.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>تجربه‌ی دوماه کارآموزی که برای ورود به بازار کار آماده بشی</p>
            </div>
            <div>
              <img src="/Click.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>دیگه احتیاجی به رزومه نوشتن نداری</p>
            </div>
            <div>
              <img src="/List.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>مسیر سریع استخدام که جای دیگه نمی‌تونی پیدا کنی</p>
            </div>
            <div>
              <img src="/Connect.svg" />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="#">ثبت نام</Link>
          <Link href="#">بیشتر بدانید</Link>
        </div>
      </div>
    </div>
  );
};

export default GotTalent;
