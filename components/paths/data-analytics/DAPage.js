import styles from "./DAPage.module.css";
import ForWho from "./forWho/ForWho";
import PathInfo from "./pathInfo/PathInfo";
import Videos from "./videos/Videos";

const DAPage = () => {
  return (
    <div className={styles.container}>
      {/* <Videos /> */}
      <PathInfo />
      <ForWho />
    </div>
  );
};

export default DAPage;
