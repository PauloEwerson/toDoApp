import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { PlusCircleOutlined, FormOutlined, LineOutlined } from '@ant-design/icons';

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
    setText('');
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
          value={text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddTask(text)}
        >
          <Text style={styles.buttonText}>
            <PlusCircleOutlined />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksInfo}>
        <Text style={styles.text}>
          Tarefas criadas: {countCreated}
        </Text>
        <Text style={styles.text}>
          Tarefas concluídas: {countCompleted}
        </Text>
      </View>

      {tasks.length === 0 ? (
        <View style={styles.list}>
          <View style={styles.line}>
            <LineOutlined style={styles.line} />
            <FormOutlined style={{
              fontSize: 34,
              color: 'white',
              marginBottom: 10
            }} />
            <Text style={styles.text}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.text}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={tasks}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() => handleCompleteTask(item.key)}>
              <Text style={{
                textDecorationLine: item.completed ? 'line-through' : 'none',
                color: '#fff',
                fontSize: 16
              }}>
                {item.text}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

    </View>
  );
};

export default TodoList;
