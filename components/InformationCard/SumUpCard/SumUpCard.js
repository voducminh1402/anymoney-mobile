import React from 'react';
import { styles } from './SumUpCardStyle';
import PropTypes from 'prop-types';
import { ImageBackground, View, Text } from 'react-native';

export default function SumUpCard(props) {
  const { background, title, detail } = props;

  const defaultBg =
    'https://img.freepik.com/free-photo/abstract-luxury-blur-dark-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-54562.jpg';

  return (
    <View style={styles.default}>
      <ImageBackground
        source={{ uri: background || defaultBg }}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.textHeader}>{title}</Text>
          <Text style={styles.textDetail}>{detail}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

SumUpCard.propTypes = {
  background: PropTypes.object,
  title: PropTypes.string,
  detail: PropTypes.string,
};
