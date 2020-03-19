import React, {Component} from 'react';
import { List, FlatList, ScrollView, RefreshControl } from 'react-native';
import {CompanyItem} from './CompanyItem';
import {Company} from '../models/Company';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const modelCompany = new Company();

export class CompanyList extends Component {

  state = { companies: [], refreshing: false};

  componentDidMount(){
    this.reloadCompanies();
  }

  reloadCompanies(successCallback = null) {
    modelCompany.getAllCompany().then((result) => {
      this.setState(previousState => (
        { companies: result.data }
      ));
      if (typeof(successCallback) === "function") {
        successCallback();
      }
    })
  }

  _onRefresh() {
    this.setState(previousState => (
      { refreshing: true }
    ));
    this.reloadCompanies(() => {
      this.setState(previousState => (
        { refreshing: false }
      ));
    });
  }

  render () {
    return (
        <FlatList
          refreshControl={
            <RefreshControl
                colors={["#9Bd35A", "#689F38"]}
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
            />
          }
          data={this.state.companies}
          renderItem={({ item }) => <CompanyItem name={item.name} logo={item.logo}/>}
        />
    );
  }

}