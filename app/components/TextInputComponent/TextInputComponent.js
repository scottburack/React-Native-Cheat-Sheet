import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput} from 'react-native';

export default class TextInputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
          value: this.props.value
        }
    }

    static defaultProps = {
      value: "Hello World!"
    }

    onChangeText = (value) => {
      this.setState({
        value: value
      })
    }

    onSubmitEditing = (event) => {
      console.log('onSubmitEditing Called: ' + event);
    }

    onBlur = (event) => {
      console.log('onBlur Called');
    }

    onFocus = (event) => {
      console.log('onFocus Called');
    }

    render(){
        return (
        <View>
            <TextInput
              placeholder="Type Something"
              value={this.state.value}
              maxLength={5}
              selectionColor= 'red'
              selectionTextOnFocus={false}
              editable={this.props.editable}
              onBlur={(event) => this.onBlur(event)}
              onFocus={(event) => this.onFocus(event)}
              onChangeText={(value) => this.onChangeText(value)}
              onSubmitEditing={(event) => this.onSubmitEditing(event.nativeEvent.text)}
            />
            <Text>{this.state.value}</Text>
        </View>
        )
    }
}

AppRegistry.registerComponent('TextInputComponent', () => BoilerComponent);
