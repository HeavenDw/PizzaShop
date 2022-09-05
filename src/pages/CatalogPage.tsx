import React, { FC } from 'react';
import Categories from '../components/Categories/Categories';
import PizzaItems from '../components/PizzaItems/PizzaItems';
import Sort from '../components/Sort/Sort';

const CatalogPage: FC = () => {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaItems />
    </>
  );
};

export default CatalogPage;
