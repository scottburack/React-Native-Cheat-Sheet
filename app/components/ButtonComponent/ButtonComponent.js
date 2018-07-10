import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, Alert} from 'react-native';

const alertMessage = 'This is your message!'

export default class ButtonComponent extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    btnPress = () => {
      Alert.alert('Alert Title', alertMessage, [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'Okay', onPress: () => console.log('Okay Pressed!')}
      ])
    }

    render(){
        return (
        <View>
            <Text>Button Component</Text>
            <Button
              title="Learn More"
              color="indigo"
              accessibilityLabel="This is a standard button"
              onPress={this.btnPress}
            />
            <Button
              title="Learn More"
              color="coral"
              disabled={true}
              accessibilityLabel="This is a standard button"
              onPress={this.btnPress}
            />
            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
            <Button
              title="Learn More"
              color="indigo"
              accessibilityLabel="This is a standard button"
              onPress={this.btnPress}
            />
            <Button
              title="Learn More"
              color="coral"
              accessibilityLabel="This is a standard button"
              onPress={this.btnPress}
            />
            </View>
        </View>
        )
    }
}

AppRegistry.registerComponent('ButtonComponent', () => ButtonComponent);
