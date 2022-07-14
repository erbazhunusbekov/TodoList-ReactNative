import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import icon from './assets/favicon.png'

export default function App() {

  const [myText, setMyText] = useState('')
  const [todo, setTodo] = useState([])

  const addTodo = () => {
    setTodo([...todo, myText])
    setMyText('')
  }

  const delTodo = (t) => {
    setTodo(todo.filter((v) => t !== v))
  } 

  return (
    <View style={styles.cont}>
      {/* <View style={styles.container} >
        <Text style={styles.text}>
          Hello this is my first project in React Native!
        </Text>
        <TextInput
          value={myText}
          style={styles.inputStyle}
          onChangeText={(e) => setMyText(e)}
        />
        <Button
          onPress={() => addTodo()}
          title={'Add ToDo'}
        />

        {todo.map((v) => {
          return (
            <View>
              <Text onPress={() => delTodo(v)}>{v}</Text>
            </View>
          )
        })}

      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#fff',
    height: 100
  },
  text: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
  },
  inputStyle: {
    height: 30,
    borderColor: 'green',
    borderWidth: 1,
    width: 100 + '%',
  },
});
