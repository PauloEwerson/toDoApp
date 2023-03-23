import { TextInput } from 'react-native';
import { styles } from './styles';

export default function Input() {
  return (
     <TextInput
      style={styles.inputText}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#6b6b6b"
     />
  );
}
