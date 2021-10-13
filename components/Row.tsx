import React from 'react';
import { View } from 'react-native';

export default ({ children } : { children?: React.ReactNode }) => (
  <View style={{ flexDirection: 'row' }}>
    {children}      
  </View>
);
