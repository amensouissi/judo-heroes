'use strict';

import React from 'react';
import {SearchAthlete} from './SearchAthlete';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          <SearchAthlete/>
        </div>
        {this.props.children || ""}
      </div>
    );
  }
}
