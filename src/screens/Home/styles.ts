import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    alignItems: 'center',
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    color: '#fff',
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText : {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});