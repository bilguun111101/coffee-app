import { MyStack } from './Navigator/Stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, InsertProvider, UserActiveProvider, UserDataProvider } from './components/context';
import { DetailDataProvider } from './components/context/Detail/Detail_data';

export default function App() {
  return (
    <AuthProvider>
      <DetailDataProvider>
        <UserDataProvider>
            <InsertProvider>
              <UserActiveProvider>
                <NavigationContainer>
                  <MyStack />
                </NavigationContainer>
              </UserActiveProvider>
            </InsertProvider>
        </UserDataProvider>
      </DetailDataProvider>
    </AuthProvider>
  );
}