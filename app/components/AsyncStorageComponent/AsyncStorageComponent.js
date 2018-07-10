import React, {Component} from 'react';
import {AppRegistry, Text, View, AsyncStorage, TextInput} from 'react-native';

const todos = [
  {name: 'Todo 1'},
  {name: 'Todo 2'},
  {name: 'Todo 3'}
]

export default class AsyncStorageComponent extends Component{
    constructor(){
        super();
        this.state = {
          name: ''
        }
    }

    saveName = (value) => {
      AsyncStorage.setItem('name', value)
      this.setState({
        name: value
      })
    }

    getName = () => {
      AsyncStorage.getItem('name').then((value) => {
        this.setState({
          name: value
        })
      })
    }

    saveTodos = () => {
      AsyncStorage.setItem('todos', JSON.stringify(todos))
    }

    getTodos = () => {
      AsyncStorage.getItem('todos').then((value) => {
        console.log(JSON.parse(value));
      })
    }

    componentWillMount = () => {
      this.getName()
      this.saveTodos()
      this.getTodos()
    }

    render(){
        return (
        <View>
            <Text>Current Name: {this.state.name}</Text>
            <TextInput
              placeholder="Type Name"
              onSubmitEditing={(event) => this.saveName(event.nativeEvent.text)}
            />
        </View>
        )
    }
}

AppRegistry.registerComponent('AsyncStorageComponent', () => AsyncStorageComponent);
