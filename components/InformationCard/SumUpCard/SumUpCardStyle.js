import { StyleSheet } from 'react-native';
import { colors, fontSize } from '../../../styles/CommonStyle';

export const styles = StyleSheet.create({
  default: {
    width: '48%',
    height: 120,
    backgroundColor: colors.BLACK,
    borderRadius: 30,
    overflow: 'hidden',
  },

  background: {
    flex: 1,
    width: null,
    height: null,
    padding: 20,
  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    height: '100%',
    gap: 7,
  },

  textHeader: {
    fontSize: fontSize.SIZE_24,
    color: colors.WHITE,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },

  textDetail: {
    color: colors.WHITE,
    fontSize: fontSize.SIZE_16,
  },
});
