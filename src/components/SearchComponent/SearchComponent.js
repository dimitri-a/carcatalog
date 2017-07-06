import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      makevalue: 0,
      modelvalue: '0'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
  }


  handleChange(event) {
    this.setState({makevalue: event.target.value});
  }

  handleChangeModel(event) {
    this.setState({modelvalue: event.target.value});
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


  FilteredModels(val) {

    const res = this.props.models.filter(model => model.makeId === Number(val));

    return res;
  }


  ModelOptions(makevalue) {

    //todo remove
    debugger;
    console.log('modeloptions');
    const filtered = this.FilteredModels(makevalue).map
    (
      (model) => (
        <option value={model.id}>{model.name}</option>
      )
    )

    filtered.push(<option value="0">Select a value ese, mamacita</option>)
    return filtered;

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
        make value: {this.state.makevalue}
        model value: {this.state.modelvalue}
        <div className="row">
          <div className="col-md-2"><label htmlFor="makes">Makes:</label></div>
          <div className="col-md-10">
            <select name="" id="" value={this.state.makevalue} onChange={this.handleChange}>
              {this.MakeOptions()}
            </select>
            <select name="" id="" value={this.state.modelvalue} onChange={this.handleChangeModel}>
              {this.ModelOptions(this.state.makevalue)}
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
