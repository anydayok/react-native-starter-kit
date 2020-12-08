import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#e2e2e2',
    gray: '#bfbfbf',
    darkGray: '#959595',
    red: '#970B0E',
  },
  fonts: {
    size: {
      small: 14,
      normal: 16,
      large: 20,
    },
    weight: {
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    radius: {
      small: 5,
      normal: 10,
      large: 20,
    },
  },
  dimensions: {
    width,
    height,
  },
};

export default styles;
