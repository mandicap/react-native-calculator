import React from 'react';
import { Dimensions, GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';

const screen = Dimensions.get('window');
const btnWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 24
  },
  btn: {
    backgroundColor: '#fff',
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Math.floor(btnWidth - 10),
    width: btnWidth
  },
  btnLarge: {
    width: (screen.width / 2) - 10,
    flex: 0,
    alignItems: 'center',
    marginHorizontal: 2
  },
  textSecondary: { color: '#61dafb' },
  textAccent: { color: '#fff' },
  btnSecondary: { backgroundColor: '#eee' },
  btnAccent: { backgroundColor: '#61dafb' }    
});

export default ({ onPress, text, size, theme } : {
  onPress: ((event: GestureResponderEvent) => void),
  text: string,
  size?: string,
  theme?: string
}) => {
  const btnStyles: any[] = [styles.btn];
  const textStyles: any[] = [styles.text];

  if (size === 'large') { btnStyles.push(styles.btnLarge) }

  if (theme === 'secondary') {
    btnStyles.push(styles.btnSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    btnStyles.push(styles.btnAccent);
    textStyles.push(styles.textAccent);
  }

  return (
    <Pressable onPress={onPress} style={btnStyles}>
      <Text style={textStyles}>{text}</Text>
    </Pressable>
  );
};
