import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/authContext/AuthContext';
import ContainerStackNavigation from './src/navigation/ContainerStackNavigation';

export default function App() {
  return (
    <AppState>
      <NavigationContainer>
        <ContainerStackNavigation />
      </NavigationContainer>
    </AppState>
  );
}

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
