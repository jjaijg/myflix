import React from "react";

import {
  Container,
  Base,
  Title,
  Text,
  TextSmall,
  Error,
  Input,
  Link,
  Button,
} from "./styles/form";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Base = ({ children, ...restProps }) => (
  <Base {...restProps}>{children}</Base>
);
Form.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
Form.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);
Form.TextSmall = ({ children, ...restProps }) => (
  <TextSmall {...restProps}>{children}</TextSmall>
);
Form.Error = ({ children, ...restProps }) => (
  <Error {...restProps}>{children}</Error>
);
Form.Link = ({ children, to, ...restProps }) => (
  <Link to={to} {...restProps}>
    {children}
  </Link>
);
Form.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>{children}</Button>
);
Form.Input = ({ ...restProps }) => <Input {...restProps} />;

export default Form;
