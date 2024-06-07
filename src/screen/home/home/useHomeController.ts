import { useContext, useEffect } from 'react';
import { getStockService } from '../../../API/StockService';
import { AuthContext } from '../../../context/authContext/AuthContext';

const useHomeController = () => {
  const { userContext, setStock, stock } = useContext(AuthContext);

  useEffect(() => {
    getStock();
  }, []);

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
  return { stock };
};

export default useHomeController;
