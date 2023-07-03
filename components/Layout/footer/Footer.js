import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <ul>
          <li>
            <p>شرکت کلاسور</p>
          </li>
          <li>
            <Link href="/home/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/home/contact-us">تماس با ما</Link>
          </li>
          <li>
            <Link href="/home/restrictions-and-policy">قوانین و مقررات</Link>
          </li>
          <li>
            <Link href="#">وبلاگ</Link>
          </li>
        </ul>
        <ul>
          <li>
            <p>برای کارفرمایان</p>
          </li>
          <li>
            <Link href="#">دیدکلی</Link>
          </li>
          <li>
            <Link href="#">دیجیتال مارکتینگ</Link>
          </li>
          <li>
            <Link href="#">تحلیل داده</Link>
          </li>
          <li>
            <Link href="#">بازاریابی و فروش</Link>
          </li>
        </ul>
        <ul>
          <li>
            <p>برای کارجویان</p>
          </li>
          <li>
            <Link href="#">دیدکلی</Link>
          </li>
          <li>
            <Link href="#">شغل های استارتاپی</Link>
          </li>
          <li>
            <Link href="#">شغل های تکنولوژی</Link>
          </li>

          <li>
            <Link href="#">دورکاری</Link>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img src="/Vector.png" />
      </div>
      <div className={styles.sub}>
        <sub>شرکت کلاسور | ۱۴۰۲ | تمامی حقوق کپی رایت محفوظ است.</sub>
      </div>
    </div>
  );
};

export default Footer;
