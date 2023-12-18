import { Button, Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../asset/logo_steam.svg";
import defaultAvatar from "../../asset/defaultAvatar.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../../redux/action";

const MyNavbar = () => {
  const token = sessionStorage.getItem("token");
  const myProfile = useSelector((state) => state.myProfile.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  return (
    <Container fluid className="navbarContainer">
      <Navbar variant="dark" className="d-block">
        <Navbar.Brand>
          <img alt="logo" src={logo} height="44" width="176" />
        </Navbar.Brand>
        <Nav>
          <NavDropdown title="STORE">
            <NavDropdown.Item>Home</NavDropdown.Item>
            <NavDropdown.Item>Discovery Queue</NavDropdown.Item>
            <NavDropdown.Item>Wishlist</NavDropdown.Item>
            <NavDropdown.Item>Point Shop</NavDropdown.Item>
            <NavDropdown.Item>News</NavDropdown.Item>
            <NavDropdown.Item>Stats</NavDropdown.Item>
            <NavDropdown.Item>About</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="COMmUNITY">
            <NavDropdown.Item>Home</NavDropdown.Item>
            <NavDropdown.Item>Discoutions</NavDropdown.Item>
            <NavDropdown.Item>Workshop</NavDropdown.Item>
            <NavDropdown.Item>Market</NavDropdown.Item>
            <NavDropdown.Item>Broudcast</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="USER">
            <NavDropdown.Item>Activity</NavDropdown.Item>
            <NavDropdown.Item>Profile</NavDropdown.Item>
            <NavDropdown.Item>Friends</NavDropdown.Item>
            <NavDropdown.Item>Games</NavDropdown.Item>
            <NavDropdown.Item>Groups</NavDropdown.Item>
            <NavDropdown.Item>Content</NavDropdown.Item>
            <NavDropdown.Item>Badges</NavDropdown.Item>
            <NavDropdown.Item>Inventory</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link>CHAT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>SUPPORT</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="global_actions">
          <div className="global_action_menu">
            <Button variant="dark" className="installsteam_btn">
              Install Steam
            </Button>
            <div className="notificationArea">
              <Button variant="dark" className="notificationButton">
                <i className="bi bi-bell-fill"></i>
              </Button>
            </div>
            {myProfile === null ? (
              <a href="/login" className="login">
                login
              </a>
            ) : (
              <Dropdown>
                <Dropdown.Toggle variant="none" className="account">
                  {myProfile.displayName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Viev my profile</Dropdown.Item>
                  <Dropdown.Item>Account details: {myProfile.displayName}</Dropdown.Item>
                  <Dropdown.Item>Store preference</Dropdown.Item>
                  <Dropdown.Item>Change language</Dropdown.Item>
                  <Dropdown.Item>Sign out of account...</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
          <img alt="playerAvatar" className="playerAvatar" src={defaultAvatar} />
        </div>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
