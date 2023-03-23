import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './styles';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <StatusBar style="auto" />
    </View>
  );
}
