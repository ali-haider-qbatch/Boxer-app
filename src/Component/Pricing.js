import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { Typography } from "@material-ui/core";
class Pricing extends Component {
  render() {
    const { UserHeading, h1Heading, userLimit } = this.props.price;
    return (
      <React.Fragment>
        <Col lg={4} md={4} sm={6} xs={12}>
          <div className="inner-pricing-div">
            <div align="center" className="user-div">
              <h3 className="User-heading">{UserHeading}</h3>
            </div>
            <div className="pricing-detail">
              <Typography variant="h5" align="center" className="h1-heading">
                {h1Heading}
              </Typography>
              <h5 align="center" className="user-limit">
                {userLimit}
              </h5>
              <div align="center" className="place-order-button  pb-4">
                <Button className="btn button">Get Started</Button>
              </div>
              <div className="order-list">
                <ul className="list-unstyled pb-4">
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    FNSKU Label printing
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Expiration label
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    ll FBA label
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Amazon compliant barcodes
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Barcodes scanner input
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Unlimited shipment
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Shipment Tracking
                  </li>
                  <li className="check-li">
                    <FaCheck className="check-icon" />
                    Box labeling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default Pricing;
