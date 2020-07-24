import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
class Tools extends Component {
  render() {
    const { img, heading, para } = this.props.data;
    return (
      <React.Fragment>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Box className="business-tools" bgcolor="#fff">
            <Box className="Tools">
              <Box className="track-shipment">
                <Image className="Tools-img" src={"Assets/" + img} alt="" />
                <span className="Image-detail">{heading}</span>
              </Box>
              <Box className="paragraph ">
                <Typography className="pl-2">{para}</Typography>
              </Box>
            </Box>
          </Box>
        </Col>
      </React.Fragment>
    );
  }
}

export default Tools;
