import React from "react";
import { Break, Button, Container, Input, Title } from "./styles/optForm";

const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

// OptForm.Inner = ({children, ...restProps}) => <Inner {...restProps}>{children}</Inner>
OptForm.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
OptForm.Input = ({ ...restProps }) => <Input {...restProps} />;
OptForm.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>
    {children} <img src="images/icons/chevron-right.png" alt="Try Now" />
  </Button>
);
OptForm.Break = ({ ...restProps }) => <Break {...restProps} />;

export default OptForm;
