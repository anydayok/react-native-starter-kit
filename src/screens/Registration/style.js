import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: styles.colors.backgroundPrimary,
  },
  h1: {
    ...styles.texts.h1,
  },
  block: {
    marginTop: 15,
  },
});
