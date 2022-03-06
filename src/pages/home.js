import React from 'react';
import { HeaderContainer } from '../containers/header';
import { JumbotronConTainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { OptForm, Feature } from '../components';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at any time.
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronConTainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
