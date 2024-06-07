import { useContext, useState } from 'react';
import { postValidateUserService } from '../../../API/RegisterService';
import { AuthContext } from '../../../context/authContext/AuthContext';

const useLoginController = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, setUserContext, setBalance } = useContext(AuthContext);

  const login = async () => {
    try {
      setError('');
      setLoading(true);
      const user = await postValidateUserService({ correo: form.email, clave: form.password });

      if (user.user) {
        const token = 'ahEIQOSH219277*Aell11';
        signIn(token);
        setUserContext(user.user);
        setBalance(user.user.saldo);
      } else {
        if (user.error && user.error.length > 0) {
          setError(user.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onChangeEmail = (email: string) => setForm((prev) => ({ ...prev, email }));
  const onChangePassword = (password: string) => setForm((prev) => ({ ...prev, password }));

  return {
    form,
    onChangeEmail,
    onChangePassword,
    login,
    error,
    loading,
  };
};

export default useLoginController;
