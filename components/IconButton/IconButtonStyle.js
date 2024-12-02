import { StyleSheet } from 'react-native';
import { colors, icons } from '../../styles/CommonStyle';

export const styles = StyleSheet.create({
  iconSize: {
    ...icons.iconMediumSize,
    float: 'left',
  },

  iconButton: {
    display: 'flex',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE_TRANSPARENT_05,
    overflow: 'hidden',
  },
});
