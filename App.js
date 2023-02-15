import { MyStack } from './Navigator/Stack';
import { UserActiveProvider } from './components/context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <UserActiveProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </UserActiveProvider>
  );
}