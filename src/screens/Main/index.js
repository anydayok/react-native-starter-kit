import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Language from '../../components/Language';

import styles from './style';

const Main = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Main</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
