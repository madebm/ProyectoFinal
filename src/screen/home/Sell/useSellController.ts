import { useContext } from 'react';
import { Alert } from 'react-native';
import { postSellService } from '../../../API/SellService';
import { getStockService } from '../../../API/StockService';
import { AuthContext } from '../../../context/authContext/AuthContext';

const useSellController = () => {
  const { userContext, setStock, setBalance } = useContext(AuthContext);
  const postSell = async (count: number, id_moneda: number) => {
    const response = await postSellService({
      cantidad: count,
      id_moneda,
      id_pais: userContext.id_pais,
      id_usuario: userContext.id,
    });
    setBalance(response.balance);
    await getStock();
    Alert.alert('Venta exitosa');
  };
  const getStock = async () => {
    try {
      if (userContext) {
        const stockResponse = await getStockService(userContext.id);

        setStock(stockResponse);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { postSell };
};

export default useSellController;
