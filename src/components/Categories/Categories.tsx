import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCategoryId } from '../../redux/slices/filterSlice';

type CategoryItem = {
  id: number;
  name: string;
};

const Categories: FC = () => {
  const activeCategory = useAppSelector((state) => state.filter.categoryId);
  const dispatch = useAppDispatch();

  const categoriesList: CategoryItem[] = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианская' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((cat) => (
          <li
            key={cat.id}
            className={activeCategory === cat.id ? 'active' : ''}
            onClick={() => dispatch(setCategoryId(cat.id))}>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
