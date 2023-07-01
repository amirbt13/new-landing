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
                  src="https://kelaasor.com/paths/sales/video/tizer 1.webm"
                  type="video/mp4"
                ></source>
              </video>
            ) : null}

            {current === 1 ? (
              <video controls>
                <source
                  src="https://kelaasor.com/paths/digital-marketing-page/video/asoft_skill/intro.webm"
                  type="video/mp4"
                ></source>
              </video>
            ) : null}
          </div>
          <div className={styles.info}>
            {current === 0 ? (
              <>
                <div>
                  <img src="/images/hosseinEskandari.jpeg" alt="teacher" />
                </div>
                <div>
                  <div>
                    <h2>مدیر ارشد فروش شیپور</h2>
                    <p>حسین اسکندری</p>
                  </div>
                  <p>بخشی از سوابق شغلی:</p>
                  <ul>
                    <li>
                      <img src="/Star.svg" />
                      مدیر فروش شیپور
                    </li>
                    <li>
                      <img src="/Star.svg" />
                      مدیر فروش آلونک
                    </li>
                    <li>
                      <img src="/Star.svg" />
                      بنیانگذار و معاون مدیر عامل شرکت کارتن پاکدشت ورامین
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
            {current === 1 ? (
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
          </div>
        </div>
        <div className={styles.sideBar}>
          <div
            className={current === 0 ? styles.current : null}
            onClick={() => setCurrent(0)}
          >
            <h2>فروش و بازاریابی</h2>
          </div>

          <div
            className={current === 1 ? styles.current : null}
            onClick={() => setCurrent(1)}
          >
            <h2>مهارت های نرم شغل اول</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
