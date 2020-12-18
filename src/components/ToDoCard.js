import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const ToDoCard = ({toDo, onDelete, onIsDone}) => {
  return (
    <TouchableOpacity
      testID="button"
      onPress={() => onIsDone(toDo.id)}
      onLongPress={() => onDelete(toDo.id)}>
      <View style={[styles.container, toDo.isDone && {opacity: 0.4}]}>
        <Image
          source={
            toDo.isDone
              ? require('../assets/check.png')
              : require('../assets/cross.png')
          }
          style={toDo.isDone ? styles.checkImage : styles.crossImage}
        />
        <Text style={styles.title}>{toDo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 20,
    shadowOpacity: 0.3,
    flexDirection: 'row',
  },
  title: {
    marginVertical: 5,
    marginLeft: 10
  },
  crossImage: {
    width: 30,
    height: 30,
    tintColor: '#c41c00',
  },
  checkImage: {
    width: 30,
    height: 30,
    tintColor: 'green',
  },
});

export {ToDoCard};
