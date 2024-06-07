import { TotalCoin } from './UserResponse';

export interface StockResponse {
  data: TotalCoin[];
  error: string;
  success: boolean;
}
