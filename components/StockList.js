import React, {Component} from 'react';
import { List, FlatList, ScrollView, RefreshControl } from 'react-native';
import { Stock } from '../models/Stock';
import { StockItem } from './StockItem';

const modelStock = new Stock();

export class StockList extends Component {

  state = { stocks: [], refreshing: false};

  componentDidMount(){
    this.reloadCompanies();
  }

  reloadCompanies(successCallback = null) {
    modelStock.getAllStocks().then((result) => {
      this.setState(previousState => (
        { stocks: result }
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
          data={this.state.stocks}
          renderItem={({ item }) => <StockItem stock={item.name} logo={item.category.logo} company={item.company.name} />}
        />
    );
  }

}