import { Button, Form } from "react-bootstrap";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { REGISTER_COUNTRY, REGISTER_EMAIL, getCountries } from "../redux/action";
import { useNavigate } from "react-router";

const Register = () => {
  const countries = useSelector((state) => state.countries.content);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const confirm = document.getElementById("confirmEmail").value;
    const country = document.getElementById("countrySelect").value;
    if (email !== confirm || email === "") {
      return window.alert("email not confirmed");
    } else if (country === "") {
      return window.alert("choose a country");
    } else {
      dispatch({ type: REGISTER_EMAIL, payload: email });
      dispatch({ type: REGISTER_COUNTRY, payload: country });
      navigation("/register/create");
    }
  };

  return (
    <>
      <div className="page_content">
        <div className="register_container">
          <div className="create_account_form">
            <Form onSubmit={handleSubmit}>
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
                  <option value={""}>Choose a Country</option>

                  {countries ? (
                    countries.lenght !== 0 ? (
                      countries.map((country) => {
                        return (
                          <option key={country.id} value={country.name}>
                            {country.name}
                          </option>
                        );
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
              <Button type="submit" className="registerSubmit">
                Continue
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
