import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {makevalue: 0,modelvalue:0};

  }

  MakeOptions() {
    const makeOptions = this.props.makes.map
    (
      (mk) => (
        <option value={mk.id}>{mk.name}</option>
      )
    );
    return makeOptions;
  }

  ModelOptions() {
    const modelOptions = this.props.models.map
    (
      (md) => (
        <option value={md.id}>{md.name}</option>
      )
    );
    return modelOptions;
  }

  handleChange(event) {
    this.setState({makevalue: event.target.value});
  }

  handleChangeModel(event) {
    this.setState({modelvalue: event.target.value});
  }

  render() {
    //todo remove
    debugger;
    console.log('this.props.makes=', this.props.makes);

    return (<div>
        <div className="row">
          <div className="col-md-2"><label htmlFor="makes">Makes:</label></div>
          <div className="col-md-10">
            <select name="" id="" value={this.state.makevalue} onChange={this.handleChange}>
              {this.MakeOptions()}
            </select>
            <select name="" id="" value={this.state.modelvalue} onChange={this.handleChangeModel}>
              {this.ModelOptions()}
            </select>
          </div>

        </div>

      </div>

    );
  }

}

const mapStateToProps = function (store) {
  //todo remove
  debugger;
  return {
    makes: store.makes,
    models: store.models

  }
}

export default connect(mapStateToProps)(SearchComponent)
