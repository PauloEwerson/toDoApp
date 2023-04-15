import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#fff',
  },
  line: {
    borderTopWidth: 2,
    borderTopColor: '#1F1E25',
    marginTop: 10,
    padding: 16
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
  onTaskContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  deleteButton: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#E83F5B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText : {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButton: {
    height: 56,
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 12,
  },
  updateButtonText: {
    color: '#4EA8DE',
    fontSize: 16,
  },

  tasksInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  noTasksContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noTasksText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  noTasksDescription: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },

  list: {
    flex: 1,
    width: '100%',
    // borderTopWidth: 1,
    // borderTopColor: 'white',
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#1F1E25',
    borderBottomWidth: 1,
    borderBottomColor: '#4EA8DE',
    borderRadius: 5,
    fontSize: 16,
    marginRight: 12,
  },
  taskText: {
    color: '#fff',
    fontSize: 16,
  },
  completedTaskText: {
    color: '#4EA8DE',
    textDecorationLine: 'line-through',
  },
});
