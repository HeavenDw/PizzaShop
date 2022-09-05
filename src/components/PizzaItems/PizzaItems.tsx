import React, { FC, useEffect } from 'react';
import { fetchPizzas } from '../../redux/slices/pizzasSlice';
import Pagination from '../Pagination/Pagination';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import { EPizzaSliceStatus, IPizzaBlock } from '../../@types/pizzaSliceTypes';
import { useAppDispatch, useAppSelector } from '../../hooks';

const PizzaItems: FC = () => {
  const { pizzasList, status } = useAppSelector((state) => state.pizzas);
  const { sortType, categoryId, searchValue, currentPage } = useAppSelector(
    (state) => state.filter,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPizzas({ sortType, categoryId, searchValue, currentPage }));

    window.scrollTo(0, 0);
  }, [sortType, categoryId, searchValue, currentPage]);

  if (status === EPizzaSliceStatus.Error) {
    return <div>{status}</div>;
  }

  const pizzas = pizzasList.map((pizzaItem: IPizzaBlock) => (
    <PizzaBlock key={pizzaItem.id} {...pizzaItem} />
  ));
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="content__items">
        {status === EPizzaSliceStatus.Loading ? skeletons : pizzas}
      </div>
      <Pagination currentPage={currentPage} pageCount={3} />
    </>
  );
};

export default PizzaItems;
