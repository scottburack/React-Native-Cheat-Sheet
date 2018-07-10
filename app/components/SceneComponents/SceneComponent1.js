import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class SceneComponent1 extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    static navigationOptions = {
      title: "Screen 1"
    }

    render(){
        return (
        <View>
            <Text>Screen 1 Component</Text>
        </View>
        )
    }
}

AppRegistry.registerComponent('SceneComponent1', () => SceneComponent1);
