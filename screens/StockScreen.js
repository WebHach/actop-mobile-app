import React, {Component} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import {CompanyList} from '../components/CompanyList';

export default function StockScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список акций</Text>
      <CompanyList></CompanyList>
    </View>
  );
}

StockScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 15,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: 'rgba(1, 1, 1, 0.2)',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15
  }
});
