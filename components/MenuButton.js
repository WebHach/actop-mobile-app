import React, {Component} from 'react';
import { List, FlatList } from 'react-native';
import {CompanyItem} from './CompanyItem';
import { Icon } from 'react-native-elements'

export class MenuButton extends Component {

  render () {
    return (
      <Icon
        color='#fff'
        name='menu' />
    );
  }
}