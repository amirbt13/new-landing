import styles from "./SectionC.module.css";
import Link from "next/link";

const SectionC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <img src="/images/welcome.png" alt="got-talent" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>
          <h3>خیلی چیزا عوض شده</h3>
        </div>
        <div className={styles.items}>
          <div>
            <div>
              <p>
                دیگه دوره رزومه ساختن و دنبال کار گشتن تموم شده. وقتتو تلف نکن !
              </p>
            </div>
            <div>
              <img src="/Candidate.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>
                وقتت رو صرف آموزش و ارتقا مهارت هات کن، ما کارتو برات پیدا
                میکنیم
              </p>
            </div>
            <div>
              <img src="/Star.svg" />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="#">شروع کنید</Link>
        </div>
      </div>
    </div>
  );
};

export default SectionC;
