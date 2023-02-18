import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import NavBar from 'components/NavBar/NavBar';

import 'react-toastify/dist/ReactToastify.css';

const lazyPages = {
  HomePage: lazy(() => import('pages/Homepage/HomePage')),
  NewsPage: lazy(() => import('pages/NewsPage/NewsPage')),
  ProfilePage: lazy(() => import('pages/ProfilePage/ProfilePage')),
};

const router = createBrowserRouter([
  {
    path: ROUTES.HOME.path,
    element: <lazyPages.HomePage />,
  },
  {
    path: ROUTES.NEWS.path,
    element: <lazyPages.NewsPage />,
  },
  {
    path: ROUTES.PROFILE.path,
    element: <lazyPages.ProfilePage />,
  },
]);

const App = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
