import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function SignUp() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  const auth = getAuth(firebase);

  const handleSignUp = (event) => {
    event.preventDefault();
    const random = Math.floor(Math.random() * 5) + 1;
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: firstName,
          photoURL: `${random}`,
        });
      })
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
  return (
    <>
      <>
        <HeaderContainer>
          <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignUp} method="POST">
              <Form.Input
                placeholder="First Name"
                value={firstName}
                type="text"
                onChange={({ target }) => setFirstName(target.value)}
              />
              <Form.Input
                placeholder="Email address"
                value={emailAddress}
                type="email"
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <Form.Input
                placeholder="Password"
                type="password"
                autoComplete="off"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Submit type="submit" disabled={isInvalid}>
                Sign up
              </Form.Submit>
              <Form.Text>
                Already a user?{' '}
                <Form.Link to="/signin"> Sign in now.</Form.Link>
              </Form.Text>
              <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </Form.TextSmall>
            </Form.Base>
          </Form>
        </HeaderContainer>
        <FooterContainer></FooterContainer>
      </>
    </>
  );
}
