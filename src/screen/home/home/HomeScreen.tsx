import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from '../../../components/Card';
import { AuthContext } from '../../../context/authContext/AuthContext';
import CustomTheme from '../../../theme/CustomTheme';

import useHomeController from './useHomeController';

const { colors } = CustomTheme;
const HomeScreen = ({ navigation }) => {
  const { userContext, stock, balance } = useContext(AuthContext);
  const {} = useHomeController();
  if (userContext && stock && balance)
    return (
      <FlatList
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{ padding: 20 }}
        data={stock.data}
        ListHeaderComponent={() => (
          <>
            <View style={{ marginBottom: 30 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 19 }}>Hola {userContext.nombre}👋🏻</Text>
              <Text style={{ marginTop: 20, fontSize: 17, color: 'gray' }}>Tu saldo</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 27 }}>${balance}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BuyScreen')}
                activeOpacity={0.7}
                style={{
                  backgroundColor: colors.primary,
                  padding: 7,
                  borderRadius: 7,
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name='add' size={27} color='white' />
                <Text style={{ color: 'white' }}>Comprar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SellScreen')}
                activeOpacity={0.7}
                style={{
                  backgroundColor: colors.primary,
                  padding: 7,
                  borderRadius: 7,
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name='remove-sharp' size={27} color='white' />
                <Text style={{ color: 'white' }}>Vender</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginVertical: 25 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Mis acciones</Text>
            </View>
          </>
        )}
        renderItem={({ item, index }) => (
          <View style={{ marginVertical: 15 }} key={index}>
            <Card
              abreviation={item.abreviacion}
              price={item.precio}
              title={item.nombre_moneda}
              variation={item.variacion}
              image={item.imagen}
              count={item.cantidad}
            />
          </View>
        )}
      />
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
