import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div>
          <h1>شما یک شغل دارید. ما بیش از 8 میلیون جویای کار داریم.</h1>
        </div>
        <div>
          <h3>
            8 میلیون نامزد آماده راه اندازی از سراسر جهان، جزئیات منحصر به فردی
            که در هیچ جای دیگری نمی توانید پیدا کنید، و تمام ابزارهایی که برای
            استخدام نیاز دارید - همه چیز را در 10 دقیقه به صورت رایگان تنظیم
            کنید.
          </h3>
        </div>
        <div className={styles.bannerBtns}>
          <Link href="#">همین حالا ثبت نام کنید</Link>
        </div>
      </div>
      <div className={styles.media}>
        <img src="/images/women.png" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
