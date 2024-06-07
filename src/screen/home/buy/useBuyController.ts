import { useContext } from 'react';
import { Alert } from 'react-native';
import { postBuyCoinService } from '../../../API/BuyService';
import { getStockService } from '../../../API/StockService';
import { AuthContext } from '../../../context/authContext/AuthContext';

export const useBuyController = () => {
  const { setBalance, userContext, setStock } = useContext(AuthContext);

  const postBuyCoin = async (count: number, id_moneda: number) => {
    try {
      const buy = await postBuyCoinService({
        cantidad: count,
        id_moneda,
        id_pais: userContext.id_pais,
        id_usuario: userContext.id,
      });
      setBalance(buy.balance);
      await getStock();
      Alert.alert('Compra Exitosa');
    } catch (error) {}
  };
  const getStock = async () => {
    try {
      if (userContext) {
        const stockResponse = await getStockService(userContext.id);
        console.log(stockResponse);
        setStock(stockResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { postBuyCoin };
};
