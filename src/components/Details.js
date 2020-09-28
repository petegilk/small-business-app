import React from 'react'
import { Container } from '@material-ui/core'

const Details = (props) => {
  let id = props.match.params.id

  return (
    <Container maxWidth='sm' className='listing-container'>
      <h1>{props.listings[id].name}</h1>
      <h3>{props.listings[id].description}</h3>
      <p>{props.listings[id].hours}</p>
      <p>{props.listings[id].address}</p>
    </Container>
  )
}

export default Details