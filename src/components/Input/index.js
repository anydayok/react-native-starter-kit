import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './style';

const Input = ({
  value,
  title,
  placeholder,
  onChangeText,
  onBlur,
  secureTextEntry,
  touched,
  error,
  onFocus,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        underlineColorAndroid="transparent"
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
