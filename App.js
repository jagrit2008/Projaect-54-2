import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/soundButton1';
import SoundButton2 from './components/soundButton2';
import SoundButton3 from './components/soundButton3';
import SoundButton4 from './components/soundButton4';
import SoundButton5 from './components/soundButton5';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <SoundButton />
        <SoundButton2 />
        <SoundButton3 />
        <SoundButton4 />
        <SoundButton5 />
      </View>
    );
  }
}
