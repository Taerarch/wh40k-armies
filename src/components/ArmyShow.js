import React from 'react'
import './css/Army-show.css'


const ArmyShow =(props) => {
  console.log("about", props.location.armyProps);
  // Redirect if props not present.
  const army = props.location.armyProps.army

  return (
    <div className="main">
      <div className="show">
        <h1>{army.armyName}</h1>
        {army.detachments.map((detachment) => {
          return <div className="detachment">
            <h2>{detachment.detachmentName}</h2>
            {detachment.battlefieldRoles.map((role) => {
              return <div className="battlefieldRole">
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
