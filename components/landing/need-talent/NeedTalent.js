import Link from "next/link";
import styles from "./NeedTalent.module.css";

const NeedTalent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.topTitle}>
          <h5>به نیروی مستعد نیاز داری ؟</h5>
        </div>
        <div className={styles.title}>
          <h3>چرا کارفرمایان مارو دوست دارند ؟</h3>
        </div>
        <div className={styles.items}>
          <div>
            <div>
              <p>
                الگوریتم همسان یاب کمک می‌کنه رزومه‌های متناسب تری نشون داده بشه
              </p>
            </div>
            <div>
              <img src="Team.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>فرآیند ثبت نام تا قرار مصاحبه 4 دقیقه طول می‌کشه</p>
            </div>
            <div>
              <img src="/Settings.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>همه‌ی کارجوها آموزش‌های سخت و نرم لازم رو گذروندن.</p>
            </div>
            <div>
              <img src="/Template.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>پشتیبان‌های کلاسور به تسهیل فرآیند استخدام کمک می‌کنن.</p>
            </div>
            <div>
              <img src="/Candidate.svg" />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="#">بیشتر بدانید</Link>
          <Link href="#">ثبت نام</Link>
        </div>
      </div>
      <div className={styles.media}>
        <img src="/images/employer.png" />
      </div>
    </div>
  );
};

export default NeedTalent;
