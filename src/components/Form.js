import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
          en: '',
          vn: ''
      };
      this.onAdd = this.onAdd.bind(this);
  }
  onAdd() {
      const { en, vn } = this.state;
      this.props.dispatch({ 
          type: 'ADD_WORD',
            en, 
            vn
        });
        this.props.dispatch({ 
            type: 'TOGGLE_IS_ADDING'
          });
  }
    render() {
    return (
      <View>
          <TextInput 
          style={styles.TextInput} 
          value={this.state.en}
          onChangeText={text => this.setState({ en: text })}
          placeholder="English word"
          />

        <TextInput 
                style={styles.TextInput}
                value={this.state.vn}
                onChangeText={text => this.setState({ vn: text })}
                placeholder="Meaning" 
        />
          <TouchableOpacity onPress={this.onAdd}>
              <Text>Add</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    TextInput: {
        height: 40, 
        backgroundColor: 'pink',
        margin: 10,
        //paddingHorizontal: 10, 
        //alignItems: 'center'
    }
});

export default connect()(Form);

