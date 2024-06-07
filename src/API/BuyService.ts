import { BuyRequest } from '../model/BuyRequest';
import { BuyResponse } from '../model/BuyResponse';
import { publicService } from './APIService';

export const postBuyCoinService = async (buy: BuyRequest) => {
  const { data } = await publicService.post<BuyResponse>('buy', buy);
  return data;
};
