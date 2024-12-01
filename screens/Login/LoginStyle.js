import { StyleSheet } from 'react-native';
import { colors, wrappers, buttons } from '../../styles/CommonStyle';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.WHITE,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: colors.WHITE,
    fontSize: 50,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    top: '35%',
  },

  backgroundImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },

  loginArea: {
    backgroundColor: colors.WHITE,
    height: '35%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    alignItems: 'center',
  },

  actionButtonArea: {
    ...wrappers.wrapper,
    marginTop: 30,
  },

  actionButton: {
    marginVertical: 10,
    ...buttons.border,
  },

  noteTerms: {
    position: 'absolute',
    bottom: 40,
    display: 'flex',
    flexDirection: 'row',
  },

  term: {
    fontFamily: 'outfit-light',
    marginHorizontal: 10,
  },
});
