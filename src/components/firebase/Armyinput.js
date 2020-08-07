import React from 'react';
import firebase from './Base'

export const ArmyInput = ({army}) => {
  const [armyName,setName] = React.useState(army.armyName)

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('armies').doc(army.id).set({...army, armyName})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('armies').doc(army.id).delete()
  }


  return (
    <div>
      <input value={armyName} onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}


export default ArmyInput
