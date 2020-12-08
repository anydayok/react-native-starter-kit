import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: styles.colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: styles.colors.white,
  },
  block: {
    marginTop: 15,
  },
  logout: {
    marginTop: 20,
  },
});
