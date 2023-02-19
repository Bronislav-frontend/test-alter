import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTES } from 'constants/routes';
import selectors from 'redux/news/news-selectors';
import NavBar from 'components/NavBar/NavBar';
import Loader from 'components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';

const lazyPages = {
  HomePage: lazy(() => import('pages/Homepage/HomePage')),
  NewsPage: lazy(() => import('pages/NewsPage/NewsPage')),
  ProfilePage: lazy(() => import('pages/ProfilePage/ProfilePage')),
};

const App = () => {
  const isLoading = useSelector(selectors.getIsLoading);

  return (
    <>
      <ToastContainer />
      <NavBar />
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTES.HOME.path} element={<lazyPages.HomePage />} />
          <Route path={ROUTES.NEWS.path} element={<lazyPages.NewsPage />} />
          <Route
            path={ROUTES.PROFILE.path}
            element={<lazyPages.ProfilePage />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
