import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './src/Task';
// import Test from './src/Test';

export default function App() {
  return (
    <View>
      {/* <Text>WLCM to Nikhil nitn</Text> */}
      {/* <Test /> */}
      <Task />
      <StatusBar style="auto" />
    </View>
  );
}

