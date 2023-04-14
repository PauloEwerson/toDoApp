import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Task {
  key: string;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [countCreated, setCountCreated] = useState<number>(0);
  const [countCompleted, setCountCompleted] = useState<number>(0);

  const handleAddTask = (text: string): void => {
    setTasks([...tasks, { key: Date.now().toString(), text: text, completed: false }]);
    setCountCreated(countCreated + 1);
  };

  const handleCompleteTask = (key: string): void => {
    const updatedTasks = tasks.map((task) => {
      if (task.key === key) {
        task.completed = !task.completed;
        setCountCompleted(task.completed ? countCompleted + 1 : countCompleted - 1);
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar nova tarefa"
          placeholderTextColor={'#999'}
          onChangeText={(text) => setText(text)
          }
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddTask(text)}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Text>Tarefas criadas: {countCreated}</Text>
      <Text>Tarefas concluídas: {countCompleted}</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCompleteTask(item.key)}>
            <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TodoList;
