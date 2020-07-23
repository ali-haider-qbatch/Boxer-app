import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
class Tools extends Component {
  render() {
    const { img, heading, para } = this.props.data;
    return (
      <React.Fragment>
        <Col lg={4} md={4} sm={6} xs={12}>
          <div className="business-tools">
            <div className="Tools">
              <div className="track-shipment">
                <Image className="Tools-img" src={"Assets/" + img} alt="" />
                <span className="Image-detail">{heading}</span>
              </div>
              <div className="paragraph ">
                <Typography className="pl-2">{para}</Typography>
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default Tools;
