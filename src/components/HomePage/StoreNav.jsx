import { Button, Col, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const StoreNav = () => {
  const navigation = useNavigate();
  return (
    <div className="store_header">
      <div>
        <div className="content">
          <div className="storeControls d-flex">
            <div className="shopWishlist">Wishlist</div>
            <div className="shopCart d-none">Cart</div>
          </div>
          <div className="store_nav">
            <Dropdown>
              <Dropdown.Toggle className="store_nav_item" variant="store">
                Your Store
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigation("/")}>Home</Dropdown.Item>
                <Dropdown.Item>Followed Games & Software</Dropdown.Item>
                <Dropdown.Item>Prefecences</Dropdown.Item>
                <Dropdown.Item className="mt-1" disabled>
                  Recommendation
                </Dropdown.Item>
                <Dropdown.Item>Discovery Queue</Dropdown.Item>
                <Dropdown.Item>New Releases</Dropdown.Item>
                <Dropdown.Item>Comunity Reccomendation</Dropdown.Item>
                <Dropdown.Item>Interactive Reccomender</Dropdown.Item>
                <Dropdown.Item>Popular Amoung Friends</Dropdown.Item>
                <Dropdown.Item>Steam Curator</Dropdown.Item>
                <Dropdown.Item>DLC For You</Dropdown.Item>
                <Dropdown.Item disabled className="mt-1">
                  Because We Love You
                </Dropdown.Item>
                <Dropdown.Item>More Tags For You...</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="none" className="store_nav_item">
                New & Noteworthy
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Row className="store_tab">
                  <Col xs={6}>
                    <Dropdown.Item disabled>POPULAR</Dropdown.Item>
                    <Dropdown.Item>Top Seller</Dropdown.Item>
                    <Dropdown.Item>Most Played </Dropdown.Item>
                    <Dropdown.Divider className="mt-1" />
                    <Dropdown.Item className="mt-1">New Release</Dropdown.Item>
                    <Dropdown.Item>Upcoming Releases</Dropdown.Item>
                  </Col>
                  <Col xs={6}>
                    <Dropdown.Item disabled>NEWS & UPDATES</Dropdown.Item>
                    <Dropdown.Item>Recently Updated</Dropdown.Item>
                    <Dropdown.Item disabled className="mt-1">
                      PROMOS & EVENTS
                    </Dropdown.Item>
                    <Dropdown.Item>Special Offers</Dropdown.Item>
                    <Dropdown.Item>Sale Events</Dropdown.Item>
                    <Dropdown.Divider className="mt-1" />
                    <Dropdown.Item className="mt-1">Steam Replay 2022</Dropdown.Item>
                    <Dropdown.Item>Steam Next Fest</Dropdown.Item>
                  </Col>
                </Row>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="store_nav_item" variant="none">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Row className="store_tab2">
                  <Col xs={2}>
                    <Dropdown.Item disabled>SPECIAL SECTIONS</Dropdown.Item>
                    <Dropdown.Item>Free To Play</Dropdown.Item>
                    <Dropdown.Item>Demos</Dropdown.Item>
                    <Dropdown.Item>Early Access</Dropdown.Item>
                    <Dropdown.Divider className="mt-1" />
                    <Dropdown.Item className="mt-1">Steam Deck</Dropdown.Item>
                    <Dropdown.Item>Great On Deck</Dropdown.Item>
                    <Dropdown.Divider className="mt-1" />
                    <Dropdown.Item className="mt-1">Controller-Friendly</Dropdown.Item>
                    <Dropdown.Item>Remote Play</Dropdown.Item>
                    <Dropdown.Divider className="mt-1" />
                    <Dropdown.Item className="mt-1">VR Titles</Dropdown.Item>
                    <Dropdown.Item>VR Hardware</Dropdown.Item>
                    <Dropdown.Divider className="mt-1" />
                    <Dropdown.Item className="mt-1">Software</Dropdown.Item>
                    <Dropdown.Item>Soundtracks</Dropdown.Item>
                    <Dropdown.Divider className="mt-1" />
                    <Dropdown.Item className="mt-1">macOS</Dropdown.Item>
                    <Dropdown.Item>SteamOS + Linux</Dropdown.Item>
                    <Dropdown.Item>For PC Cafes</Dropdown.Item>
                  </Col>
                  <Col xs={8}>
                    <Row>
                      <Dropdown.Item disabled>GENRES</Dropdown.Item>
                      <Col xs={4}>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Arcade & Rhythm</Dropdown.Item>
                        <Dropdown.Item>Fighter & Martial Arts</Dropdown.Item>
                        <Dropdown.Item>First-Person Shooter</Dropdown.Item>
                        <Dropdown.Item>Hack & Slash</Dropdown.Item>
                        <Dropdown.Item>Platformer & Runner</Dropdown.Item>
                        <Dropdown.Item>Third-Person Shooter</Dropdown.Item>
                        <Dropdown.Item>shmup</Dropdown.Item>
                      </Col>
                      <Col xs={4}>
                        <Dropdown.Item>Role-Playing</Dropdown.Item>
                        <Dropdown.Item>Action RPG</Dropdown.Item>
                        <Dropdown.Item>Adventure RPG</Dropdown.Item>
                        <Dropdown.Item>JRPG</Dropdown.Item>
                        <Dropdown.Item>Party-Based</Dropdown.Item>
                        <Dropdown.Item>Rouge-Like</Dropdown.Item>
                        <Dropdown.Item>Strategy RPG</Dropdown.Item>
                        <Dropdown.Item>Turn-Based</Dropdown.Item>
                      </Col>
                      <Col xs={4}>
                        <Dropdown.Item>Strategy</Dropdown.Item>
                        <Dropdown.Item>Card & Board</Dropdown.Item>
                        <Dropdown.Item>City & Settlement</Dropdown.Item>
                        <Dropdown.Item>Grand & 4X</Dropdown.Item>
                        <Dropdown.Item>Military</Dropdown.Item>
                        <Dropdown.Item>Real-Time Strategy</Dropdown.Item>
                        <Dropdown.Item>Tower Defence</Dropdown.Item>
                        <Dropdown.Item>Turn-Based Strategy</Dropdown.Item>
                      </Col>
                      <Col xs={4} className="mt-2">
                        <Dropdown.Item>Adventure</Dropdown.Item>
                        <Dropdown.Item>Adventure RPG</Dropdown.Item>
                        <Dropdown.Item>Casual</Dropdown.Item>
                        <Dropdown.Item>Hidden Object</Dropdown.Item>
                        <Dropdown.Item>Metroidvania</Dropdown.Item>
                        <Dropdown.Item>Puzzle</Dropdown.Item>
                        <Dropdown.Item>Story-Rich</Dropdown.Item>
                        <Dropdown.Item>Visual Novel</Dropdown.Item>
                      </Col>
                      <Col xs={4} className="mt-2">
                        <Dropdown.Item>Simulation</Dropdown.Item>
                        <Dropdown.Item>Building & Automation</Dropdown.Item>
                        <Dropdown.Item>Dating</Dropdown.Item>
                        <Dropdown.Item>Farming & Crafting</Dropdown.Item>
                        <Dropdown.Item>Hobby & Job</Dropdown.Item>
                        <Dropdown.Item>Life & Immersive</Dropdown.Item>
                        <Dropdown.Item>Sandbox & Physics</Dropdown.Item>
                        <Dropdown.Item>Space & Flight</Dropdown.Item>
                      </Col>
                      <Col xs={4} className="mt-2">
                        <Dropdown.Item>Spots & Racing</Dropdown.Item>
                        <Dropdown.Item>All Sports</Dropdown.Item>
                        <Dropdown.Item>Fishing & Hunting</Dropdown.Item>
                        <Dropdown.Item>Individual Sports</Dropdown.Item>
                        <Dropdown.Item>Racing</Dropdown.Item>
                        <Dropdown.Item>Racing Sim</Dropdown.Item>
                        <Dropdown.Item>Sports Sim</Dropdown.Item>
                        <Dropdown.Item>Team Sports</Dropdown.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2}>
                    <Dropdown.Item disabled>THEMES</Dropdown.Item>
                    <Dropdown.Item>Anime</Dropdown.Item>
                    <Dropdown.Item>Horror</Dropdown.Item>
                    <Dropdown.Item>Mystery & Detective</Dropdown.Item>
                    <Dropdown.Item>Open World</Dropdown.Item>
                    <Dropdown.Item>Sci-Fi & Cyberpunk</Dropdown.Item>
                    <Dropdown.Item>Space</Dropdown.Item>
                    <Dropdown.Item>Survival</Dropdown.Item>
                    <Dropdown.Item disabled className="mt-2">
                      PLAYER SUPPORT
                    </Dropdown.Item>
                    <Dropdown.Item>Co-Operative</Dropdown.Item>
                    <Dropdown.Item>LAN</Dropdown.Item>
                    <Dropdown.Item>Local & Party</Dropdown.Item>
                    <Dropdown.Item>MMO</Dropdown.Item>
                    <Dropdown.Item>Multiplayer</Dropdown.Item>
                    <Dropdown.Item>Online Competitive</Dropdown.Item>
                    <Dropdown.Item>Singleplayer</Dropdown.Item>
                  </Col>
                </Row>
              </Dropdown.Menu>
            </Dropdown>
            <div className="store_nav_item">Points Shop</div>
            <div className="store_nav_item">News</div>
            <div className="store_nav_item">Labs</div>
            <div className="search_spacer"></div>
            <div className="search_area">
              <Form>
                <Form.Group className="searchbox">
                  <Form.Control className="search_input" type="search" placeholder="search" />
                  <button className="search_button">
                    <img src="https://store.akamai.steamstatic.com/public/images/blank.gif" alt="" />
                  </button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreNav;
