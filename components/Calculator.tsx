import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import Row from './Row';

const styles = StyleSheet.create({
  outputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 15
  },
  outputText: {
    fontSize: 50
  }
});

export const Calculator = () => {
  const [operand, setOperand] = useState('0');
  const [storedOperand, setStoredOperand] = useState('');
  const [operator, setOperator] = useState('');

  const handleResetState = () => {
    setOperand('0');
    setStoredOperand('');
    setOperator('');
  };

  const handleOperand = (value: string) => {
    if (operand === '0') {
      setOperand(value);
    }

    setOperand(operand + value);
  };

  const handleOperator = (type: string) => {
    setOperator(type);
    setStoredOperand(operand);
    setOperand('0');
  };

  const handleBackspace = () => {
     if (operand !== '') {
       const deletedNumber = operand.slice(0, operand.length - 1);
       setOperand(deletedNumber);
     }
  };

  const handleMath = () => {
    if (operator === '+') {
      setOperand(`${parseFloat(storedOperand) + parseFloat(operand)}`);
    }

    if (operator === '-') {
      setOperand(`${parseFloat(storedOperand) - parseFloat(operand)}`);
    }

    if (operator === '*') {
      setOperand(`${parseFloat(storedOperand) * parseFloat(operand)}`);
    }

    if (operator === '/') {
      setOperand(`${parseFloat(storedOperand) / parseFloat(operand)}`);
    }
  };

  const handleTap = (type: string, value: string = '') => {
    switch (type) {
      case 'number':
        handleOperand(value);
        break;
      case 'operator':
        handleOperator(value);
        break;
      case 'calculate':
        handleMath();
        break;
      case 'clear':
        handleResetState(); 
        break;
      case 'del':
        handleBackspace();
        break;
      default:
        break;
    }
  }

  return (
    <>
    <View style={styles.outputContainer}>
      <Text style={styles.outputText}>
        {parseFloat(operand).toLocaleString()}
      </Text>
    </View>

    <Row>
      <Button text="7" onPress={() => handleTap('number', '7')} />
      <Button text="8" onPress={() => handleTap('number', '8')} />
      <Button text="9" onPress={() => handleTap('number', '9')} />
      <Button text="÷" onPress={() => handleTap('operator', '/')} theme="secondary" />
    </Row>

    <Row>
      <Button text="4" onPress={() => handleTap('number', '4')} />
      <Button text="5" onPress={() => handleTap('number', '5')} />
      <Button text="6" onPress={() => handleTap('number', '6')} />
      <Button text="×" onPress={() => handleTap('operator', '*')} theme="secondary" />
    </Row>

    <Row>
      <Button text="1" onPress={() => handleTap('number', '1')} />
      <Button text="2" onPress={() => handleTap('number', '2')} />
      <Button text="3" onPress={() => handleTap('number', '3')} />
      <Button text="-" onPress={() => handleTap('operator', '-')} theme="secondary" />
    </Row>

    <Row>
      <Button text="." onPress={() => handleTap('number', '.')} />
      <Button text="0" onPress={() => handleTap('number', '0')} />
      <Button text="=" onPress={() => handleTap('calculate')} />
      <Button text="+" onPress={() => handleTap('operator', '+')} theme="secondary" />
    </Row>

    <Row>
      <Button text="C" onPress={() => handleTap('clear')} theme="accent" size="large" />
      <Button text="Del" onPress={() => handleTap('del')} theme="accent" size="large" />
    </Row>    
    </>
  );
};