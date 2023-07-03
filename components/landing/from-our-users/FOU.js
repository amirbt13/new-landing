import styles from "./FOU.module.css";

const FOU = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topTitle}>
        <h5>فقط از زبان ما نشنوید</h5>
      </div>
      <div className={styles.title}>
        <h3>از زبان کاربران</h3>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <div>
              <img src="/images/nadia.PNG" alt="commentor" />
              <p>نادیا بهنیا</p>
            </div>
            <h6>،،</h6>

            <p>
              کلاسور شرایطی رو ایجاد میکنه که علاوه بر اهمیت یادگیری مطالب به
              مهارت افزایی کارجوها هم اهمیت میده که این واقعا قابل تشکر و
              قدردانی است.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div>
              <img src="/images/jalili.jpg" alt="commentor" />
              <p>هادی جلیلی</p>
            </div>
            <h6>،،</h6>

            <p>
              مسیرشغلی کلاسور پکیج کاملی از یادگیری و کسب تجربه هستش؛ و مدت‌ها
              بود دنبال این‌چنین فرصتی بودم تا در زمینه موردعلاقه‌ام بتونم به
              صورت حرفه‌ای شاغل بشم.
            </p>
            <h5>فروش و بازاریابی</h5>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div>
              <img src="/images/jafari.jpg" alt="commentor" />
              <p>امیرحسین جعفری</p>
            </div>
            <h6>،،</h6>

            <p>
              بواسطه کلاسور تونستم در زمینه فروش و بازاریابی آموزش تخصصی ببینم و
              خیلی سریع وارد بازار کار بشم. از کلاسور بابت این فرصت فراهم‌شده
              نهایت تشکر و دارم.
            </p>
            <h5>فروش و بازاریابی</h5>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img src="/images/valibeigi.jpg" />
            <p>رضا ولی بیگی</p>
          </div>
          <div>
            <h6>،،</h6>

            <p>
              با حضور درمسیر شغلی تحلیل داده تونستم فضای این تخصص رو به خوبی
              یادبگیرم، و از اینکه مطمئن از استخدام این مسیر رو شروع کردم خیلی
              راضی‌ام.
            </p>
            <h5>تحلیل داده</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOU;
