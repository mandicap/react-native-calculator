import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Calculator } from './components/Calculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#61dafb"
        barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;