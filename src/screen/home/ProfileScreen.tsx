import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../context/authContext/AuthContext';
import CustomTheme from '../../theme/CustomTheme';

const { colors } = CustomTheme;
const ProfileScreen = () => {
  const { signOut, userContext } = useContext(AuthContext);
  const profileOptions = [
    {
      icon: 'person',
      title: 'Cerrar sesión',
      subtitle: 'Sal de tu cuenta',
      action: signOut,
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 15, backgroundColor: 'white', flex: 1 }}>
      <Text style={{ fontSize: 23, fontWeight: 'bold', marginBottom: 10 }}>Perfil</Text>
      <View style={styles.cardProfileContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufoJ9oj2emcpu56wpykc_a0eOf0kb5k9e9SJkhSjohQ&s',
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>{userContext.nombre}</Text>
          <Text style={{ color: 'white', fontSize: 13 }}>{userContext.correo}</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        {profileOptions.map((item, index) => (
          <TouchableOpacity style={{ flexDirection: 'row' }} key={index} activeOpacity={0.7} onPress={item.action}>
            <View
              style={{
                backgroundColor: colors.accent,
                borderRadius: 40,
                justifyContent: 'center',
                padding: 10,
                marginRight: 10,
                marginVertical: 10,
              }}
            >
              <Ionicons name={index === 0 ? 'person' : 'log-out'} size={25} color={'white'} />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>{item.title}</Text>
                <Text style={{ color: 'black', fontSize: 14 }}>{item.subtitle}</Text>
              </View>
              <Ionicons name='chevron-forward' size={20} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  cardProfileContainer: {
    backgroundColor: colors.primary,
    borderRadius: 7,
    padding: 7,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
