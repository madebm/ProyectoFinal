import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardAccordion from '../../../components/CardAccordion';
import { AuthContext } from '../../../context/authContext/AuthContext';
import useSellController from './useSellController';

const SellScreen = () => {
  const { stock } = useContext(AuthContext);
  const { postSell } = useSellController();
  return (
    <FlatList
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
      data={stock.data}
      ListHeaderComponent={() => <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Vender</Text>}
      renderItem={({ item, index }) => (
        <View style={{ marginVertical: 15 }} key={index}>
          <CardAccordion
            abreviation={item.abreviacion}
            price={Number(item.precio)}
            title={item.nombre_moneda}
            variation={Number(item.variacion)}
            image={item.imagen}
            amount={item.cantidad}
            isSell
            onBuy={(count) => {
              postSell(count, item.id_moneda);
            }}
            maxValue={item.cantidad}
          />
        </View>
      )}
    />
  );
};

export default SellScreen;

const styles = StyleSheet.create({});
