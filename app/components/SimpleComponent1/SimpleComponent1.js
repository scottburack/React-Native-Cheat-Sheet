import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class SimpleComponent1 extends Component {
  constructor() {
    super()
    this.state = {
      showMessage: true
    }
  }

  static defaultProps = {
    message: 'Hello Scott'
  }

  hideMsg = () => {
    this.setState({
      showMessage: false
    })
  }

  componentWillMount = () => {
    this.hideMsg()
  }

  render() {
    let msg = this.state.showMessage ? this.props.message : 'No Message';

    return (
      <View>
        <Text>{msg}</Text>
      </View>
    )
  }
}

SimpleComponent1.propTypes = {
  message: PropTypes.string
}

AppRegistry.registerComponent('SimpleComponent1', () => SimpleComponent1);
