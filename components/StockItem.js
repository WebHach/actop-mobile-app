import React, {Component} from 'react';
import { ListItem, ImageBackground, Text, View, StyleSheet } from 'react-native';

export class StockItem extends Component {

  render () {
    console.log('sss');
    return (
    <View style={styles.container}>
      <ImageBackground style={styles.logo} source={{uri: this.props.logo}} />
      <View style={styles.text}>
          <Text style={styles.stock }>{this.props.stock}</Text>
          <Text style={styles.company}>{this.props.company}</Text>
      </View>
    </View>);
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    
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
  },
  company: {
      fontSize: 10
  }
});