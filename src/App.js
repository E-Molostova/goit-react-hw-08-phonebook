import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import AppBar from './Components/AppBar/AppBar';
// import HomePage from './views/HomePage';
// import LoginPage from './views/LoginPage';
// import RegisterPage from './views/RegisterPage';
// import PhonebookPage from './views/PhonebookPage';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const HomePage = lazy(() => import('./views/HomePage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));
const PhonebookPage = lazy(() => import('./views/PhonebookPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            {/* <Route exact path="/" component={HomePage} /> */}
            {/* <Route path="/register" component={RegisterPage} /> */}
            {/* <Route path="/login" component={LoginPage} /> */}
            {/* <Route path="/contacts" component={PhonebookPage} /> */}
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <PhonebookPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
};

export default App;
