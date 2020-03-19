import React, {Component} from 'react';
import { ListItem, ImageBackground, Text, View, StyleSheet } from 'react-native';

export class CompanyItem extends Component {

  render () {
    return (
    <View style={styles.container}>
      <ImageBackground style={styles.logo} source={{uri: this.props.logo}} />
      <Text style={styles.text}>{this.props.name}</Text>
    </View>);
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor : "#0000",
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 50, 
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 100,
    overflow: 'hidden'
  },
  text: {
    marginLeft: 15
  }
});