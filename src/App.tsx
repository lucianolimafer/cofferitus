import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Recipes from './components/recipes';



export default function App() {
  return (
    <View style={styles.container}>
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
