import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Categories from '../components/Categories/Categories';
import PizzaItems from '../components/PizzaItems/PizzaItems';
import Sort from '../components/Sort/Sort';
import styles from './CatalogPage.module.scss';

const CatalogPage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>{t('catalogPageTitle')}</h2>
      <PizzaItems />
    </>
  );
};

export default CatalogPage;
