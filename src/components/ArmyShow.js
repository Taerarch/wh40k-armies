import React, { Component } from 'react'
import './css/Army-show.css'
import firebase, {db, storage} from './firebase/Base'


const ArmyShow =(props) => {
  console.log("about", props.location.armyProps);
  const army = props.location.armyProps.army

  return (
    <div class="main">
      <div class="show">
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
    </div>
  )
}

export default ArmyShow;
