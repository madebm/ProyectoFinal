import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import TextInputCustom from '../../../components/TextInputCustom';
import CustomTheme from '../../../theme/CustomTheme';
import useRegisterController from './useRegisterController';

const { colors } = CustomTheme;
const RegisterScreen = ({ navigation }) => {
  const {
    countries,
    isFocus,
    setIsFocus,
    setValueCountry,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    name,
    email,
    password,
    confirmPassword,
    postCreateUser,
    loading,
  } = useRegisterController();

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
      }}
    >
      <Text style={styles.title}>Crear cuenta</Text>
      <Text style={styles.subtitle}>Crear nueva cuenta</Text>

      <View style={{ marginTop: 40, width: '100%' }}>
        <TextInputCustom placeholder={'Nombre'} onChangeText={onChangeName} value={name} />
        <TextInputCustom placeholder={'Email'} onChangeText={onChangeEmail} value={email} />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={countries}
          maxHeight={300}
          labelField='label'
          valueField='value'
          placeholder={'País'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValueCountry(item.value);
            setIsFocus(false);
          }}
          itemTextStyle={styles.itemTextStyle}
        />
        <TextInputCustom placeholder={'Contraseña'} secureTextEntry onChangeText={onChangePassword} value={password} />
        <TextInputCustom
          placeholder={'Confirmar contraseña'}
          secureTextEntry
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
        />
      </View>

      <TouchableOpacity
        style={loading ? styles.buttonDisabled : styles.button}
        disabled={loading}
        onPress={() => {
          postCreateUser();
        }}
      >
        {loading ? (
          <Text style={styles.buttonText}>Cargando...</Text>
        ) : (
          <Text style={styles.buttonText}>Crear cuenta</Text>
        )}
      </TouchableOpacity>

      <View style={{ marginTop: 18 }}>
        <Text>
          ¿Ya tienes una cuenta?
          <Text
            style={{ color: colors.primary, fontWeight: 'bold' }}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            {' '}
            Iniciar sesión
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'gray',
    textAlign: 'center',
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 7,
    padding: 14,
    width: '100%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 12,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    padding: 12,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 57,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  itemTextStyle: { fontSize: 14 },
});
