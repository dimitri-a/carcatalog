import React, {Component} from 'react';
import {connect} from 'react-redux';

export class DetailsComponent extends Component {
  render() {
    let models = this.props.models;
    let result = models.filter((x) => x.id == this.props.id);

    return (<div>
        <div className="row">
          <div className="col-md-3">{result[0].name}</div>
          <div className="col-md-3">{result[0].price}</div>
          <div className="col-md-6">
            <img className="img-responsive" src={result[0].imageUrl} alt=""/>
          </div>
        </div>
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
