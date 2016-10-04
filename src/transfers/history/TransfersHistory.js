import React, { Component } from 'react';
import TranfersFilter from './TranfersFilter';
import TransfersList from './TransfersList';

class TransfersHistory extends Component {
  render() {
    return (
      <div>
        <TranfersFilter />
        <TransfersList />
      </div>
    );
  }
}

export default TransfersHistory;
