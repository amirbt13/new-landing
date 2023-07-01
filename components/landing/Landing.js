import styles from "./Landing.module.css";
import Banner from "./banner/Banner";
import Companies from "./companies/Companies";
import Footer from "../Layout/footer/Footer";
import FromOurBlog from "./from-blog/FromOurBlog";
import FOU from "./from-our-users/FOU";
import GotTalent from "./got-talent/GotTalent";
import Header from "../Layout/header/Header";
import NeedTalent from "./need-talent/NeedTalent";

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Banner />
      <Companies />
      <GotTalent />
      <NeedTalent />
      <FOU />
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
