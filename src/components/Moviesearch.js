import React from 'react'
import {Form} from '../Search.styled'

const Moviesearch = (props) => {
  return (
    <Form className="form">
    <input type="text" 
    className="inputsearch" 
    placeholder="search"
    onchange={(e)=>props.searchItems(e.target.value)}
    />
    <i className="fa-solid fa-magnifying-glass"></i>
  </Form>
  )
}

export default Moviesearch