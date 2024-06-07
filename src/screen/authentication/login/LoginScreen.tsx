import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextInputCustom from '../../../components/TextInputCustom';
import CustomTheme from '../../../theme/CustomTheme';
import useLoginController from './useLoginController';

const { colors } = CustomTheme;
const LoginScreen = ({ navigation }) => {
  const { form, login, onChangeEmail, onChangePassword, error, loading } = useLoginController();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
      }}
    >
      <View>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
      </View>

      <View style={{ marginTop: 40, width: '100%' }}>
        <TextInputCustom placeholder={'Email'} value={form.email} onChangeText={onChangeEmail} />
        <TextInputCustom
          placeholder={'Contraseña'}
          value={form.password}
          onChangeText={onChangePassword}
          textContentType='password'
          secureTextEntry
        />
      </View>
      {error.length > 0 && (
        <View style={{ width: '100%' }}>
          <Text style={{ color: '#c54b49' }}>{error}</Text>
        </View>
      )}
      <TouchableOpacity style={loading ? styles.buttonDisabled : styles.button} disabled={loading} onPress={login}>
        {loading ? (
          <Text style={styles.buttonText}>Cargando...</Text>
        ) : (
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        )}
      </TouchableOpacity>

      <View style={{ marginTop: 18 }}>
        <Text>
          ¿No tienes una cuenta?
          <Text
            style={{ color: colors.primary, fontWeight: 'bold' }}
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            {' '}
            Crear cuenta
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'gray',
    textAlign: 'center',
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
});
