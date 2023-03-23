import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './styles';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.containerInput}>
        <Input />
        <Button />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
