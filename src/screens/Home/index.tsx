import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './styles';
import Logo from '../components/Logo';
import Input from '../components/Input';

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <Input />
      <StatusBar style="auto" />
    </View>
  );
}
