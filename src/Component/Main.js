import React, { Component } from "react";
import Reviews from "./Reviews";
import Tools from "./Tools";
import Pricing from "./Pricing";
import Brand from "./Brand";
import { Image, Row, Col, Container, Button } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipment: "Track Shipment from amazon",
      ShipmentPara:
        "Barcodes are easiest way to provide box contents information for your inbound Amazon FBA shipments.Easily Create box content barcodes and validate packed items to shipment plan",
    };
  }

  render() {
    const toolsData = [
      {
        img: "TrackShipments.png",
        heading: "Track Shipment",
        para:
          "Tracking shipment for seller become easy through boxer.super quick update",
      },
      {
        img: "NoSpreadSheets.png",
        heading: "No Spreadsheets",
        para:
          "No hassle to keep the record on sheets.simply put then in box and print the labels.",
      },
      {
        img: "EasyTools.png",
        heading: "Easy Tools",
        para:
          "Boxer Has super easy features to handle the complex activities in a smooth way",
      },
      {
        img: "AllLabels.png",
        heading: "All Type Labels",
        para:
          "You can print all types of the FBA-compliant labels for your boxes,that make workflow fat.",
      },
      {
        img: "GenerateLabels.png",
        heading: "Generate Labels",
        para:
          "Is is easy to automatically printing FBA-compliant expiration date labels as you pack the boxes",
      },
      {
        img: "OneClick.png",
        heading: "One Click",
        para:
          "Just one click to generate the desired and standard lables with no hassle.Thing got easy",
      },
    ];
    const pricingdata = [
      {
        UserHeading: "Single User",
        h1Heading: "USD 29",
        userLimit: "Per user/month only 1 user",
      },
      {
        UserHeading: "Prep Center",
        h1Heading: "USD 129",
        userLimit: "Per user/month only 10 users",
      },
      {
        UserHeading: "Custom Plan",
        h1Heading: "USD 229",
        userLimit: "Per user/month only 1 users",
      },
    ];
    const brandimg = [
      {
        img: "Barnds/Souncloud.svg",
      },
      {
        img: "Barnds/logo-adp.svg",
      },
      {
        img: "logo-ebay.png",
      },
      {
        img: "logo-hellofresh.png",
      },
      {
        img: "vimeo-logo-dark.png",
      },
    ];
    const rows = toolsData.map((x) => <Tools data={x} />);
    const pricing = pricingdata.map((y) => <Pricing price={y} />);
    const About = [1, 2, 3].map((x) => <Reviews />);
    const branding = brandimg.map((z) => <Brand img={z} />);

    return (
      <React.Fragment>
        <Box className="overlay-div" bgcolor="#0d2187">
          <Container>
            <Box display="flex" className=" header-control">
              <Box className="text-div" color="#fff">
                <Typography variant="h4" className="h1-heading">
                  Supercharge your Amazon Prep & Pack Business
                </Typography>
                <Typography className="amazon-para mb-4">
                  Boxer connects all the different dots Operations into a single
                  platform ensuring growth for your business
                </Typography>
                <Box display="flex" justifyContent="flex-start" mt={2} className=" started-buttons" >
                  <Button
                    type="button"
                    className="btn button  get-started-button"
                  >
                    Get Started
                  </Button>
                  <Button type="button" className="btn button">
                    Request Demo
                  </Button>
                </Box>
              </Box>
              <Box p={2} mb={3} className="laptop-img">
                <Box className="img-div">
                  <Image
                    className="laptop-img"
                    src="Assets/laptop.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box className="container-bg-color" bgcolor="#f3f4f6">
          <Container>
            <Row className="m-0 brand-row mb-4">{branding}</Row>
            <Box align="center" p={6} className="heading">
              <Typography variant="h4" color="#fff" className="h1-heading">
                Discover how your business can work smarter!
              </Typography>
              <Typography>
                Barcodes are the easiest way to provide box contents information
                for your inbound amazon FBA
                <br />
                Shipment.Easily Create box content barcodes and validate packed
                items to shipment plan
              </Typography>
            </Box>
            <Row className="m-0">{rows}</Row>
          </Container>
        </Box>
        <Box bgcolor="#fff" width="100%" mt={2.5} className=" Succeed-your-business">
          <Container>
            <Box className="inner-data">
              <Box align="center" mt={2} mb={3} p={6} className="heading">
                <Typography variant="h4" className="h1-heading">
                  How it works to succeed your business{" "}
                </Typography>
                <Typography align="center" className=" business-detail">
                  {this.state.ShipmentPara}
                </Typography>
              </Box>
              <Row className="m-0 spacing">
                <Col lg={6} md={6} sm={6} xs={12}>
                  <Typography variant="h5" className="Shipment-heading">
                    {this.state.shipment}
                  </Typography>
                  <Typography className="business-detail">
                    {this.state.ShipmentPara}
                  </Typography>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <Box align="center" className="shipment">
                    <Image
                      className="shipment-img"
                      src="Assets/illustrationTrackShipment.png"
                      alt=""
                    />
                  </Box>
                </Col>
                <Box className="reserve-data">
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <Box align="center" className="shipment">
                      <Image
                        className="shipment-img"
                        src="Assets/illustrationExtractPrep.png"
                        alt=""
                      />
                    </Box>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <Typography variant="h5" className="Shipment-heading">
                      {this.state.shipment}
                    </Typography>
                    <Typography className="business-detail">
                      {this.state.ShipmentPara}
                    </Typography>
                  </Col>
                </Box>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <Typography variant="h5" className="Shipment-heading">
                    {this.state.shipment}
                  </Typography>
                  <Typography className="business-detail">
                    {this.state.ShipmentPara}
                  </Typography>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <Box align="center" className="shipment">
                    <Image
                      className="shipment-img"
                      src="Assets/illustrationPrepareLabel.png"
                      alt=""
                    />
                  </Box>
                </Col>
                <Box className="reserve-data">
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <Box align="center" className="shipment">
                      <Image
                        className="shipment-img"
                        src="Assets/illustrationGenerateLabels.png"
                        alt=""
                      />
                    </Box>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <Typography variant="h5" className="Shipment-heading">
                      {this.state.shipment}
                    </Typography>
                    <Typography className="business-detail">
                      {this.state.ShipmentPara}
                    </Typography>
                  </Col>
                </Box>
              </Row>
            </Box>
          </Container>
          <Box bgcolor="#0d2187" color="#fff" p={6} className="progress-div">
            <Container>
              <Row className="m-0">
                <Col md={4} sm={12} align="center" >
                  <Typography
                    variant="h4"
                    align="center"
                    className="h1-heading"
                  >
                    35%
                  </Typography>
                  <Typography variant="h6">Increased Revenue</Typography>
                  <Typography variant="h4" className="revenue-heading">
                    Optimize your Amazon business to get increase the revenue.
                    Boxers insure in revenue the increase.
                  </Typography>
                </Col>
                <Col md={4} sm={12} align="center" >
                  <Typography variant="h4" className="h1-heading">
                    200
                  </Typography>
                  <Typography variant="h6">Businesses Impacted</Typography>
                  <Typography className="revenue-heading">
                    We’re obsessed with your success, which is why hundreds of
                    Amazon sellers worldwide rely on Boxer.
                  </Typography>
                </Col>
                <Col md={4} sm={12} align="center">
                  <Typography variant="h4" className="h1-heading">
                    25%
                  </Typography>
                  <Typography variant="h6">Sale increase</Typography>
                  <Typography className="revenue-heading">
                    Work smarter not harder, with automated Boxer system you can
                    increase your sales greatly.
                  </Typography>
                </Col>
              </Row>
            </Container>
          </Box>
          <Box pt={3.5} pb={3.5} bgcolor="#f7fbff" className="pricing">
            <Container>
              <Typography variant="h4" align="center" className=" spacing">
                Simple Plans to boost your business
              </Typography>
              <Row className="m-0">{pricing}</Row>
            </Container>
          </Box>
          <Box bgcolor="#fff" className="company-intro">
            <Container>
              <Box p={6} className="company-intro d-flex">
                <Box  >
                  <Image
                    className="client-img"
                    src="Assets/CeoImage.png"
                    alt=""
                  />
                </Box>
                <Box bgcolor="#0d2187" className="detail-img" color="#fff">
                  <Typography variant="h4" className="h1-heading">
                    Our company
                  </Typography>
                  <Typography className="company-paragraph">
                    <strong>
                      <b>Hi! I'm Matt Olpinski</b>
                    </strong>
                    -- after 10 year of freelancing,drozens of successful
                    projects, and hundreds of inquiries from clients,Idecided to
                    let my web design and development business grow beyond
                    myself.{" "}
                  </Typography>
                  <Typography className="company-paragraph">
                    In 2018, I created Matthew's Design Co. in an effort to
                    serve more clients and execute larger projects without
                    sacrificing the expertise my clients value and the personal
                    attention they've come to expect.
                  </Typography>
                  <Typography className="company-paragraph">
                    You'll work directly with me and my small, hand-picked team
                    of experts to make sure your project is executed on time, on
                    budget, and with world-class quality.
                  </Typography>
                  <Typography className="company-paragraph">
                    We partner with our clients remotely and expand our team as
                    needed to bring their projects to life.
                  </Typography>
                  <Typography className="company-paragraph">
                    Get all the benefits of hiring an agency, without the hassle
                    or expense.
                  </Typography>
                </Box>
              </Box>
              <Box mt={2} className="customer-says">
                <Typography
                  variant="h4"
                  align="center"
                  className=" mb-4 h1-heading"
                >
                  See what our customers say about us
                </Typography>
                <Typography align="center" className=" mb-4">
                  Join 15k+ happy customers worldwide who is already using Boxer
                  system
                </Typography>
                <Row className=" m-0">{About}</Row>
              </Box>
            </Container>
            <Box bgcolor="#f7fbff" className="Ask-question">
              <Container>
                <Box align="center" mt={3} className="Freq-heading">
                  <Typography variant="h4" className="spacing h1-heading">
                    Frequently Asked Questions
                  </Typography>
                </Box>
                <Box p={2} class="collapse-2">
                  <Box class="panel-group">
                    <Box class="panel">
                      <Box class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                            class="collapsed"
                          >
                            Do you have demo?
                          </a>
                        </h4>
                      </Box>
                      <Box
                        id="collapseOne"
                        class="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <Box class="panel-body">
                          Yes! We do have a 7-day free trial period where you
                          could explore and test Boxer System to your
                          satisfaction. After the trial, you’ll automatically be
                          subscribed to the plan you choose during the trial
                          period.
                        </Box>
                      </Box>
                    </Box>
                    <Box class="panel">
                      <Box class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What countries does Boxer support?
                          </a>
                        </h4>
                      </Box>
                      <Box
                        id="collapseTwo"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <Box class="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid.
                        </Box>
                      </Box>
                    </Box>
                    <Box class="panel">
                      <Box class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            How much does Boxer cost?
                          </a>
                        </h4>
                      </Box>
                      <Box
                        id="collapseThree"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <Box class="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid.
                        </Box>
                      </Box>
                    </Box>
                    <Box class="panel">
                      <Box class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Can this tool be used on multiple computers?
                          </a>
                        </h4>
                      </Box>
                      <Box
                        id="collapseFour"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                      >
                        <Box class="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid.{" "}
                        </Box>
                      </Box>
                    </Box>
                    <Box class="panel">
                      <Box class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            What label sizes are supported?
                          </a>
                        </h4>
                      </Box>
                      <Box
                        id="collapseFive"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFive"
                      >
                        <Box class="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid.
                        </Box>
                      </Box>
                    </Box>
                    <Box class="panel border-bottom">
                      <Box class="panel-heading" role="tab" id="headingSix">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            How does Boxer protect my data?
                          </a>
                        </h4>
                      </Box>
                      <Box
                        id="collapseSix"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingSix"
                      >
                        <Box class="panel-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid.
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
          <Box bgcolor="#0d2187" color="#fff" className="started-business">
            <Box className="heading">
              <Typography variant="h4" className="h1-heading">
                Ready to Supercharge your Amazon Business
              </Typography>
              <Typography color="#535d73" className="business-paragraph">
                Boxer connects all the different dots Operations into a single
                platform ensuring growth <br />
                and success platform ensuring.
              </Typography>
              <Box display="flex" justifyContent="center" className="started-buttons">
                <Button
                  type="button"
                  className="btn button  get-started-button"
                >
                  Get Started
                </Button>
                <Button type="button" className="btn button">
                  Request Demo
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}
export default Main;
