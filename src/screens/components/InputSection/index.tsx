import { View } from 'react-native';
import { styles } from './styles';
import Input from '../Input';
import Button from '../Button';

export default function InputSection() {
  return (
    <View style={styles.inputContainer}>
      <Input />
      <Button />
    </View>
  );
}
