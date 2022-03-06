import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, SignIn, SignUp, Browse } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />
            }
          >
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>

          <Route
            path={ROUTES.BROWSE}
            element={
              <ProtectedRoute user={user} unLoggedInPath={ROUTES.SIGN_IN} />
            }
          >
            <Route path={ROUTES.BROWSE} element={<Browse />} />
          </Route>

          <Route
            path={ROUTES.SIGN_IN}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />
            }
          >
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          </Route>

          <Route
            path={ROUTES.SIGN_UP}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />
            }
          >
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}
