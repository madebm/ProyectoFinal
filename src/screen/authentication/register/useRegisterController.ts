import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { getCountriesService, postCreateUserService } from '../../../API/RegisterService';
import { UserRequest } from '../../../model/UserRequest';

const useRegisterController = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [countries, setCountries] = useState<{ label: string; value: number }[]>([]);
  const [valueCountry, setValueCountry] = useState<number>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const response = await getCountriesService();
      let data: { label: string; value: number }[] = [];

      response.data.map((countryResponse) =>
        data.push({ label: countryResponse.nombre_pais, value: countryResponse.id_pais })
      );
      setCountries(data);
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeName = (newName: string) => setName(newName);
  const onChangeEmail = (newEmail: string) => setEmail(newEmail);
  const onChangePassword = (newPassword: string) => setPassword(newPassword);
  const onChangeConfirmPassword = (newConfirmPassword: string) => setConfirmPassword(newConfirmPassword);

  const postCreateUser = async () => {
    try {
      setLoading(true);
      const newUser: UserRequest = {
        correo: email,
        clave: password,
        pais: valueCountry,
        nombre: name,
      };
      const createUserResponse = await postCreateUserService(newUser);
      Alert.alert(createUserResponse.msg);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return {
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
  };
};

export default useRegisterController;
