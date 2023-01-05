import { createBrowserRouter } from "react-router-dom";

import HomePage, { loader as homeLoader } from "../pages/Home";
import HashPage, { loader as hashLoader } from "../pages/Hash";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import UserPage from "../pages/User";
import NotFoundPage from "../pages/NotFount";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/timeline',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    loader: homeLoader
  },
  {
    path: '/hashtag/:hashtag',
    element: <HashPage />,
    errorElement: <NotFoundPage />,
    loader: hashLoader
  },
  {
    path: '/user/:id',
    element: <UserPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <NotFoundPage />
  }
]);
