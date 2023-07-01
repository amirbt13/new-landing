import Link from "next/link";
import styles from "./SectionA.module.css";

const SectionA = () => {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <img src="/images/welcome.png" alt="got-talent" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>
          <h3>هرکسی را بهر کاری ساختند</h3>
        </div>
        <div className={styles.items}>
          <div>
            <p>پیدا کردن کار، کار تو نیست کار ماست</p>
          </div>
          <div>
            <div>
              <p>نه هرکاری ! کاری که براش ساخته شدی</p>
            </div>
            <div>
              <img src="/Click.svg" />
            </div>
          </div>
          {/* <div>
            <div>
              <p>
                فرآیند مصاحبه را ساده کنید - انتظارات خود را برای حقوق و ترجیحات
                خود برای فرهنگ شرکت از قبل تعیین کنید.
              </p>
            </div>
            <div>
              <img src="/Toggle.svg" />
            </div>
          </div> */}
        </div>
        <div className={styles.buttons}>
          <Link href="#">ثبت نام رایگان</Link>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
