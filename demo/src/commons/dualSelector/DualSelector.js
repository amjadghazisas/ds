import React, { Component } from 'react';
import List from '../list/List';
import './DualSelector.css';



class DualSelector extends Component {
  render() {
    return (
      <div className="opty-dualSelector">
        <List listHeight="300px"></List>
        <List listHeight="300px"></List>
      </div>
    );
  }
}

export default DualSelector;
