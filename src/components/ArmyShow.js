import React, {Component} from 'react';
import './css/Army-show.css'
import army from './helpers/DarkAngelsCurrent.json'


class ArmyShow extends Component {
  render() {
    return (
      <div class="main">
        <h1>{army.armyName}</h1>
        {army.detachments.map((detachment) => {
          return <div class="detachment">
            <h2>{detachment.detachmentName}</h2>
            {detachment.battlefieldRoles.map((role) => {
              return <div class="battlefieldRole">
                <h3>{role.roleName}</h3>
                {role.units.map((unit) => {
                  return <p>{unit}</p>
                })}
              </div>
            })}
          </div>
        })}
      </div>
    )
  }
}

export default ArmyShow;
