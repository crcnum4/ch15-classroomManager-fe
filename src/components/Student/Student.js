import React from 'react';
import BorderCard from '../common/BorderCard'

const Student = (props) => {
  return (
    <BorderCard>
      <h1>{props.student.name}</h1>
      <p>{props.student.grade}</p>
    </BorderCard>
  )
}

export default Student;