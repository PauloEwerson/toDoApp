import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  PlusCircleOutlined,
  FormOutlined,
  LineOutlined,
} from '@ant-design/icons';
import { styles } from './styles';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [createdCount, setCreatedCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const handleAddTask = () => {
    if (text.trim() !== '') {
      const newTask: Task = {
        id: Date.now().toString(),
        text: text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setCreatedCount(createdCount + 1);
      setText('');
    }
  };

  const handleCompleteTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
    setCompletedCount(
      updatedTasks.filter((task) => task.completed).length
    );
  };

  const renderEmptyList = () => (
    <View style={styles.list}>
      <View style={styles.line}>
        <LineOutlined style={styles.line} />
        <FormOutlined
          style={{
            fontSize: 34,
            color: 'white',
            marginBottom: 10,
          }}
        />
        <Text style={styles.text}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => handleCompleteTask(item.id)}
    >
      <Text
        style={[
          styles.taskText,
          item.completed && styles.completedTaskText,
        ]}
      >
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar nova tarefa"
          placeholderTextColor={'#999'}
          onChangeText={setText}
          value={text}
          onSubmitEditing={handleAddTask}
          blurOnSubmit={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTask}
        >
          <Text style={styles.buttonText}>
            <PlusCircleOutlined />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksInfo}>
        <Text style={styles.text}>
          Tarefas criadas: {createdCount}
        </Text>
        <Text style={styles.text}>
          Tarefas concluídas: {completedCount}
        </Text>
      </View>

      {tasks.length === 0 ? (
        renderEmptyList()
      ) : (
        <FlatList
          style={styles.list}
          data={tasks}
          renderItem={renderTask}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default TodoList;
