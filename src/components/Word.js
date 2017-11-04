import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {
  render() {
    const { en, vn, memorized } = this.props.myWord;
    const textDecorationLine = memorized ? 'line-through': 'none';
    return (
      <View style={styles.container}>
          <Text style={{textDecorationLine}}>{en}</Text>
          <Text>{vn}</Text>
      </View>
      
    );
  }
}
var styles = StyleSheet.create({
  container: {
       backgroundColor: '#ffe6e6',
       padding: 10, 
       margin: 15
       
  },

  header:{
    justifyContent: 'center',
     alignItems: 'center',
  }
});
// state cua store
// bien MState thi phai luon tra ve doi tuong


  export default connect()(Word);