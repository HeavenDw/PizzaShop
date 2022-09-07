import debounce from 'lodash.debounce';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';

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
    <input
      className={styles.search}
      value={inputValue}
      onChange={onChangeInput}
      type="text"
      placeholder="Поиск пиццы..."
    />
  );
};

export default Search;
