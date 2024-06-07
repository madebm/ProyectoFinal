import { StockResponse } from '../model/StockResponse';
import { publicService } from './APIService';

export const getStockService = async (idUser: number) => {
  const { data } = await publicService.get<StockResponse>(`getCoinsUser/${idUser}`);
  return data;
};
