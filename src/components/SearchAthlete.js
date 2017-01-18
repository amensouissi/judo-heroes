'use strict';

import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';


export const SearchAthlete = React.createClass({
    getInitialState(){
      return {initalItmes: athletes, filteredItems: athletes}
    },

   filter(event){
      var listresult = this.state.initalItmes.filter(function(item){
        return item['name'].search(event.target.value) != -1
      });
      this.setState({filteredItems: listresult})
   },

   render(){
      return (
        <div>
            <div>
              <input className={'search-input'} type='text' onChange={this.filter}></input>
            </div>
	        {this.state.filteredItems.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
        </div>
        )
   }
})