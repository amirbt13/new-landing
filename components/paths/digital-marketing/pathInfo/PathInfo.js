import Link from "next/link";
import styles from "./PathInfo.module.css";

const PathInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h1>مسیر شغلی دیجیتال مارکتینگ</h1>
        </div>
        <div className={styles.items}>
          <div>
            <div>
              <p>۲۰ ساعت آموزش تجربه محور</p>
            </div>
            <div>
              <img src="/Time.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>۹ تمرین عملی و تجربه محور</p>
            </div>
            <div>
              <img src="/List.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>مصاحبه شبیه سازی شده</p>
            </div>
            <div>
              <img src="/Vetting.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>۲ ماه دوره کارآموزی</p>
            </div>
            <div>
              <img src="/Team.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>پشتیبانی ویژه از ابتدا تا انتهای مسیر</p>
            </div>
            <div>
              <img src="/Connect.svg" />
            </div>
          </div>
          <div>
            <div>
              <p>استخدام در شرکت های معتبر</p>
            </div>
            <div>
              <img src="/Candidate.svg" />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="#">شروع مسیر</Link>
        </div>
      </div>
      <div className={styles.media}>
        <img src="/images/onlineLearning.png" alt="got-talent" />
      </div>
    </div>
  );
};

export default PathInfo;
