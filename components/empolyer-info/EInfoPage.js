import Companies from "../landing/companies/Companies";
import styles from "./EInfo.module.css";
import Banner from "./banner/Banner";
import Logos from "./logos/Logos";
import Panel from "./panel/Panel";

const EInfoPage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Logos />
      <Panel />
      <Companies />
    </div>
  );
};

export default EInfoPage;
