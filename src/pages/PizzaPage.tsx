import React, { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EPizzaSliceStatus } from '../@types/pizzaSliceTypes';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchPizza } from '../redux/slices/pizzaItemSlice';

const PizzaPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pizza, status } = useAppSelector((state) => state.pizzaItem);

  useEffect(() => {
    dispatch(fetchPizza(id));
  }, []);

  if (status === EPizzaSliceStatus.Error) {
    navigate('/');
  }

  if (status === EPizzaSliceStatus.Loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h1>{pizza.title}</h1>
      <p>{pizza.price}</p>
    </div>
  );
};

export default PizzaPage;
