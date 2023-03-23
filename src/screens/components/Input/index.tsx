import { TextInput } from 'react-native';
import { styles } from './styles';

export default function Input() {
  return (
     <TextInput
      style={styles.inputText}
      placeholder="Digite seu nome"
      placeholderTextColor="#6b6b6b"
     />
  );
}
