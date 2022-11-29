import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1144AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Book Store App!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
