import React, { useState } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { ButtonProps } from './button';

import { styles } from './styles';

export default function Button({title, width, height}: ButtonProps) {
  const [onPress, setOnPress] = useState()

  return (
    <TouchableOpacity style={[styles.customButton, {width: width, height: height}]} onPress={onPress} >
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}