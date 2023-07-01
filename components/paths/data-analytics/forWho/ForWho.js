import Link from "next/link";
import styles from "./ForWho.module.css";

const ForWho = () => {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <img src="/greenTick.png" alt="success" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>
          <h3>این دوره مناسب چه کسانی است؟</h3>
        </div>
        <div className={styles.items}>
          <div>
            <div>
              <p>
                کسانی که به تحلیل داده علاقه دارند و به دنبال کسب مهارت و تخصص
                هستند.
              </p>
            </div>
            <div>
              <img src="/happy-man.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>
                کسانی که تجربه کاری در این حوزه را ندارند یا به دنبال تغییر حوزه
                کاری هستند.
              </p>
            </div>
            <div>
              <img src="/thinking-man.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>کسانی که جدیت و پشتکار کافی برای یادگیری دارند</p>
            </div>
            <div>
              <img src="/running-man.svg" />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="#">ثبت نام</Link>
        </div>
      </div>
    </div>
  );
};

export default ForWho;
