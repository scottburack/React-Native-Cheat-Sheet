import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Share, TouchableHighlight} from 'react-native';

export default class ShareComponent extends Component{
    constructor(){
        super();
        this.state = {
          result: ''
        }
    }

    shareMessage = () => {
      Share.share({
        message: 'Hey whats is up ma dude?'
      })
      .then(this.showResult)
      .catch((error) => this.setState({result:'error: ' + error.message}))
    }

    showResult = () => {
      if (result.action === Share.shareAction) {
        this.setState({
          result: 'Shared'
        })
      } else if (result.action === Share.dismissedAction) {
        this.setState({
          result: 'Dismissed'
        })
      }
    }

    render(){
        return (
        <View>
            <TouchableHighlight style={styles.wrap}
              onPress={this.shareMessage}>
              <View style={styles.button}>
                <Text> Share Message </Text>
              </View>
            </TouchableHighlight>
            <Text>{this.state.result}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 5
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10
  }
})

AppRegistry.registerComponent('ShareComponent', () => ShareComponent);
