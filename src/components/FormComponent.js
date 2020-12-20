import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {formcomponent_style } from "../styles/todo_style";

function FormComponent({onCart}) {
  const [todoItem, setTodoItem] = useState('');
  return (
    <View style={formcomponent_style.cartButtonContainer}>
      <TextInput
        testID="input"
        style={formcomponent_style.TextInputStyle}
        placeholder= "What are we doing today?"
        placeholderTextColor="#f5f5f5"
        onChangeText={(todo) => setTodoItem(todo)}></TextInput>
      <TouchableOpacity testID="button" onPress={() => onCart(todoItem)}>
        <Image source={require('../assets/add.png')} style={formcomponent_style.cartIcon} />
      </TouchableOpacity>
    </View>
  );
}

export {FormComponent};
