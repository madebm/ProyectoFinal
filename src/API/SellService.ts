import { BuyResponse } from '../model/BuyResponse';
import { SellRequest } from '../model/SellRequest';
import { publicService } from './APIService';

export const postSellService = async (sell: SellRequest) => {
  const { data } = await publicService.post<BuyResponse>('sell', sell);
  return data;
};
