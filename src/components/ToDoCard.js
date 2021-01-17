import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {todo_card_style } from "../styles/todo_style";

const ToDoCard = ({toDo, onDelete, onIsDone}) => {
  return (
    <TouchableOpacity
      testID="button"
      onPress={() => onIsDone(toDo.id)}
      onLongPress={() => onDelete(toDo.id)}>
      <View style={[todo_card_style.container, toDo.isDone && {opacity: 0.4}]}>
        <Image
          source={
            toDo.isDone
              ? require('../assets/check.png')
              : require('../assets/cross.png')
          }
          style={toDo.isDone ? todo_card_style.checkImage : todo_card_style.crossImage}
        />
        <Text style={todo_card_style.title}>{toDo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export {ToDoCard};
