import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

import style from './Filte.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(changeFilter(e.target.value));
  return (
    <div className={style.divFilter}>
      <label className={style.inputLabel}>
        Find contacts by name
        <input
          className={style.inputFilter}
          type="text"
          value={filter}
          name="search"
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
