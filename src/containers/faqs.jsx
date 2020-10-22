import React from "react";
import faqsData from "../fixtures/faqs.json";

import { Accordion, OptForm } from "../components";

const FaqsContainer = () => {
  return (
    <>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((faq) => (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
        ))}
        <OptForm>
          <OptForm.Title>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Title>
          <OptForm.Break />
          <OptForm.Input name="getStarted" placeholder="Email address" />
          <OptForm.Button>get started</OptForm.Button>
        </OptForm>
      </Accordion>
    </>
  );
};

export default FaqsContainer;
