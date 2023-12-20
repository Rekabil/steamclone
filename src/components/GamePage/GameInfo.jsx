import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const GameInfo = () => {
  const game = useSelector((state) => state.game.content);

  return game ? (
    <div className="page_content">
      <div className="rightcol">
        <div className="game_details">
          <div className="manufacturer_details">
            <b>Title: </b>
            {game.title}
            <br />
            <b>Genre: </b>{" "}
            <span>
              {game.categories && game.categories.lenght !== 0
                ? game.categories.map((category) => {
                    return <a key={category}>{category},</a>;
                  })
                : "Loading..."}
            </span>
            <div className="dev_row">
              <b>Developer: </b>
              <a>{game.developer}</a>
            </div>
            <div className="dev_row">
              <b>Publisher: </b>
              <a>{game.publisher}</a>
            </div>
            <b>Release Date:</b>
            {game.releaseDate}
          </div>
          <div className="details_block"></div>
        </div>
      </div>
      <div className="leftcol">
        <div className="game_purchase">
          <div className="game_purchase_wrapper">
            <div className="game_purchase_game">
              <h1>Buy {game.title}</h1>
              <div className="game_purchase_action">
                <div className="game_purchase_action_bg">
                  <div className="price game_price">{game.price}$</div>
                  <Button variant="addToCart">
                    <span>Add To Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="game_page_container">
          <div className="game_area_description">
            <h2>About This Game</h2>
            {game.description}
          </div>
        </div>
      </div>
    </div>
  ) : (
    "Loading.."
  );
};

export default GameInfo;
