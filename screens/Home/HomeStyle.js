import { StyleSheet } from 'react-native';
import { colors, fontSize, wrappers } from '../../styles/CommonStyle';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.MAIN_ORANGE,
    height: '100%',
  },

  logoWrapper: {
    ...wrappers.wrapperRow,

    logoImage: {
      width: 35,
      height: 35,
      marginRight: 5,
    },

    logoText: {
      color: colors.WHITE,
      fontSize: fontSize.SIZE_20,
      fontFamily: 'outfit-bold',
    },
  },

  controllerButton: {
    ...wrappers.wrapperRow,
    gap: 5,

    buttonStyle: {
      width: '100%',
      height: '100%',
    },
  },

  headerInner: {
    ...wrappers.wrapperRow,
    justifyContent: 'space-between',
  },
});
