import React, { Component } from 'react';
import ItemComponent from '../components/itemComponent.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/actions'


const mapStateToProps = (store) => {
  return {
    items: store.firstReducer.items
  }
}

const mapDispatchToProps = (dispatch) => {

};


class SuitcaseContainer extends Component {

  render() {
    let locId = this.props.location;
    let itemsArr = [];
    for (let i = 0; i < this.props.items[locId].length; i++) {
      itemsArr.push(<ItemComponent item={this.props.items[locId][i]} key={i}/>)
    }
    return (
      <div>
        {itemsArr}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(SuitcaseContainer);