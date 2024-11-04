import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "@/components/Input";
import TodoCard from "@/components/TodoCard";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const TodoApp = () => {
  const [value, setValue] = useState<{title:string,content:string}>({title:'',content:''});
  const [todos, setTodos] = useState<{id: number,title: string, content: string}[]>([])

  const onChangeValue = (label:string,text: string) => {
    setValue((prevValue) => ({
      ...prevValue,
      [label]: text
    }));
  };

  const onPress = () => {
    console.log("pressed the btn", value);
    if(value.title == '' || value.content == ''){
      return
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        title: value.title,
        content: value.content
      }
    ]);
    setValue({title:'',content:''});
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
      >
        <Text className="text-3xl font-bold ">
          Write a Todo to <Text className="text-primary">{`\nKeep-Track`}</Text>
        </Text>
        <View className="border border-secondary my-2" />
        <Input label="title" value={value.title} onChangeValue={onChangeValue}  />
        <Input label="content" value={value.content} onChangeValue={onChangeValue}   />
        <TouchableOpacity
          className="bg-primary px-4 py-2 rounded-full text-center mt-4"
          onPress={onPress}
        >
          <Text className="text-center text-white font-semibold text-md flex justify-center items-center gap-2 w-full">
            Add Todo <Text className="text-2xl text-center">+</Text>
          </Text>
        </TouchableOpacity>
        <View className="grid grid-cols-2 gap-x-4 gap-y-6 mt-10">
          {todos.map((todo) => (
            <TodoCard key={todo.id} title={todo.title} content={todo.content} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoApp;