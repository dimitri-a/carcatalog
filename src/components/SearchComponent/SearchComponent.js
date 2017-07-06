import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {makevalue: 0};

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
    makes: store.makes

  }
}

export default connect(mapStateToProps)(SearchComponent)
