import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardAccordion from '../../../components/CardAccordion';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { useBuyController } from './useBuyController';

const BuyScreen = () => {
  const { userContext } = useContext(AuthContext);
  const { postBuyCoin } = useBuyController();
  return (
    <FlatList
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
      data={userContext.coins}
      ListHeaderComponent={() => <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Comprar</Text>}
      renderItem={({ item, index }) => (
        <View style={{ marginVertical: 15 }} key={index}>
          <CardAccordion
            abreviation={item.code}
            price={Number(item.price_equivalent)}
            title={item.description}
            variation={Number(item.variation)}
            image={item.imagen}
            isSell={false}
            onBuy={(count) => postBuyCoin(count, item.id)}
          />
        </View>
      )}
    />
  );
};

export default BuyScreen;

const styles = StyleSheet.create({});
