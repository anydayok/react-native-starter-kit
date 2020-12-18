import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: styles.colors.backgroundSecondary,
  },
  container: {
    alignItems: 'center',
    paddingTop: 50,
  },
  block: {
    marginTop: 15,
  },
  h1: {
    ...styles.texts.h1,
  },
  text: {
    ...styles.texts.body1,
  },
});
