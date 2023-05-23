import React from 'react';
import { setFilter } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Enter your search"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
