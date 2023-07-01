"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [burgerShow, setBurgerShow] = useState(false);
  const [dropDownShow, setDropDownShow] = useState(false);
  useEffect(() => {
    setBurgerShow(false);
  }, [pathName]);
  return (
    <div className={styles.container}>
      <div className={`${styles.subContainer}`}>
        <div className={styles.logo}>
          <img src="/Vector.png" alt="logo" />
        </div>
        <div
          className={`${burgerShow ? styles.burgerShow : null} ${
            styles.burger
          }`}
          onClick={() => setBurgerShow(!burgerShow)}
        >
          <img src="/burger.svg" />
        </div>
        <div
          className={`${burgerShow ? styles.burgerListShow : null} ${
            styles.burgerList
          }`}
        >
          <div>
            <Link href="/home">
              <h3>صفحه اصلی</h3>
            </Link>
          </div>

          {pathName.startsWith("/home/user-info") ? null : (
            <div>
              <Link href="/home/user-info">
                <h3>برای کارجویان</h3>
              </Link>
            </div>
          )}
          {pathName.startsWith("/home/employer-info") ? null : (
            <div>
              <Link href="/home/employer-info">
                <h3>برای کارفرمایان</h3>
              </Link>
            </div>
          )}
          <div>
            <p>مسیر های شغلی</p>
          </div>
          <div>
            <Link href="/home/paths/digital-marketing">
              <h4>دیجیتال مارکتینگ</h4>
            </Link>
          </div>
          <div>
            <Link href="/home/paths/sales">
              <h4>فروش و بازاریابی</h4>
            </Link>
          </div>
          <div>
            <Link href="/home/paths/data-analytics">
              <h4>تحلیل داده</h4>
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link href="#">ورود</Link>
            <Link href="#">ثبت نام</Link>
          </div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.links}>
            <Link href="/home">صفحه اصلی</Link>
            <div
              className={styles.paths}
              onMouseOver={() => setDropDownShow(true)}
              onMouseLeave={() => setDropDownShow(false)}
            >
              <p>مسیر های شغلی</p>
              <img src="/arrow-down.svg" />
              <div
                className={`${styles.dropDown} ${
                  dropDownShow ? styles.dropDownShow : null
                }`}
              >
                <Link href="/home/paths/digital-marketing">
                  دیجیتال مارکتینگ
                </Link>

                <Link href="/home/paths/sales">بازاریابی و فروش</Link>

                <Link href="/home/paths/data-analytics">تحلیل داده</Link>
              </div>
            </div>

            <Link href="/home/user-info">برای کارجویان</Link>

            <Link href="/home/employer-info">برای کارفرمایان</Link>

            <div className={styles.buttons}>
              <Link href="#">ورود</Link>
              <Link href="#">ثبت نام</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
