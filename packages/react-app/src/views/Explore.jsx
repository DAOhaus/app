import React from "react"
import styled from 'styled-components'
import { PageWrapper } from 'components'

const data = {
  name: '603 Miramar Arecibo',
  desc: 'A long term real estate play involving 3 phases towards becoming a Boutique Hotel on the coast of Puerto Rico.',
  percentPledged: 34,
}

const Square = styled.div`
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
  &.active {
      width: 400px;
      height: 400px;
  }
`

const toggleActive = (e) => {
  e.target.className.includes('active')
    ? e.target.classList.remove('active')
    : e.target.classList.add('active')
}

export default (props) => {
  return <PageWrapper  >
    <div className="flex wrap justify-content-center">
      <Square onClick={toggleActive} title="Suite A" subtitle="lorem ipsum that is very long longer than the box"/>
      <Square onClick={toggleActive} />
      <Square onClick={toggleActive} />
      <Square onClick={toggleActive} />
      <Square onClick={toggleActive} />
      <Square onClick={toggleActive} />
      <Square onClick={toggleActive} />
      <Square onClick={toggleActive}> + Propose</Square>
    </div>
  </PageWrapper>
}