import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Col, Container, Row, Image } from "react-bootstrap";
import Link from "@material-ui/core/Link";
import Box from '@material-ui/core/Box';
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Box className="footer spacing">
          <Container className="container">
            <Row className="m-0 mt-4">
              <Col lg={4} md={4} sm={6} xs={12}>
                <Link className="logo">
                  <Image
                    className="footer-logo"
                    src="Assets/WebLogoBlue.png"
                    alt=""
                  />
                </Link>
                <Typography className="footer-paragraph">
                  FBA-compliant labels are the easiest way to provide box
                  contents information for your inbound Amazon FBA shipments.
                  Easily create box content barcodes and validate packed items
                  to shipment plan.
                </Typography>
              </Col>
              <Col lg={4} md={4} sm={6} xs={12}>
                <Box className="inner-list">
                  <Typography variant="h6">Contact Info</Typography>
                  <Typography className="footer-paragraph">
                    1450 Hughes Rd. Suite 200, Grapevana, Texas 76051
                    1.888.786.1512 info@boxer.com
                  </Typography>
                </Box>
              </Col>
              <Col lg={2} md={4} sm={6} xs={12}>
                <Box className="inner-list">
                  <h4 className="footer-heading">Company</h4>
                  <ul className="list-unstyled">
                    <li className="footer-links">Home</li>
                    <li className="footer-links">About Us</li>
                    <li className="footer-links">Contact Us</li>
                    <li className="footer-links">Terms & Conditions</li>
                    <li className="footer-links">Blog</li>
                  </ul>
                </Box>
              </Col>
              <Col lg={2} md={4} sm={6} xs={12}>
                <Box className="inner-list">
                  <h4 className="footer-heading">Feature</h4>
                  <ul className="list-unstyled">
                    <li className="footer-links">Track Shipment</li>
                    <li className="footer-links">Extra Prep</li>
                    <li className="footer-links">2D labeling</li>
                    <li className="footer-links">One Click Generate</li>
                    <li className="footer-links">No Hassle Sheets</li>
                  </ul>
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
        <Box className="copy-right">
          <Box className="container">
            <Box className="d-flex">
              <Box className="footer-icon">
                <ul className="d-flex list-unstyled copyright-list">
                  <li className="social-icon">
                    <Link>
                      <Image src="Assets/Group 454.png" />
                    </Link>
                  </li>
                  <li className="social-icon">
                    <Link>
                      <Image src="Assets/Group 455.png" />
                    </Link>
                  </li>
                  <li className="social-icon">
                    <Link>
                      <Image src="Assets/Group 456.png" />
                    </Link>
                  </li>
                  <li className="social-icon">
                    <Link>
                      <Image src="Assets/Group 457.png" />
                    </Link>
                  </li>
                </ul>
              </Box>
              <Box className="copyright-2020">
                <Typography className="copyright-paragraph">
                  © 2020 Boxer. All Rights Reserved.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

export default Footer;
