import Companies from "../landing/companies/Companies";
import styles from "./UInfoPage.module.css";
import Banner from "./banner/Banner";
import FOU from "./from-our-users/FOU";
import SectionA from "./sectionA/SectionA";
import SectionB from "./sectionB/SectionB";
import SectionC from "./sectionC/SectionC";

const UInfoPage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <SectionC />
      <SectionB />
      <SectionA />
      <Companies />
      <FOU />
    </div>
  );
};

export default UInfoPage;
