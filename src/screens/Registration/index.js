import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './style';

const Registration = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Registration</Text>
      <View style={styles.block}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Registration;
