import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import { Typography } from "@material-ui/core";
class Reviews extends Component {
  render() {
    return (
      <React.Fragment>
        <Col lg={4} md={4} sm={6} xs={12}>
          <div className="reviews">
            <Image src="Assets/quote-icon.png" alt="" />
            <p className="reviews-paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of readable English.
            </p>
            <div className="client-info d-flex">
              <div className="Image-div">
                <Image src="Assets/TestimonialImage.png" alt="" />
              </div>
              <div className="Image-info">
                <Typography variant="subtitle1">Victor Simon</Typography>
                <Typography variant="caption">
                  Shop Owner,Free Suites
                </Typography>
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default Reviews;
