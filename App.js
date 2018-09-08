import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Share from 'react-native-share';

const optionsCamera = {
  quality: 1.0,
  maxWidth: 1920,
  maxHeight: 1080,
  storageOptions: {
    cameraRoll: true,
    skipBackup: false,
    waitUntilSaved: true,
  },
};

const optionsLibrary = {
  quality: 1.0,
  maxWidth: 1920,
  maxHeight: 1080,
  storageOptions: {
    skipBackup: true,
  },
};

export default class App extends Component {

  openCamera = (social) => {
    // Launch Camera:
    ImagePicker.launchCamera(optionsCamera, (response) => {
      if (response.didCancel || response.error) return;

      const shareOptions = {
        url: response.uri,
        social: social === 'instagram' ? Share.Social.INSTAGRAM : Share.Social.FACEBOOK
      };

      Share.shareSingle(shareOptions);
    });
  }

  openFileBrowser = (social) => {
    // Open Image Library:
    ImagePicker.launchImageLibrary(optionsLibrary, (response) => {
      if (response.didCancel || response.error) return;

      const shareOptions = {
        url: response.uri,
        social: social === 'instagram' ? Share.Social.INSTAGRAM : Share.Social.FACEBOOK
      };

      Share.shareSingle(shareOptions);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => this.openCamera('facebook')}>
          <Text>Share Live Photo on Facebook</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.openCamera('instagram')}>
          <Text>Share Live Photo on Instagram</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.openFileBrowser('facebook')}>
          <Text>Share Local Image on Facebook</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.openFileBrowser('instagram')}>
          <Text>Share Local Image on Instagram</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    margin: 20
  }
});
