import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

function FormComponent({onCart}) {
  const [todoItem, setTodoItem] = useState('');
  return (
    <View style={styles.cartButtonContainer}>
      <TextInput
        testID="input"
        style={styles.TextInputStyle}
        placeholder="What are we doing today?"
        placeholderTextColor="#f5f5f5"
        onChangeText={(todo) => setTodoItem(todo)}></TextInput>
      <TouchableOpacity testID="button" onPress={() => onCart(todoItem)}>
        <Image source={require('../assets/add.png')} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  cartButtonContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    backgroundColor: '#ff9e80',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    bottom: 0,
    padding: 20,
  },
  TextInputStyle: {
    flex: 1,
    fontSize: 17,
    color: '#fff',
  },
  cartIcon: {
    width: 45,
    height: 45,
    tintColor: 'white',
  },
});
export {FormComponent};
