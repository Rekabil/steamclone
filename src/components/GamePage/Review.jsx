import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const Review = () => {
  const myProfile = useSelector((state) => state.myProfile.content);
  const game = useSelector((state) => state.game.content);

  const radios = document.getElementsByName("group1");
  return (
    <div className="page_content">
      <Form className="review_create">
        <Form.Group>
          <Form.Label>Review Title</Form.Label>
          <Form.Control type="text" placeholder="Title" className="text_input" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content </Form.Label>
          <Form.Control type="text" placeholder="Context" className="text_input" />
        </Form.Group>
        <Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <div className="d-flex">
              <Form.Check inline label=" 1 " name="group1" type="radio" id="inline-radio-1" value="1" />
              <Form.Check inline label=" 2 " name="group1" type="radio" id="inline-radio-2" value="2" />
              <Form.Check inline label=" 3 " name="group1" type="radio" id="inline-radio-3" value="3" />
              <Form.Check inline label=" 4 " name="group1" type="radio" id="inline-radio-4" value="4" />
              <Form.Check inline label=" 5 " name="group1" type="radio" id="inline-radio-5" value="5" />
              <Form.Check inline label=" 6 " name="group1" type="radio" id="inline-radio-6" value="6" />
              <Form.Check inline label=" 7 " name="group1" type="radio" id="inline-radio-7" value="7" />
              <Form.Check inline label=" 8 " name="group1" type="radio" id="inline-radio-8" value="8" />
              <Form.Check inline label=" 9 " name="group1" type="radio" id="inline-radio-9" value="9" />
              <Form.Check inline label=" 10 " name="group1" type="radio" id="inline-radio-10" value="10" />
            </div>
          </Form.Group>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <div className="review_summery">
        <div className="leftcol">
          <div className="user_reviews_header">
            Most Helpful Reviews
            <span> Overall</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
