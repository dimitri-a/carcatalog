import React, {Component} from 'react';
import {connect} from 'react-redux';


class DetailsComponent extends Component {

    render() {

      console.log('this.props.id=',this.props.id);

        return (<div>
details comp {this.props.id}
            </div>
        );
    }

}


const mapStateToProps = (store) => {
  return {
    models: store.models
  }
}

export default connect(mapStateToProps)(DetailsComponent)
