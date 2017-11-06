import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {
  getWordList() {
    const { myFilter, myWords} = this.props;
    if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized );
    if (myFilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized );
    return myWords;
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/bgdemo.jpeg')} 
              style={styles.backgroundImage}> 
          <Header/>
            <View style={{flex:10}}>
              {this.props.isAdding ?<Form/> : null }
                <FlatList         
                    data={this.getWordList()}
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
    myWords: state.arrWords,
    isAdding: state.isAdding
  };
}
export default connect(MapStateToProps)(Main);