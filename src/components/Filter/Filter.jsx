import { nanoid } from 'nanoid';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

const inputId = nanoid();
const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <FilterLabel htmlFor={inputId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        value={value}
        id={inputId}
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;
