/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import { Dimmer, Loader } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import placeholder from 'static/logo-square.png'
import { Link } from 'react-router-dom'
import data from 'static/unitData'
import { SquareGrid } from "components";

const Row = ({title, options}) => <div>
  <h3 className="mb10">{title}</h3>
  <div className="flex">
  {options.map((option)=>
    <img className="w50 mr10" src={option.imgUrl}/>
  )} 
  </div>
</div>

export default function DetailView({
}) {
  const { id } = useParams();
  const unit = data.find((unit) =>unit.id === id)
  return !id
    ? <Dimmer active>
      <Loader />
    </Dimmer>
    : <div className="p20 mt20">
        <Link to="/explore" className="mb20 block"> {`<- View All`} </Link>
      <div className='flex row'>
      <div className='w50p text-align-right p20'>
          <img src={placeholder} />
      </div>
      <div className="w50p text-align-left p20">
        <h1>{unit.title}</h1>
        <p>{unit.subTitle}</p>
        <p className="mb40">{unit.description}</p>
        <h1>Options</h1>
        {unit.choices.map((choice)=><Row {...choice} />)}
      </div>
      </div>
    </div>
}
