import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeHolder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 w-full text-white font-psemibold text-base"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={(e) => handleChangeText(e)}
          secureTextEntry={title == "Password" ? !showPassword : false}
        />
      </View>
    </View>
  );
};

export default FormField;
