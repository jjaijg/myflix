import React from "react";

import HeaderContainer from "../containers/header";
import JumbotronContainer from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import { OptForm, Feature } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Title>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Title>
            <OptForm.Break />
            <OptForm.Input name="getStarted" placeholder="Email address" />
            <OptForm.Button>get started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <main>
        <JumbotronContainer />
        <FaqsContainer />
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
};

export default Home;
