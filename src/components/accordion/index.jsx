import React, { useState, createContext, useContext } from "react";
import {
  Container,
  Inner,
  Item,
  Title,
  Header,
  Body,
  Icon,
} from "./styles/accordion";

const ToggleContext = createContext();
const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);
Accordion.Inner = ({ children, ...restProps }) => (
  <Inner {...restProps}>{children}</Inner>
);

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && <Body {...restProps}>{children}</Body>;
};

Accordion.Icon = ({ children, ...restProps }) => (
  <Icon {...restProps}>{children}</Icon>
);

export default Accordion;
