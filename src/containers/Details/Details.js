import React, {Component} from 'react';

import { DetailsComponent } from 'components';

export default class Details extends Component {
  render() {
    const id = this.props.params.id;

    return (<div>
        <DetailsComponent id={id}/>
      </div>
    );
  }

}
