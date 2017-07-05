import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class SearchComponent extends Component {

    render() {

      console.log('this.props.makes=',this.props.makes);

        return (<div>
          this is search comp
            </div>
        );
    }

}

const mapStateToProps = function (store) {
    return {
        makes: store.makes
    }
}

export default connect(mapStateToProps)()
