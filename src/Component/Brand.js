import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
class Brand extends Component {
  render() {
    const { img } = this.props.img;
    return (
      <React.Fragment>
        <Col lg={2} md={3} sm={4} xs={6} align="center">
          <div className="logs">
            <Image className="logo-img" src={"Assets/" + img} alt="" />
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default Brand;
