import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../redux/action";
import blank from "../../asset/black-background-modern-dark-abstract-texture-vector.jpg";

const StoreReccomended = () => {
  const dispatch = useDispatch();
  const [firstLoad, setFirstLoad] = useState(true);
  const gamesFetched = useSelector((state) => state.games.content);
  useEffect(() => {
    if (firstLoad === true) {
      dispatch(fetchGames());
      setFirstLoad(false);
    }
  }, []);

  return (
    <div className="home_cluster">
      <div className="home_page_content">
        <h2 className="home_page_content_title">Featured & Recommended</h2>
        <Carousel slide={false}>
          {gamesFetched ? (
            gamesFetched.content && gamesFetched.content.lenght !== 0 ? (
              gamesFetched.content.map((game) => (
                <Carousel.Item>
                  <img src={blank} alt="preview" />
                  <Carousel.Caption>
                    <h3>{game.title}</h3>
                    <p>
                      {game.description} {game.price === 0 ? "FREE To Play" : game.price + "$"}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            ) : (
              <p>Error</p>
            )
          ) : (
            <>Loading..</>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default StoreReccomended;
