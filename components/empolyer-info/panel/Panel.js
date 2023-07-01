import styles from "./Panel.module.css";

const Panel = () => {
  return (
    <div className={styles.container}>
      <h1>تیم خود را از طریق پنل کارفرما مقایسه کنید</h1>
      <section className={styles.top}>
        <div className={styles.media}>
          <img src="/images/panel1.JPEG" alt="employer panel" />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <h3>8 میلیون نامزد آماده استارتاپ</h3>
          </div>
          <div className={styles.items}>
            <div>
              <div>
                <h5>استعدادهای برتر فناوری</h5>
                <p>مهندسان، مدیران ارشد، طراحان، فروش و بازاریابی</p>
              </div>
              <div>
                <img src="/Candidate.svg" />
              </div>
            </div>
            <div>
              <div>
                <h5>تمرکز جهانی</h5>
                <p>نامزدهای محلی و از راه دور در ایالات متحده و خارج از کشور</p>
              </div>
              <div>
                <img src="/Global.svg" />
              </div>
            </div>
            <div>
              <div>
                <h5>آماده راه اندازی</h5>
                <p>
                  نامزدهای موجود در پلتفرم ما به طور خاص به استارتاپ ها علاقه
                  مند هستند
                </p>
              </div>
              <div>
                <img src="/Team.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h3>
              جزئیات منحصر به فرد نامزدی که در هیچ جای دیگری نمی توانید پیدا
              کنید
            </h3>
          </div>
          <div className={styles.items}>
            <div>
              <div>
                <img src="/Toggle.svg" alt="toggle" />
              </div>
              <div>
                <p>
                  وضعیت جستجوی شغل - ما به شما خواهیم گفت که آیا یک نامزد آماده
                  مصاحبه است یا برای پیشنهادات آماده است
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src="/List.svg" />
              </div>
              <div>
                <p>
                  مهارت‌ها و تجربه - ما به نامزدها این توانایی را می‌دهیم که این
                  را به روش‌های منحصربه‌فرد به نمایش بگذارند، مانند جزئیات
                  بزرگ‌ترین دستاوردشان
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src="/Time.svg" />
              </div>
              <div>
                <p>
                  مناطق زمانی - می توانید بر اساس مناطق زمانی فیلتر کنید و
                  ببینید که یک نامزد دقیقا چند ساعت جلوتر یا عقب است
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src="/Settings.svg" />
              </div>
              <div>
                <p>
                  تنظیمات از راه دور - جستجو بر اساس نامزدهایی که برای کار از
                  راه دور آماده هستند و ببینید که آنها به دنبال چه نوع فرهنگ از
                  راه دور هستند
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src="/Vetting.svg" />
              </div>
              <div>
                <p>
                  ارزیابی ها - ارزیابی های ویدئویی و مهندسی را ببینید تا به شما
                  در ارزیابی بیشتر مهارت ها کمک کند
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.media}>
          <img src="/images/panel2.png" alt="panel" />
        </div>
      </section>
    </div>
  );
};

export default Panel;
