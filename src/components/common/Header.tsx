import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import logo from 'assets/images/baigvaly.png';
import { BiSearch, BiUser } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="header-component">
      <div className="top-header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall />
              <a href="tel:01704690563">01704690563</a>
            </li>
            <li>
              <FaRegEnvelope />
              <a href="mail-to:support@baigvaly.com.bd">
                support@baigvaly.com.bd
              </a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="https://play.google.com/store/apps/details?id=bd.com.baigvaly.baigvalyshop">
              Save big on our app!
            </a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <img className="branding-logo" src={logo} alt="" />

            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search Here....."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <FiShoppingBag />
              </li>
              <li>
                <BiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
