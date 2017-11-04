import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Filter from './Filter';
class Main extends Component {
  render() {
   
    return (
      <View style={styles.container}>
       <Image source={require('../images/bgdemo.jpeg')} 
       style={styles.backgroundImage}> 
        <View style={{flex:10}}>
       <FlatList         
          data={this.props.myWords}
          renderItem={({item}) => <Word myWord={item}/>}
          keyExtractor={item => item.id}
       />
       </View> 
       <Filter/>
     </Image> 
      </View>
      
    );
  }
}
var styles = {
  container: {
       flex: 1,
      //  justifyContent: 'center',
      //  alignItems: 'center',
       
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
 
};
// state cua store
// bien MState thi phai luon tra ve doi tuong
function MapStateToProps(state){
  return {
    myFilter: state.filterStatus,
    myWords: state.arrWords
  };
}
export default connect(MapStateToProps)(Main);