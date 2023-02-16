import { MyStack } from './Navigator/Stack';
import { AuthProvider, InsertProvider, UserActiveProvider, UserDataProvider } from './components/context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <UserDataProvider>
      <AuthProvider>
        <InsertProvider>
          <UserActiveProvider>
            <NavigationContainer>
              <MyStack />
            </NavigationContainer>
          </UserActiveProvider>
        </InsertProvider>
      </AuthProvider>
    </UserDataProvider>
  );
}