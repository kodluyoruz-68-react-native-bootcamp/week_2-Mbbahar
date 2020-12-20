import {StyleSheet, Dimensions} from 'react-native';

const todo_card_style = StyleSheet.create({
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
  
const formcomponent_style = StyleSheet.create({
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

export {todo_card_style, formcomponent_style};