import React from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledSquare = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  border: 1px dashed gray;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 20px 20px 0;
  &:hover{
    box-shadow: 0px 0px 2px lightgray;
  }
  h3{
    color: blue;
  }
  h4{
    color: red;
  }
`
const Square = ({title, subTitle}) => <StyledSquare>
  <div className='info'>
    <h3>{title}</h3>
    <h4>{subTitle}</h4>
  </div>
</StyledSquare>

export default ({data}) => {
  console.log('data', data)
  return <div className="flex wrap justify-content-center">
      {(data || []).map((unit)=>
        <Link to={`/unit/${unit.id}`} key={unit.id}>
          <Square {...unit} />
        </Link>
      )}
      <Square title=" + Propose"></Square>
    </div>
}