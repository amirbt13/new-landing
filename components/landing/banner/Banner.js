import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div>
          <h1>آموزش با ما، شغل‌ات هم با ما</h1>
        </div>
        <div>
          <h2>یاد بگیر، تجربه کسب کن، تو بهترین شرکت ها استخدام شو</h2>
        </div>
        <div className={styles.bannerBtns}>
          <Link href="#">استخدام کن</Link>
          <Link href="#">استخدام شو</Link>
        </div>
      </div>
      <div className={styles.media}>
        <img src="/images/banner.png" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
