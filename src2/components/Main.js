import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { fetchError,
   fetchSuccess, 
   startfetchData,
   fetchDataThunk
  } from '../actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cityName: ''
    };
}
getTempByCityName() {
  const { cityName } = this.state;
  // this.props.startfetchData();
  // getTemp(cityName)
  // .then(temp => this.props.fetchSuccess(cityName, temp))
  // .catch(() => this.props.fetchError());
  this.props.fetchDataThunk(cityName);
}
 getWeatherMessage() {
      const { error, isLoading, cityName, temp } = this.props;
      if (error) return 'please try again';
      if (isLoading) return '..Loading';
      if (!cityName) return 'Please enter your city';
      return `${cityName} temperatur now is ${temp}  oC`;
 }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/bgdemo.jpeg')} 
              style={styles.backgroundImage}> 
          <View style={styles.cover}>
          <Text >{this.getWeatherMessage()}</Text>
            <TextInput 
            style={styles.textInput}
            value={this.state.cityName}
            onChangeText={text => this.setState({cityName: text })}
            placeholder="enter city name"
            />
            <TouchableOpacity style={styles.button} onPress={this.getTempByCityName.bind(this)}>
            <Text>Check temperature</Text>
            </TouchableOpacity>
          </View>
        </Image> 
      </View>
      
    );
  }
}
const styles = {
  container: {
       flex: 1,
      //  alignSelf: 'stretch',
       justifyContent: 'center',
       alignItems: 'center',
       
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  cover: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
  },
  textInput: {
    margin: 10,
    backgroundColor: 'lightblue',
    height: 40,
    width: 400,
    paddingHorizontal: 10,
  
},
button: {
  backgroundColor: 'gray',
  padding: 10,
  margin: 50
},
  

};
function mapStateToProps(state) {
  return {
    cityName: state.cityName, 
    temp: state.temp,
    error: state.error,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps, { startfetchData, fetchSuccess, fetchError, fetchDataThunk })(Main);
