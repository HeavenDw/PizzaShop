import React, { FC } from 'react';
import Categories from '../components/Categories/Categories';
import PizzaItems from '../components/PizzaItems/PizzaItems';
import Sort from '../components/Sort/Sort';
import styles from './CatalogPage.module.scss';

const CatalogPage: FC = () => {
  return (
    <>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>Все пиццы</h2>
      <PizzaItems />
    </>
  );
};

export default CatalogPage;
