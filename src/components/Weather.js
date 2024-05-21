import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './Header'

export function Weather() {
  return (
    <Container className='mt-3'>
        <Header title='Welcome to Weather' />
        <Container></Container>
    </Container>
  )
}
