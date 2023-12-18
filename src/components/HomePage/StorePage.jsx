import StoreNav from "./StoreNav";
import StoreReccomended from "./StoreReccomended";
import StoreTabs from "./StoreTabs";
import Footer from "../Footer/Footer";

const StorePage = () => {
  return (
    <>
      <StoreNav />
      <StoreReccomended />
      <StoreTabs />
      <Footer />
    </>
  );
};

export default StorePage;
