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
import List from './src/views/books/list';
import Detail from './src/views/books/detail';

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
            name='List'
            component={List}
            options={
              {title: 'Inicio'}
            }
          />
          <Stack.Screen
            name='Detail'
            component={Detail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
