import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1 },
});

export const colors = {
  WHITE: '#FFFFFF',
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
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
};
