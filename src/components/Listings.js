import React from 'react'
import cookie from 'cookie'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

const cookies = cookie.parse(document.cookie)

const Listings = (props) => {
  return (
    <Container maxWidth="lg" className="listings-container">
      <Table>
        <TableHead>
          <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
              { cookies["loggedIn"] ? <TableCell>Delete</TableCell> : null }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((item, i) => {
            return (
              <TableRow key={i}>
                <TableCell><Link to={`//${i}`} className="listing-name">{item.name}</Link></TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.hours}</TableCell>
                <TableCell>{item.address}</TableCell>
                { cookies["loggedIn"] ? <DeleteIcon onClick={() => props.deleteListing(i)}/> : null }
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Container>
  )
}

export default Listings