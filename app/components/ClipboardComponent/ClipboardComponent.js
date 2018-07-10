import React, {Component} from 'react';
import {AppRegistry, Text, View, Clipboard} from 'react-native';

export default class ClipboardComponent extends Component{
    constructor(){
        super();
        this.state = {
          text: 'Nothing'
        }
    }

    setClipboardText = () => {
      Clipboard.setString('Hello from clipboard')
      Clipboard.getString().then((text) => {
        this.setState({
          text
        })
      })
    }

    render(){
        return (
        <View>
            <Text onPress={this.setClipboardText}>
              Tap here
            </Text>
            <Text style={{color:'green', margin:20}}>
              {this.state.text}
            </Text>
        </View>
        )
    }
}

AppRegistry.registerComponent('ClipboardComponent', () => ClipboardComponent);
