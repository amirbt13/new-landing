import styles from "./SalesPage.module.css";
import Videos from "./videos/Videos";
import PathInfo from "./pathInfo/PathInfo";
import ForWho from "./forWho/ForWho";

const SalesPage = () => {
  return (
    <div className={styles.container}>
      <Videos />
      <PathInfo />
      <ForWho />
    </div>
  );
};

export default SalesPage;
