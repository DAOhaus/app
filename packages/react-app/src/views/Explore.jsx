import React from "react"
import { PageWrapper, SquareGrid } from 'components'
import data from 'static/unitData'


export default (props) => {
  return <PageWrapper  >
    <SquareGrid data={data} />
  </PageWrapper>
}