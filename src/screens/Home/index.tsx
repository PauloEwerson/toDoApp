import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './styles';
import Logo from '../components/Logo';
import InputSection from '../components/InputSection';

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <InputSection />
      <StatusBar style="auto" />
    </View>
  );
}
