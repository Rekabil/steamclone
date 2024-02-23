import { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/action";
import blank from "../asset/black-background-modern-dark-abstract-texture-vector.jpg";

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
                  <Row>
                    <Col>
                      <img src={game.preview !== null ? game.preview[0] : blank} alt="preview" />
                    </Col>
                    <Col className="ms-1 d-flex flex-column justify-content-evenly align-items-stretch">
                      <Row className="carousel_details">
                        <h3>{game.title}</h3>
                      </Row>
                      <Row>
                        <Col>
                          <img
                            className="preview_img"
                            src={game.preview !== null ? game.preview[1] : blank}
                            alt="preview"
                          />
                        </Col>
                        <Col>
                          {" "}
                          <img
                            className="preview_img"
                            src={game.preview !== null ? game.preview[2] : blank}
                            alt="preview"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <img
                            className="preview_img"
                            src={game.preview !== null ? game.preview[3] : blank}
                            alt="preview"
                          />
                        </Col>
                        <Col>
                          <img
                            className="preview_img"
                            src={game.preview !== null ? game.preview[4] : blank}
                            alt="preview"
                          />
                        </Col>
                      </Row>
                      <Row className="carousel_details">
                        <p>
                          {game.description} {game.price === 0 ? "FREE To Play" : game.price + "$"}
                        </p>
                      </Row>
                    </Col>
                  </Row>
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
