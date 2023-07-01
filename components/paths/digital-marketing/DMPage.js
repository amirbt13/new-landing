import styles from "./DMPage.module.css";
import ForWho from "./forWho/ForWho";
import PathInfo from "./pathInfo/PathInfo";
import Videos from "./videos/Videos";

const DMPage = () => {
  return (
    <div className={styles.container}>
      <Videos />
      <PathInfo />
      <ForWho />
    </div>
  );
};

export default DMPage;
