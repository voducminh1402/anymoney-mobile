import { View, Text, Image, Alert } from 'react-native';
import { styles } from './HomeStyle';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import IconButton from '../../components/IconButton/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/Wrapper/Container/Container';
import BaseScreen from '../BaseScreen/BaseScreen';
import SumUpCard from '../../components/InformationCard/SumUpCard/SumUpCard';

const onPressImage = () => {
  Alert.alert('Jack 97');
};

const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <BaseScreen>
        <>
          <ScreenHeader>
            <View style={styles.headerInner}>
              <View style={styles.logoWrapper}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={styles.logoWrapper.logoImage}
                />
                <Text style={styles.logoWrapper.logoText}>AnyMoney</Text>
              </View>
              <View style={styles.controllerButton}>
                <IconButton
                  style={styles.headerBellBtn}
                  icon={<FontAwesomeIcon icon={faBell} />}
                />
                <IconButton
                  onPress={onPressImage}
                  icon={
                    <Image
                      source={{
                        uri: 'https://trixie.com.vn/media/images/article/54801627/jack.jpeg',
                      }}
                      style={styles.controllerButton.buttonStyle}
                    />
                  }
                />
              </View>
            </View>
          </ScreenHeader>
          <Container>
            <View style={styles.totalInfo}>
              <SumUpCard title="$567.58" detail="You Owe" />
              <SumUpCard title="$826.43" detail="Owes You" />
            </View>
          </Container>
        </>
      </BaseScreen>
    </View>
  );
};

export default HomeScreen;
