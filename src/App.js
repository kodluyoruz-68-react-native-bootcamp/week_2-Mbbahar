import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */
import {ToDoCard} from './components';
import {FormComponent} from './components';

function App() {
  const [toDoList, settoDoList] = useState([]);
  const rendertoDo = ({item}) => (
    <ToDoCard toDo={item} onDelete={deleteToItem} onIsDone={updateToItem} />
  );

  useEffect(() => {
    settoDoList(toDoList);
  }, []);

  function addToCart(title) {
    if (!title) {
      return;
    }
    settoDoList([
      ...toDoList,
      {id: toDoList.length, title: title, isDone: false},
    ]);
  }
  function deleteToItem(id) {
    const newList = toDoList.filter((item) => item.id !== id);
    settoDoList(newList);
  }
  function updateToItem(id) {
    const changedToDo = toDoList.find((item) => item.id == id);
    changedToDo.isDone = !changedToDo.isDone;
    settoDoList([
      ...toDoList.map((item) => (item.id == id ? changedToDo : item)),
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ff9e80'}}>
            TODO
          </Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ff9e80'}}>
            {toDoList.length}
          </Text>
        </View>
        <FlatList
          testID="list"
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              There is nothing to do, you can lie down..
            </Text>
          }
          keyExtractor={(item, index) => index.toString()}
          data={toDoList}
          renderItem={rendertoDo}
        />

        <FormComponent onCart={addToCart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  emptyText: {
    alignSelf: 'center',
    color: 'gray',
    fontSize: 20,
  },
});

export default App;
