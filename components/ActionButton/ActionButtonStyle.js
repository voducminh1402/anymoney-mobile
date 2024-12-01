import { StyleSheet } from 'react-native';
import { icons, colors } from '../../styles/CommonStyle';

export const styles = StyleSheet.create({
  iconSize: {
    ...icons.iconMediumSize,
    float: 'left',
  },

  actionButton: {
    backgroundColor: colors.WHITE,
    display: 'flex',
    flexDirection: 'row',
    width: '85%',
    borderRadius: 35,
    padding: 10,
    alignItems: 'center',
  },

  actionText: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    width: '100%',
    color: colors.BLACK_TEXT,
    textAlign: 'center',
  },
});
