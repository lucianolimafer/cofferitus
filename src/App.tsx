import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Recipes from './components/recipes';
import Posts from './components/posts';


export default function App() {
  return (
    <View style={styles.container}>
      <Posts/>
      <Recipes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fceac7',

  },
});
