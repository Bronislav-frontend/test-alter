import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavBar from 'components/NavBar/NavBar';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import { ROUTES } from 'constants/routes';
import newsSelectors from 'redux/news/news-selectors';
import Footer from 'components/Footer/Footer';
import { Box } from '@mui/material';

const lazyPages = {
  HomePage: lazy(() => import('pages/Homepage/HomePage')),
  NewsPage: lazy(() => import('pages/NewsPage/NewsPage')),
  ProfilePage: lazy(() => import('pages/ProfilePage/ProfilePage')),
  ErrorPage: lazy(() => import('pages/ErrorPage/ErrorPage')),
};

const App = () => {
  const isLoading = useSelector(newsSelectors.getIsLoading);

  return (
    <Box sx={{ flex: '1 0 auto' }}>
      <NavBar />
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<lazyPages.ErrorPage />} />
          <Route path={ROUTES.HOME.path} element={<lazyPages.HomePage />} />
          <Route path={ROUTES.NEWS.path} element={<lazyPages.NewsPage />} />
          <Route path={ROUTES.PROFILE.path} element={<PrivateRoute />}>
            <Route
              path={ROUTES.PROFILE.path}
              element={<lazyPages.ProfilePage />}
            />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </Box>
  );
};

export default App;
