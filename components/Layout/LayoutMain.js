import Footer from "./footer/Footer";
import Header from "./header/Header";

const LayoutMain = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutMain;
