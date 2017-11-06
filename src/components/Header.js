import React, { Component } from 'react';
import { Text, View, 
    StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

 class Header extends Component {
      render() {
        return (
            <View style={styles.addWord}>
            <Text/>
            <Text>MY WORDS</Text>
            <TouchableOpacity onPress={() => this.props.dispatch({ type: 'TOGGLE_IS_ADDING'})}>
            <Text>+</Text>
            </TouchableOpacity>
            
            </View>
        )
    }
}

var styles = {
    addWord: {
      flex:1, 
      backgroundColor:'#ffb3ff', 
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
    }
  };
  export default connect ()(Header);