import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath }) {
  return !user ? <Outlet /> : <Navigate to={loggedInPath} />;
}

export function ProtectedRoute({ user, unLoggedInPath }) {
  return user ? <Outlet /> : <Navigate to={unLoggedInPath} />;
}
