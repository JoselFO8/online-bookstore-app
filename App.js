import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

// Components
import Home from './src/views/home';
import Library from './src/views/library';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1144AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={
              {title: 'Inicio'}
            }
          />
          <Stack.Screen
            name='Library'
            component={Library}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
