import { Button, Form } from "react-bootstrap";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/action";

const Create = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const email = useSelector((state) => state.email.email);
  const country = useSelector((state) => state.country.country);
  const handleSubmit = (event) => {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const userName = document.getElementById("username").value;
    if (password !== confirm || password === "") {
      return window.alert("email not confirmed or empty");
    } else if (userName === "") {
      return window.alert("Choose a Username");
    } else {
      const body = {
        email: email,
        country: country,
        password: password,
        username: userName,
        displayName: userName,
      };
      console.log(email);
      console.log(body);
      dispatch(register(body));

      navigation("/login");
    }
  };

  return (
    <>
      <div className="page_content">
        <div className="register_container">
          <Form onSubmit={handleSubmit}>
            <div className="create_account_form_title">Create your account</div>
            <Form.Group className="form_area">
              <Form.Label>Steam Account Name</Form.Label>
              <Form.Control type="text" id="username" />
            </Form.Group>
            <Form.Group className="form_area">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="password" />
            </Form.Group>
            <Form.Group className="form_area">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" id="confirmPassword" />
            </Form.Group>
            <Button type="submit" className="registerSubmit">
              Done
            </Button>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Create;
