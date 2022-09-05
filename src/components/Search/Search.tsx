import debounce from 'lodash.debounce';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
    }, 250),
    [],
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={onChangeInput}
        type="text"
        placeholder="Search pizza..."
      />
    </div>
  );
};

export default Search;
