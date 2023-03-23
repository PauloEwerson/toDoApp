import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export default function Logo() {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.imageRocket}
        source={require('../../../imgs/rocket.svg')}
      />
      <Text style={styles.to}>to</Text>
      <Text style={styles.do}>do</Text>
    </View>
  );
}
