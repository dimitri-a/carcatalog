import React, {Component} from 'react';
import {connect} from 'react-redux';

class FavoriteCar extends Component {

    render() {

      //todo remove
      debugger;
        return (<div>
         {this.props.favorite.review}
            </div>
        );
    }

}

const mapStateToProps = function (store) {
    return {
        favorite: store.favorite
    }
}

export default connect(mapStateToProps)(FavoriteCar)
