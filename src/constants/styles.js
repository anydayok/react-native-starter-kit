import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = {
  colors: {
    backgroundPrimary: '#f7f7f7',
    backgroundSecondary: '#e8e8e8',
    backgroundTertiary: '#ffffff',
    bodyPrimary: '#242424',
    bodySecondary: '#363636',
    accentPrimary: '#ccff00',
    accentSecondary: '#04e4d7',
    negative: '#ef7c58',
    positive: '#e2ff6d',
    buttonPrimary: '#5e5e5e',
  },
  texts: {
    h1: {
      color: '#1c1c1c',
      fontSize: 40,
      fontFamily: 'Roboto-Bold',
    },
    h2: {
      color: '#1c1c1c',
      fontSize: 30,
      fontFamily: 'Roboto-Bold',
    },
    body1: {
      color: '#3b3b3b',
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    body2: {
      color: '#3b3b3b',
      fontSize: 20,
      fontFamily: 'Roboto-Regular',
    },
    button1: {
      color: '#ffffff',
      fontSize: 16,
    },
    error: {
      color: '#ef7c58',
      fontSize: 16,
    },
  },
  radius: {
    small: 5,
    normal: 10,
    large: 20,
  },
  dimensions: {
    width,
    height,
  },
};

export default styles;
