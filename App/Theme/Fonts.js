import { Platform } from 'react-native';

const size = {
  h1: 50,
  h2: 32,
  h3: 18,
  input: 18,
  regular: 18,
  medium: 16,
  small: 14,
}

const family = Platform.select({
  ios: {
    bold: 'AppleSDGothicNeo-Bold',
    medium: 'AppleSDGothicNeo-Medium',
    regular: 'AppleSDGothicNeo-Regular',
    light: 'AppleSDGothicNeo-Light',
  },
  android: {
    bold: 'apple-sd-gothic-neo-bold',
    medium: 'apple-sd-gothic-neo-medium',
    regular: 'apple-sd-gothic-neo-regular',
    light: 'apple-sd-gothic-neo-light',
  }
})

export default {
  size, family,
}
