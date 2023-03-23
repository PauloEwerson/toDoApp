import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function Button() {
  return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Clicou no botão')}
      >
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
  );
}
