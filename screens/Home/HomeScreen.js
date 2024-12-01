import { Image, View } from 'react-native';
import { styles } from './HomeStyle';

const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <View>
        <Image source={require('../../assets/icons/notification-bell.png')} />
      </View>
    </View>
  );
};

export default HomeScreen;
