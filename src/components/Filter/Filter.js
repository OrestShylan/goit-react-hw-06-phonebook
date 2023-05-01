import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'components/redux/phonebookSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.phoneBook.filter);
  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
