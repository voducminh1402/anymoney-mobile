import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  fontFamily: 'outfit-light',
});

export const fontSize = {
  SIZE_14: 14,
  SIZE_20: 20,
};

export const colors = {
  WHITE: '#FFFFFF',
  WHITE_TRANSPARENT_05: 'rgba(255, 255, 255, 0.2)',
  BLACK: '#000000',
  BACKGROUND: '#008080',
  BORDER_GREY: '#E5E5E5',
  BLACK_TEXT: '#212121',
  MAIN_ORANGE: '#FF6447',
};

export const overlays = {
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayImage: {
    width: 100,
    height: 100,
    position: 'absolute',
  },
};

export const buttons = {
  border: {
    borderWidth: 1,
    borderColor: colors.BORDER_GREY,
  },
};

export const icons = {
  iconMediumSize: {
    width: 30,
    height: 30,
  },
};

export const wrappers = {
  wrapperRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
};
