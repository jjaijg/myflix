import React from "react";

import { Container, Row, Col, Title, Text, Link, Break } from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Row = ({ children, ...restProps }) => (
  <Row {...restProps}>{children}</Row>
);
Footer.Col = ({ children, ...restProps }) => (
  <Col {...restProps}>{children}</Col>
);
Footer.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
Footer.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);
Footer.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);
Footer.Break = ({ children, ...restProps }) => (
  <Break {...restProps}>{children}</Break>
);

export default Footer;
