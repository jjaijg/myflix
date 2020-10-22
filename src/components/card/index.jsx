import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Group,
  Item,
  Image,
  SubTitle,
  Text,
  Title,
  Meta,
  Entities,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Content,
  Maturity,
} from "./styles/card";

const FeatureContext = createContext(null);

const Card = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

Card.Group = ({ children, ...restProps }) => (
  <Group {...restProps}>{children}</Group>
);
Card.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
Card.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);
Card.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);
Card.Meta = ({ children, ...restProps }) => (
  <Meta {...restProps}>{children}</Meta>
);
Card.Entities = ({ children, ...restProps }) => (
  <Entities {...restProps}>{children}</Entities>
);
Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  // console.log("Item : ", item);
  return (
    <Item
      {...restProps}
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {children}
    </Item>
  );
};

Card.Image = ({ children, ...restProps }) => <Image {...restProps} />;

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { itemFeature, showFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="CLose" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

export default Card;
