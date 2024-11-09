import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import TodoCard from "@/components/TodoCard";

interface Todo {
  id: number;
  title: string;
  content: string;
}

const TodoApp = () => {
  const [value, setValue] = useState<{title: string; content: string}>({
    title: '',
    content: ''
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const onChangeValue = (label: string, text: string) => {
    setValue((prevValue) => ({
      ...prevValue,
      [label]: text
    }));
  };

  const onPress = () => {
    if (value.title === '' || value.content === '') {
      Alert.alert('Error', 'Please fill in both title and content');
      return;
    }

    if (editingId !== null) {
      // Update existing todo
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingId
            ? { ...todo, title: value.title, content: value.content }
            : todo
        )
      );
      setEditingId(null);
    } else {
      // Add new todo
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          title: value.title,
          content: value.content
        }
      ]);
    }
    setValue({ title: '', content: '' });
  };

  const deleteTodo = (id: number) => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete this todo?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => {
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
          },
          style: 'destructive'
        }
      ]
    );
  };

  const editTodo = (todo: Todo) => {
    setValue({ title: todo.title, content: todo.content });
    setEditingId(todo.id);
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
      >
        <Text onPress={() => deleteTodo(4)} className="text-3xl font-bold">
          Write a Todo to <Text className="text-primary">{`\nKeep-Track`}</Text>
        </Text>
        <View className="border border-secondary my-2" />
        
        <TextInput
          className="px-4 py-2 rounded-lg border border-primary mt-4"
          placeholder="Enter title"
          onChangeText={(text) => onChangeValue('title', text)}
          value={value.title}
        />
        
        <TextInput
          className="px-4 py-2 rounded-lg border border-primary mt-4"
          placeholder="Enter content"
          onChangeText={(text) => onChangeValue('content', text)}
          value={value.content}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity
          className="bg-primary px-4 py-2 rounded-full mt-4"
          onPress={onPress}
        >
          <Text className="text-center text-white font-semibold text-md">
            {editingId !== null ? 'Update Todo' : 'Add Todo'} 
            {editingId === null && <Text className="text-2xl"> +</Text>}
          </Text>
        </TouchableOpacity>

        {editingId !== null && (
          <TouchableOpacity
            className="bg-secondary px-4 py-2 rounded-full mt-2"
            onPress={() => {
              setEditingId(null);
              setValue({ title: '', content: '' });
            }}
          >
            <Text className="text-center text-white font-semibold text-md">
              Cancel Edit
            </Text>
          </TouchableOpacity>
        )}

        <View className="grid grid-cols-2 gap-x-4 gap-y-6 mt-10">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default TodoApp;