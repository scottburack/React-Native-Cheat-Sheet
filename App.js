/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TabNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation'
import SimpleComponent1 from './app/components/SimpleComponent1/SimpleComponent1'
import TextInputComponent from './app/components/TextInputComponent/TextInputComponent'
import SliderComponent from './app/components/SliderComponent/SliderComponent'
import PickerComponent from './app/components/PickerComponent/PickerComponent'
import SwitchComponent from './app/components/SwitchComponent/SwitchComponent'
import StyledComponent from './app/components/StyledComponent/StyledComponent'
import FlexComponent from './app/components/FlexComponent/FlexComponent'
import FlexComponent2 from './app/components/FlexComponent2/FlexComponent2'
import TouchableComponent from './app/components/TouchableComponent/TouchableComponent'
import ButtonComponent from './app/components/ButtonComponent/ButtonComponent'
import ScrollViewComponent from './app/components/ScrollViewComponent/ScrollViewComponent'
import StatusBarComponent from './app/components/StatusBarComponent/StatusBarComponent'
import ToolbarAndroidComponent from './app/components/ToolbarAndroidComponent/ToolbarAndroidComponent'
import IconsComponent from './app/components/IconsComponent/IconsComponent'
import ListViewComponent from './app/components/ListViewComponent/ListViewComponent'
import FetchComponent from './app/components/FetchComponent/FetchComponent'
import SceneComponent1 from './app/components/SceneComponents/SceneComponent1'
import SceneComponent2 from './app/components/SceneComponents/SceneComponent2'
import AsyncStorageComponent from './app/components/AsyncStorageComponent/AsyncStorageComponent'
import CameraRollComponent from './app/components/CameraRollComponent/CameraRollComponent'
import GeolocationComponent from './app/components/GeolocationComponent/GeolocationComponent'
import ClipboardComponent from './app/components/ClipboardComponent/ClipboardComponent'
import ShareComponent from './app/components/ShareComponent/ShareComponent'

type Props = {};
// export default createBottomTabNavigator({
//   Tab1: {screen: SceneComponent1 },
//   Tab2: {screen: SceneComponent2 }
// })

export default class App extends Component<Props> {

  render() {
    return (
      <View>
        {/* <Text>
          Welcome to React Native!!!!!
        </Text>
        <SimpleComponent1 />
        <TextInputComponent editable={false}/>
        <TextInputComponent value="Testing123" editable={true}/>
        <Text>''</Text>
        <SliderComponent />
        <Text>''</Text>
        <PickerComponent />
        <Text>''</Text>
        <SwitchComponent />
        <Text>''</Text>
        <StyledComponent />
        <FlexComponent />
        <FlexComponent2 />
        <TouchableComponent />
        <Text>''</Text>
        <ButtonComponent />
        <Text>''</Text>
        <ScrollViewComponent />
        <StatusBarComponent barColor='pink'/>
        <ToolbarAndroidComponent />
        <IconsComponent />
        <ListViewComponent />
        <FetchComponent />
        <AsyncStorageComponent />
        <CameraRollComponent />
        <GeolocationComponent /> */}
        <ClipboardComponent />
        <ShareComponent />
      </View>
    );
  }
}
