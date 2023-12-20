import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredGames } from "../../redux/action";
import blank from "../../asset/black-background-modern-dark-abstract-texture-vector.jpg";
const StoreTabs = () => {
  const [key, setKey] = useState("new");
  const dispatch = useDispatch();

  const games = useSelector((state) => state.filteredGames.content);
  const [params, setParams] = useState({
    orderBy: "releaseDate",
    year: "2023",
  });

  useEffect(() => {
    dispatch(fetchFilteredGames(params));
  }, []);

  return (
    <div className="store_tabs_container">
      <div className="store_tabs_content">
        <div className="store_tabs_left">
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="new" title="New & Trending">
              <div className="tab_seemore">
                See more: <a href="/new">New Releases</a>
              </div>
              <div>
                {games
                  ? games.content && games.content.lenght !== 0
                    ? games.content.map((game) => {
                        return (
                          <a href={"/game/" + game.id} key={game.id} className="game_tabs_list">
                            <div className="tab_item_cap">
                              <img src={game.preview !== null ? game.preview : blank} alt="game Preview" />
                            </div>
                            <div className="discount_prices">
                              <div className="price">{game.price !== 0 ? game.price + " $" : "Free To Play"}</div>
                            </div>
                            <div className="tab_item_content">
                              <div className="tab_item_title">{game.title}</div>
                              <div className="tab_item_details">
                                <span className="platform_img"></span>
                                <div className="tab_item_tags">{game.categories.toString()}</div>
                              </div>
                            </div>
                          </a>
                        );
                      })
                    : "No Item Found"
                  : "LOADING..."}
              </div>
            </Tab>
            <Tab eventKey="top" title="Top Sellers">
              <div className="tab_seemore">
                See more: <a href="/top">Global Top Sellers</a>
              </div>
              {games
                ? games.content && games.content.lenght !== 0
                  ? games.content.map((game) => {
                      return (
                        <a href={"/game/" + game.id} key={game.id} className="game_tabs_list">
                          <div className="tab_item_cap">
                            <img src={game.preview !== null ? game.preview[1] : blank} alt="game Preview" />
                          </div>
                          <div className="discount_prices">
                            <div className="price">{game.price !== 0 ? game.price + " $" : "Free To Play"}</div>
                          </div>
                          <div className="tab_item_content">
                            <div className="tab_item_title">{game.title}</div>
                            <div className="tab_item_details">
                              <span className="platform_img"></span>
                              <div className="tab_item_tags">{game.categories.toString()}</div>
                            </div>
                          </div>
                        </a>
                      );
                    })
                  : "No Item Found"
                : "LOADING..."}
            </Tab>
            <Tab eventKey="upcoming" title="Popular Upcoming">
              <div className="tab_seemore">
                See more: <a href="/upcoming">Upcoming Releases</a>
              </div>
              {games
                ? games.content && games.content.lenght !== 0
                  ? games.content.map((game) => {
                      return (
                        <a href={"/game/" + game.id} key={game.id} className="game_tabs_list">
                          <div className="tab_item_cap">
                            <img src={game.preview !== null ? game.preview[1] : blank} alt="game Preview" />
                          </div>
                          <div className="discount_prices">
                            <div className="price">{game.price !== 0 ? game.price + " $" : "Free To Play"}</div>
                          </div>
                          <div className="tab_item_content">
                            <div className="tab_item_title">{game.title}</div>
                            <div className="tab_item_details">
                              <span className="platform_img"></span>
                              <div className="tab_item_tags">{game.categories.toString()}</div>
                            </div>
                          </div>
                        </a>
                      );
                    })
                  : "No Item Found"
                : "LOADING..."}
            </Tab>
            <Tab eventKey="specials" title="Specials">
              <div className="tab_seemore">
                See more: <a href="/special">Specials</a>
              </div>
              {games
                ? games.content && games.content.lenght !== 0
                  ? games.content.map((game) => {
                      return (
                        <a href={"/game/" + game.id} key={game.id} className="game_tabs_list">
                          <div className="tab_item_cap">
                            <img src={game.preview !== null ? game.preview[1] : blank} alt="game Preview" />
                          </div>
                          <div className="discount_prices">
                            <div className="price">{game.price !== 0 ? game.price + " $" : "Free To Play"}</div>
                          </div>
                          <div className="tab_item_content">
                            <div className="tab_item_title">{game.title}</div>
                            <div className="tab_item_details">
                              <span className="platform_img"></span>
                              <div className="tab_item_tags">{game.categories.toString()}</div>
                            </div>
                          </div>
                        </a>
                      );
                    })
                  : "No Item Found"
                : "LOADING..."}
            </Tab>
          </Tabs>
        </div>
        <div className="store_tabs_right"></div>
      </div>
    </div>
  );
};

export default StoreTabs;
