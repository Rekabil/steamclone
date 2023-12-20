import StoreNav from "../HomePage/StoreNav";
import Footer from "../Footer/Footer";
import Game from "./Game";
import GameInfo from "./GameInfo";
import Review from "./Review";
const GamePage = () => {
  return (
    <>
      <StoreNav />
      <Game />
      <GameInfo />
      <Review />
      <Footer />
    </>
  );
};

export default GamePage;
