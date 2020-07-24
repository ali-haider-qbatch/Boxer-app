import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Image, Button, Navbar, Nav } from "react-bootstrap";
import Link from "@material-ui/core/Link";
import Box from '@material-ui/core/Box';
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "transparent",
      img: "Assets/logo.png",
      isNavActive: "",
    };
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      this.setState({
        color: "#fff",
        img: "Assets/WebLogoBlue.png",
        isNavActive: " active",
      });
    } else {
      this.setState({
        color: "transparent",
        img: "Assets/logo.png",
        isNavActive: "",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  openNav = () => {
    document.getElementById("mySidebar").style.width = "325px";
    document.getElementById("main").style.marginright = "325px";
  };
  closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginright = "0";
  };
  render() {
    const navClass =
      "navbar navbar-expand-lg navbar-dark header-spacing fixed-top " +
      this.state.isNavActive;
    const mobileMenu = "sidemenu" + this.state.isNavActive;
    return (
      <React.Fragment>
        <HashRouter>
          <Navbar
            id="Header"
            className={navClass}
            style={{ background: this.state.color }}
          >
            <Box className="container">
              <Link className="navbar-brand" href="index.html">
                <Image
                  src={this.state.img}
                  id="menu-logo"
                  className="navbar-img"
                  alt=""
                />
              </Link>
              <Box className="collapse navbar-collapse" id="navbarResponsive">
                <Nav className="navbar-nav ml-auto">
                  <Nav.Link className="nav-item">
                    <Link underline="none" className="nav-link " href="#">
                      HOME
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-item ">
                    <Link underline="none" className="nav-link " href="#">
                      BENEFITS
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-item ">
                    <Link underline="none" className="nav-link " href="#">
                      HOW TO
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-item">
                    <Link
                      underline="none"
                      className="nav-link top-border"
                      href="#"
                    >
                      PRICING
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-item">
                    <Link underline="none" className="nav-link" href="#">
                      TESTMONIALS
                    </Link>
                  </Nav.Link>
                  <Nav.Link align="center" className="nav-item">
                    <Button
                      type="button"
                      className="btn button get-started-button"
                    >
                      Get Started
                    </Button>
                  </Nav.Link>
                </Nav>
              </Box>
            </Box>
          </Navbar>
          <Box className="boxer-sidemenu ">
            <Box id="mySidebar" className="sidebar">
              <Box className="d-flex">
                <Link
                  underline="none"
                  // href="javascript:void(0)"
                  className="closebtn"
                  onClick={this.closeNav}
                >
                  &times;
                </Link>
                <Image
                  className="sidebar-img"
                  src="Assets/WebLogoBlue.png"
                  alt=""
                />
              </Box>
              <Link
                underline="none"
                href="#"
                className="border-top sidebar-link"
              >
                HOME
              </Link>
              <Link
                underline="none"
                href="#"
                className="border-top sidebar-link"
              >
                BENEFITS
              </Link>
              <Link
                underline="none"
                href="#"
                className="border-top sidebar-link"
              >
                HOW To
              </Link>
              <Link
                underline="none"
                href="#"
                className="border-top sidebar-link"
              >
                PRICING
              </Link>
              <Link
                underline="none"
                href="#"
                className="border-top border-bottom sidebar-link"
              >
                TESETMONIALS
              </Link>
              <Box align="center" className="mt-3">
                <Button className="btn button get-started">Get Started</Button>
              </Box>
            </Box>
            <Box
              id="main"
              className={mobileMenu}
              style={{ background: this.state.color }}
            >
              <Image className="sidebar-img" src={this.state.img} alt="" />
              <Button className="openbtn text-left" onClick={this.openNav}>
                &#9776;
              </Button>
            </Box>
          </Box>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default Header;
