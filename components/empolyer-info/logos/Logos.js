import styles from "./Logos.module.css";

const Logos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>شما در شرکت خوبی هستید</h2>
        <h5>
          موفق ترین استارت آپ های جهان اولین استخدام های خود را در پلتفرم ما
          انجام دادند
        </h5>
      </div>
      <div className={styles.media}>
        <img src="/images/Frame_31.png" alt="logo" />
        <img src="/images/Frame_32.png" alt="logo" />
        <img src="/images/Frame_33.png" alt="logo" />
        <img src="/images/Frame_34.png" alt="logo" />
        <img src="/images/Frame_35.png" alt="logo" />
        <img src="/images/Frame_36.png" alt="logo" />
        <img src="/images/Frame_37.png" alt="logo" />
        <img src="/images/Frame_38.png" alt="logo" />
      </div>
    </div>
  );
};

export default Logos;
