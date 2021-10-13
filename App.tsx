import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Row from './components/Row';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#61dafb"
        barStyle="light-content" />

      <View style={styles.outputContainer}>
        <Text style={styles.outputText}>
        </Text>
      </View>

      <Row>
        <Button text="7" onPress={() => ''} />
        <Button text="8" onPress={() => ''} />
        <Button text="9" onPress={() => ''} />
        <Button text="÷" onPress={() => ''} theme="secondary" />
      </Row>

      <Row>
        <Button text="4" onPress={() => ''} />
        <Button text="5" onPress={() => ''} />
        <Button text="6" onPress={() => ''} />
        <Button text="×" onPress={() => ''} theme="secondary" />
      </Row>

      <Row>
        <Button text="1" onPress={() => ''} />
        <Button text="2" onPress={() => ''} />
        <Button text="3" onPress={() => ''} />
        <Button text="-" onPress={() => ''} theme="secondary" />
      </Row>

      <Row>
        <Button text="0" onPress={() => ''} />
        <Button text="." onPress={() => ''} />
        <Button text="⌫" onPress={() => ''} />
        <Button text="+" onPress={() => ''} theme="secondary" />
      </Row>

      <Row>
        <Button text="=" onPress={() => ''} theme="accent" />
      </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outputContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 15
  },
  outputText: {
    fontSize: 50
  }
});

export default App;