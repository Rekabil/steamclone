import { Button, Form } from "react-bootstrap";
import Footer from "../Footer/Footer";

const Create = (props) => {
  return (
    <>
      <div className="page_content">
        <div className="register_container">
          <Form>
            <div className="create_account_form_title">Create your account</div>
            <Form.Group className="form_area">
              <Form.Label>Steam Account Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="form_area">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="form_area">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button type="submit">Done</Button>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Create;
