import { EPizzaSliceStatus } from './pizzaSliceTypes';
export interface IPizzaItemSlice {
  pizza: IPizzaItemSliceBlock;
  status: EPizzaSliceStatus;
}

export interface IPizzaItemSliceBlock {
  imageUrl: string;
  title: string;
  price: number;
}
