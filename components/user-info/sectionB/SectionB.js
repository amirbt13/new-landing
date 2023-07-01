import Link from "next/link";
import styles from "./SectionB.module.css";

const SectionB = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h3>شغلی را پیدا کنید که برای شما مفید باشد</h3>
        </div>
        <div className={styles.items}>
          <div>
            <p>بهترین منتور ها کنارتن تا آموزش های درست و اصولی ببینی</p>
          </div>
          <div>
            <div>
              <p>
                بعد از آموزش، ما توی ماصحبه آزمایشی برای مصاحبه های شغلیت آماده
                ات میکنیم
              </p>
            </div>
            <div>
              <img src="/List.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>بعدش نوبت دوره کارآموزیه که با چالش های واقعی روبرو بشی</p>
            </div>
            <div>
              <img src="/Filter.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>حالا نوبت استخدامه، نگران نباش کارت با ما</p>
            </div>
            <div>
              <img src="/Send.svg" />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="#">انتخاب مسیر</Link>
        </div>
      </div>
      <div className={styles.media}>
        <img src="/images/adventure.png" />
      </div>
    </div>
  );
};

export default SectionB;
