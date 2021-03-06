import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <Route {...routeProps}>{shouldRedirect ? <Redirect to="/contacts" /> : children}</Route>;
};

export default PublicRoute;
