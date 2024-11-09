import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter, usePathname } from 'expo-router'
import { Link } from 'expo-router'

interface Todo {
  id: number;
  title: string;
  content: string;
}

interface TodoCardProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

const TodoCard = ({ todo, onDelete, onEdit }: TodoCardProps) => {
  return (
    <View className="border p-2 rounded-xl border-primary bg-accent">
      <Text className="font-semibold text-black text-lg line-clamp-1">
        {todo.title}
      </Text>
      <View className="border border-primary/80 mt-2" />
      <Text className="mt-2 text-base">{todo.content}</Text>
      
      <View className="flex-row justify-end space-x-2 mt-4">
        <TouchableOpacity
          className="bg-blue-500 px-3 py-1 rounded-lg"
          onPress={() => onEdit(todo)}
        >
          <Text className="text-white">Edit</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          className="bg-red-500 px-3 py-1 rounded-lg"
          onPress={() => onDelete(todo.id)}
        >
          <Text className="text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TodoCard