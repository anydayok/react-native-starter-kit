// @flow
import { StyleSheet } from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    marginTop: 25,
    width: '90%',
  },
  button: {
    height: 55,
    backgroundColor: styles.colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: styles.colors.white,
    fontSize: styles.fonts.size.normal,
    fontWeight: styles.fonts.weight.medium,
  },
});
