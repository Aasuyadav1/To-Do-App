import { View, Text, TextInput } from "react-native";
import React from "react";

interface InputProps {
  onChangeValue: (label: string,text: string) => void;
  value: string;
  label: string;
}

const Input = ({ onChangeValue, value, label, ...props }: InputProps) => {
  return (
    <View className="mt-4">
      <TextInput
      {...props}
      style={{borderColor: '#0f766e'}}
        className="px-4 py-2 rounded-lg border !border-primary active:!border-primary active:ring-inherit "
        onChangeText={(text) => onChangeValue(label,text)}
        value={value}
        placeholder="Enter Title"
        keyboardType="default"
      />
    </View>
  );
};

export default Input;
