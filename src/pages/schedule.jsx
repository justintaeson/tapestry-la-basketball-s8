import React from 'react';
import {players as PlayersData} from '../data/players.js'

export default class Schedule extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        schedule: null
      }
    }

  render() {
    const players = PlayersData.map(player => {
      return (
        <div className='row'>
          {player.name}
        </div>
      )
    })
    return players;
  }
}
