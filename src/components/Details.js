import React from 'react'
import { Container } from '@material-ui/core'

const Details = (props) => {
  let id = props.match.params.id

  return (
    <div>
      <h1>{props.listings[id].name}</h1>
      <h3>{props.listings[id].description}</h3>
      <p>{props.listings[id].hours}</p>
      <p>{props.listings[id].address}</p>
    </div>
  )
}

export default Details