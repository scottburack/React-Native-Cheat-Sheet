import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class SceneComponent2 extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    static navigationOptions = {
      title: "Screen 2"
    }


    render(){
        return (
        <View>
            <Text>Screen 2 Component</Text>
        </View>
        )
    }
}

AppRegistry.registerComponent('SceneComponent2', () => SceneComponent2);
