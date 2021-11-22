import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <span className={s.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
