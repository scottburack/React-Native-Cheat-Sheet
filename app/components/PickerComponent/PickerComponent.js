import React, {Component} from 'react';
import {AppRegistry, Text, View, Picker} from 'react-native';

export default class PickerComponent extends Component{
    constructor(){
        super();
        this.state = {
          category: 'Technology'
        }
    }

    onValueChange = value => {
      this.setState({
        category: value
      })
    }

    render(){
        return (
        <View>
            <Text>Selected: {this.state.category}</Text>
            <Picker
              selectedValue={this.state.category}
              onValueChange={(value) => this.onValueChange(value)}
              prompt="Category"
              mode="dropdown"
            >
              <item label="Technology" value="technology"/>
              <item label="Business" value="business"/>
              <item label="Cooking" value="cooking"/>
            </Picker>
        </View>
        )
    }
}

AppRegistry.registerComponent('PickerComponent', () => PickerComponent);
