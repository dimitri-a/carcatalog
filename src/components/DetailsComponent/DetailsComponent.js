
import React, {Component} from 'react';
import {connect} from 'react-redux';

export class DetailsComponent extends Component {


  render() {
    //todo remove
    debugger;
    //
    let test = this.props.models;

    let test2 = this.props.id;
    //todo remove
    debugger;

    let result = test.filter((x) => x.id == this.props.id);

    // //todo remove
    debugger;
    return (<div>
        is this showing?????
        id: {result[0].id}
        name: {result[0].name}
        price: {result[0].price}
        <img src={result[0].imageUrl} alt=""/>

      </div>
    );
  }
}


const mapStateToProps = (store) => {
  return {
    models: store.models,
    makes: store.makes
  }
}

export default connect(mapStateToProps)(DetailsComponent)
