import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#fff',
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: 'white',
    marginTop: 10,
  },
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
    marginBottom: 16,
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
    backgroundColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText : {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  tasksInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  list: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#1F1E25',
    marginBottom: 12,
  }
});