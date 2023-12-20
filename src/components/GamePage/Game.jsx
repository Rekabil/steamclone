import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSigleGames } from "../../redux/action";
import blank from "../../asset/black-background-modern-dark-abstract-texture-vector.jpg";

const Game = () => {
  const gameId = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game.content);
  useEffect(() => {
    dispatch(fetchSigleGames(gameId));

    console.log(gameId);
  }, [gameId]);

  return (
    <div className="page_content">
      {game ? (
        <>
          <div className="page_title">
            <div className="othersite_info">
              <a>
                <span>Community Hub</span>
              </a>
            </div>
            <div className="game_page_title">{game.title}</div>
          </div>
          <div className="game_background">
            <div className="game_highlight">
              <div className="game_img">
                <img src={game.preview !== null ? game.preview : blank} alt="blank" />
              </div>
              <div className="game_description">{game.description}</div>
              <div>
                <div className="user_reviews">
                  <div className="summery_row">
                    <div className="subtitle">All Reviews: </div>
                    <div className="summery"></div>
                  </div>
                </div>
                <div className="release_date">
                  <div className="subtitle">Release Date: </div>
                  <div className="date">{game.releaseDate}</div>
                </div>
                <div className="dev_row">
                  <div className="subtitle">Developer:</div>
                  <div className="summery">
                    <a>{game.developer}</a>
                  </div>
                </div>
                <div className="dev_row">
                  <div className="subtitle">Publisher:</div>
                  <div className="summery">
                    <a>{game.publisher}</a>
                  </div>
                </div>
              </div>
              <div className="popular_tags_container">
                <div className="popular_tags_label">Popular user-defined tags for this product:</div>
                <div className="popular_tags">
                  {game
                    ? game.categories && game.categories.lenght !== 0
                      ? game.categories.map((tag) => {
                          return <a className="tag"> {tag} </a>;
                        })
                      : "content missing."
                    : "loading.."}
                </div>
              </div>
            </div>
            <div className="highlight_container">
              <div className="highlight_player">
                <img src={game.preview !== null ? game.preview : blank} alt="blank" className=" w-100" />
              </div>
              <div className="highlight_strip"></div>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Game;
