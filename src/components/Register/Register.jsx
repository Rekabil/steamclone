import { Button, Form } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../redux/action";

const Register = () => {
  const countries = useSelector((state) => state.countries.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const confirm = document.getElementById("confirmEmail").value;
    const country = document.getElementById("confirmEmail").value;
    if (email !== confirm) {
      return window.alert("email not confirmed");
    } else if (country === null) {
      return window.alert("choose a country");
    } else {
    }
  };

  return (
    <>
      <div className="page_content">
        <div className="register_container">
          <div className="create_account_form">
            <Form onSubmit={handleSubmit()}>
              <div className="create_account_form_title">Create your account</div>
              <Form.Group className="form_area">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" id="email" />
              </Form.Group>
              <Form.Group className="form_area">
                <Form.Label>Confirm your Address</Form.Label>
                <Form.Control type="email" id="confirmEmail" />
              </Form.Group>
              <Form.Group className="form_area">
                <Form.Label>Country of Residence</Form.Label>
                <Form.Select id="countrySelect">
                  <option>Choose a Country</option>

                  {countries ? (
                    countries.lenght !== 0 ? (
                      countries.map((country) => {
                        return <option value={country.name}>{country.name}</option>;
                      })
                    ) : (
                      <>Vuoto</>
                    )
                  ) : (
                    <>Loading...</>
                  )}
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="&nbsp;	I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve Privacy Policy."
                />
              </Form.Group>
              <Button type="submit">Continue</Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
