import React from "react";

import { Footer } from "../components";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Title>
        Questions? Call{" "}
        <Footer.Link href="tel:000-800-040-1843">000-800-040-1843</Footer.Link>
      </Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Col>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Col>
        <Footer.Col>
          <Footer.Link href="#">Help Centre</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Cookie Preference</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Col>
        <Footer.Col>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Myflix Originals</Footer.Link>
        </Footer.Col>
        <Footer.Col>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Col>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Myflix, India</Footer.Text>
    </Footer>
  );
};

export default FooterContainer;
