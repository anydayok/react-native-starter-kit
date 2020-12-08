import { StyleSheet } from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: styles.colors.white,
  },
  block: {
    marginTop: 15,
  },
  error: {
    marginTop: 30,
    fontSize: styles.fonts.size.normal,
    color: styles.colors.red,
  },
});
