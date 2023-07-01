import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div>
          <h1>شغلی که براش ساخته شدی رو انتخاب کن</h1>
        </div>
        <div>
          <h3>
            ما یافتن شغلی رویاییت رو آسون میکنیم. از شرکت های بزرگ گرفته تا
            استارتاپ های کوچیک مناسب ترین موقعیت های شغلی رو برات فراهم میکنیم
          </h3>
        </div>
        <div className={styles.bannerBtns}>
          <Link href="#">مسیر خود را انتخاب کنید</Link>
        </div>
      </div>
      <div className={styles.media}>
        <img src="/images/women.png" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
