import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {
    memorizedWord(){
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.myWord.id
        });
    }
    isShow(){
        this.props.dispatch({
            type: 'TOGGLE_SHOW',
            id: this.props.myWord.id
        });
    }
  render() {
    const { en, vn, memorized, isShow } = this.props.myWord;
    const textDecorationLine = memorized ? 'line-through': 'none';
    const toggleMemorizedText = memorized ? 'Forget': 'Memorized';
    const meaning = isShow ? vn : '------';
    return (
      <View style={styles.container}>
          <Text style={{textDecorationLine}}>{en}</Text>
          <Text>{meaning}</Text>
          <View style={styles.controller}>
              <TouchableOpacity style={styles.button} onPress={this.memorizedWord.bind(this)}>
                  <Text>{toggleMemorizedText}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} 
              onPress={this.isShow.bind(this)}
              >
                  <Text>Show</Text>
              </TouchableOpacity>

          </View>
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
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button : { 
    backgroundColor: '#F5F5F5',
    padding: 10 
  }

});
// state cua store
// bien MState thi phai luon tra ve doi tuong


  export default connect()(Word);