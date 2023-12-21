import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, postReviews } from "../../redux/action";
import { useEffect } from "react";

const Review = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game.content);
  const reviews = useSelector((state) => state.reviews.content);
  const handleSubmit = (event) => {
    const radios = document.querySelector("input[name='group1']:checked").value;
    const title = document.getElementById("reviewTitle").value;
    const content = document.getElementById("reviewContent").value;
    const body = {
      title: title,
      content: content,
      gameId: game.id,
      rating: radios,
    };

    dispatch(postReviews(body));
  };

  useEffect(() => {
    const query = {
      gameId: game.id,
      page: "",
    };

    dispatch(fetchReviews(query));
  }, [game]);

  return (
    <div className="page_content">
      <Form className="review_create" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Review Title</Form.Label>
          <Form.Control type="text" placeholder="Title" className="text_input" id="reviewTitle" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content </Form.Label>
          <Form.Control type="text" placeholder="Context" className="text_input" id="reviewContent" />
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
          {reviews
            ? reviews.content && reviews.content.lenght !== 0
              ? reviews.content.map((review) => {
                  return (
                    <div className="review_box" key={review.id}>
                      <div className="leftcol">
                        <div className="account_name">
                          <a>{review.user.displayName}</a>
                        </div>
                      </div>
                      <div className="rightcol">
                        <div className="ratingReview">
                          Rating: {review.rating}/10; {review.title}
                        </div>

                        <div>{review.content}</div>
                      </div>
                    </div>
                  );
                })
              : "There are no Reviews"
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Review;
