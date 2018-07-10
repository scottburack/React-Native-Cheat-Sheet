import React, {Component} from 'react';
import {AppRegistry, Text, View, Slider, StyleSheet} from 'react-native';

export default class SliderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
          value: this.props.value,
          max: this.props.max,
          min: this.props.min,
          step: this.props.step
        }
    }

    static defaultProps = {
      value: 3
    }

    onValueChange = (value) => {
      this.setState({
        value: value,
        min: 0,
        max: 5,
        step: 1,
      })
    }

    onSlideComplete = (value) => {
      console.log("Complete: " + value);
    }

    render(){
        return (
        <View style={styles.container}>
            <Text>{this.state.value}</Text>
            <Slider
              maximumValue={this.state.max}
              minimumValue={this.state.min}
              step={this.state.step}
              value={this.state.value}
              onValueChange={(value) => this.onValueChange(value)}
              onSlidingComplete={(value) => this.onSlideComplete(value)}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});

AppRegistry.registerComponent('SliderComponent', () => SliderComponent);
