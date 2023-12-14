import { Button, Form } from "react-bootstrap";
import { login } from "../../redux/action";
import QR from "../../asset/qr_code_barcode.jpg";
import Footer from "../Footer/Footer";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login_page">
        <div>
          <div className="login_main">
            <div className="newLogin">
              <div className="newLogDialog">
                <div className="signin_Container">
                  <div className="login_primaryHeader">Sigh in</div>
                </div>
                <div className="form_login">
                  <Form className="login_form">
                    <Form.Group>
                      <Form.Label className="login_label">SIGN IN WITH ACCOUNT NAME</Form.Label>
                      <Form.Control className="text_input" type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="passwordInput">PASSWORD</Form.Label>
                      <Form.Control type="password" className="text_input" />
                    </Form.Group>
                    <Form.Check className="logincheckbox" type="checkbox" label="&nbsp;   Remember me" />
                    <div className="d-flex align-items-center justify-content-center">
                      <Button className="login_Submit">Sign in</Button>
                    </div>
                    <div>&nbsp;</div>
                    <div className="text-center">
                      <a href="/help" className="login_textline">
                        Help, i can't sign in
                      </a>
                    </div>
                  </Form>
                  <div className="QRloginsection">
                    <div className="QRcontainer">
                      <div className="login_label">OR SIGN IN WITH QR</div>
                      <div className="QRcode">
                        <img src={QR} alt="QR" className="QR" />

                        <div className="login_text">
                          Use the <a className="login_textline">Steam Mobile App</a> to sign in via QR code
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login_bottom">
          <div className="login_bottom_item login_btn">
            <div className="headline">New To Steam?</div>
            <a href="/register" className="create_btn">
              Create an account
            </a>
          </div>
          <div className="login_bottom_item">
            <div className="subtext">
              It's free and easy. Discover thousands of games to play with millions of new friends.
              <br />
              <a href="/about" className="join_desc">
                Learn more about Steam
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
