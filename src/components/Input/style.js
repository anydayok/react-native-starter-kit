// @flow
import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    width: '90%',
  },
  title: {
    fontSize: styles.fonts.size.normal,
  },
  textInput: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: styles.colors.darkGray,
    backgroundColor: styles.colors.white,
    color: styles.colors.black,
    fontSize: styles.fonts.size.normal,
  },
  error: {
    marginTop: 10,
    fontSize: styles.fonts.size.normal,
    color: styles.colors.red,
  },
});
