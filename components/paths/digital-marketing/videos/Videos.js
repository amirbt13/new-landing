"use client";
import { useState } from "react";
import styles from "./Videos.module.css";

const Videos = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className={styles.container}>
      <h1>معرفی مسیر</h1>
      <div className={styles.subContainer}>
        <div className={styles.media}>
          <div className={styles.video}>
            {current === 0 ? (
              <video controls>
                <source
                  src="https://kelaasor.com/paths/digital-marketing-page/video/seo/intro.webm"
                  type="video/mp4"
                ></source>
              </video>
            ) : null}
            {current === 1 ? (
              <video controls>
                <source
                  src="https://kelaasor.com/paths/digital-marketing-page/video/social_media/intro.webm"
                  type="video/mp4"
                ></source>
              </video>
            ) : null}
            {current === 2 ? (
              <video controls>
                <source
                  src="https://kelaasor.com/paths/digital-marketing-page/video/asoft_skill/intro.webm"
                  type="video/mp4"
                ></source>
              </video>
            ) : null}
            {current === 3 ? (
              <video controls>
                <source
                  src="https://kelaasor.com/paths/digital-marketing-page/video/content/intro.webm"
                  type="video/mp4"
                ></source>
              </video>
            ) : null}
          </div>
          <div className={styles.info}>
            {current === 0 ? (
              <>
                <div>
                  <img src="/images/emadChabok.webp" alt="teacher" />
                </div>
                <div>
                  <div>
                    <h2>بنیان گذار DM Room</h2>
                    <p>عماد چابک</p>
                  </div>
                  <p>بخشی از سوابق شغلی:</p>
                  <ul>
                    <li>
                      <img src="/Star.svg" />
                      سئو منیجر برند های سفرمی، ایسل، پلازا و...
                    </li>
                    <li>
                      <img src="/Star.svg" />
                      مجری و مشاور سئو بیش از 200 وبسایت
                    </li>
                    <li>
                      <img src="/Star.svg" />
                      آموزش به بیش از 2000 مهارت آموز سئو
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
            {current === 1 ? (
              <>
                <div>
                  <img src="/images/atousaAhang.webp" alt="teacher" />
                </div>
                <div>
                  <div>
                    <h2>مدیر شبکه های اجتماعی فلایتیو</h2>
                    <p>آتوسا آهنگ</p>
                  </div>
                  <p>بخشی از سوابق شغلی:</p>
                  <ul>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      کارشناس شبکه های اجتماعی و تولید محتوای نوین هاب
                    </li>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      کارشناس تولید محتوای اسنپ فود
                    </li>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      کارشناس شبکه های اجتماعی موسسه هفت اقلیم
                    </li>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      ویراستار متخصصان، نشر قطره، نجوای قلم
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
            {current === 2 ? (
              <>
                <div>
                  <img src="/images/aminAramesh.jpeg" alt="teacher" />
                </div>
                <div>
                  <div>
                    <h2>بنیان گذار پادکست کار نکن</h2>
                    <p>امین آرامش</p>
                  </div>
                  <p>بخشی از سوابق شغلی:</p>
                  <ul>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      آموزش مهارت های نرم به بیش از 3000 مهارت آموز
                    </li>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      کارشناس تولید محتوا و سئو
                    </li>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      استراتژیست و طراح مسیر شغلی
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
            {current === 3 ? (
              <>
                <div>
                  <img src="/images/hosseinBabaei.webp" alt="teacher" />
                </div>
                <div>
                  <div>
                    <h2>مدیر بازاریابی محتوای یکتانت</h2>
                    <p>حسین بابایی</p>
                  </div>
                  <p>بخشی از سوابق شغلی:</p>
                  <ul>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      مدیر بازاریابی محتوای نور نگار
                    </li>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      مدیر بازاریابی محتوای نوین
                    </li>
                    <li>
                      {" "}
                      <img src="/Star.svg" />
                      مدیر دیجیتال مارکتینگ پیک لند توریسم
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className={styles.sideBar}>
          <div
            className={current === 0 ? styles.current : null}
            onClick={() => setCurrent(0)}
          >
            <h2>سئو فاندامنتال</h2>
          </div>
          <div
            className={current === 1 ? styles.current : null}
            onClick={() => setCurrent(1)}
          >
            <h2>بازاریابی شبکه های اجتماعی</h2>
          </div>
          <div
            className={current === 2 ? styles.current : null}
            onClick={() => setCurrent(2)}
          >
            <h2>مهارت های نرم شغل اول</h2>
          </div>
          <div
            className={current === 3 ? styles.current : null}
            onClick={() => setCurrent(3)}
          >
            <h2>بازاریابی محتوایی</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
