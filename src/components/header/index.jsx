import React, { useState } from "react";
import { Link as RouteLink } from "react-router-dom";

import {
  Logo,
  ButtonLink,
  Container,
  Background,
  Feature,
  Group,
  Text,
  Link,
  FeatureCallout,
  Dropdown,
  Profile,
  Picture,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);
Header.Group = ({ children, ...restProps }) => (
  <Group {...restProps}>{children}</Group>
);
Header.Feature = ({ children, ...restProps }) => (
  <Feature {...restProps}>{children}</Feature>
);
Header.Logo = ({ to, ...restProps }) => (
  <RouteLink to={to}>
    <Logo {...restProps} />
  </RouteLink>
);
Header.ButtonLink = ({ children, ...restProps }) => (
  <ButtonLink {...restProps}>{children}</ButtonLink>
);

Header.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Header.TextLink = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);

Header.FeatureCallout = ({ children, ...restProps }) => (
  <FeatureCallout {...restProps}>{children}</FeatureCallout>
);

Header.Dropdown = ({ children, ...restProps }) => (
  <Dropdown {...restProps}>{children}</Dropdown>
);
Header.Profile = ({ children, ...restProps }) => (
  <Profile {...restProps}>{children}</Profile>
);
Header.PlayButton = ({ children, ...restProps }) => (
  <PlayButton {...restProps}>{children}</PlayButton>
);

Header.Picture = ({ src, ...restProps }) => (
  <Picture
    {...restProps}
    src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
  />
);
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="../images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        placeholder="Search Films and Series"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        active={searchActive}
      />
    </Search>
  );
};

export default Header;
