import Link from "next/link";
import styles from "./FromOurBlog.module.css";

const FromOurBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3>مطالبی از وبلاگ</h3>
        <Link href="#">مطالب بیشتر</Link>
      </div>
      <div className={styles.cards}></div>
    </div>
  );
};

export default FromOurBlog;
