import React from 'react';
import firebase from './Base'

export const ArmyInput = ({army}) => {
  const [name,setName] = React.useState(army.name)

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('armies').doc(army.id).set({...army, name})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('armies').doc(army.id).delete()
  }


  return (
  <div>
    <input value={name} onChange={(e) => {setName(e.target.value)}}/>
    <button onClick={onUpdate}>Update</button>
    <button onClick={onDelete}>Update</button>
  </div>)
}
