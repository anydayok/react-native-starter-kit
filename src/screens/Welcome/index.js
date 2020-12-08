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

const itemsMenu = ['Login', 'Registration', 'ResetPassword'];

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Welcome</Text>
          {itemsMenu.map((menu, index) => {
            return (
              <View style={styles.block} key={index}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate(menu)}>
                  <Text>Go to {menu} screen</Text>
                </TouchableWithoutFeedback>
              </View>
            );
          })}
          <Language />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
