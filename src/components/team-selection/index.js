import React, { useEffect, useState } from "react";
import playersList from "../../players.json";
import "./index.css";
export default function TeamSelection() {

const [players,setPlayers]=useState([]);

useEffect(() => {
  setPlayers(playersList)
}, []);

const sortByName=()=>{
  const nextList = [...players];
  console.log(players)
  
  nextList.sort((a,b)=>a.name>b.name?1:-1);
  
  setPlayers(nextList); 
  console.log(players)
}

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
		  <div className="table-wrapper">
        <div
          className="card outlined mt-0 card-wrapper"

        >
          <div className="card-text">
            <h4 className="text-center-div">Available Players</h4>
            <table>
              <thead>
                <tr>
                  <th data-testid="available-players-name" onClick={sortByName}>Name</th>
                  <th data-testid="available-players-role" >Role</th>
                  <th data-testid="available-players-bat" >Batting</th>
                  <th data-testid="available-players-bowl" >Bowling</th>
                  <th>Action</th>
                </tr>
              </thead>
						  <tbody data-testid="available-players-table-body">
              {playersList.map((player,idx)=>
              { return <tr key={idx} data-testid={"available-"+player.name.replace(" ","-")+"-row"}>
                    <td data-testid={"available-"+player.name.replace(" ","-")+"-name"}>{player.name}</td>
                    <td data-testid={"available-"+player.name.replace(" ","-")+"-role"}>{player.type}</td>
                    <td data-testid={"available-"+player.name.replace(" ","-")+"-bat"}>{player.battingSkill}</td>
                    <td data-testid={"available-"+player.name.replace(" ","-")+"-bowl"}>{player.bowlingSkill}</td>
                    <td>
                      <button className="btn btn-primary"
                        data-testid={"available-"+player.name.replace(" ","-")+"-select"}
                      >Select</button>
                    </td>
                  </tr>
                  //console.log(player)
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card outlined mt-0 card-wrapper">
          <div className="card-text">
            <h4 className="text-center-div">Selected Players</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody data-testid="selected-players-table-body">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
