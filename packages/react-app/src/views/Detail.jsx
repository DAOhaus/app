import React, { useState } from "react";
import { Dimmer, Loader } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import placeholder from 'static/logo-square.png'
import { Link } from 'react-router-dom'
import data from 'static/unitData'


export default function DetailView() {
  const { id } = useParams();
  const unit = data.find((unit) =>unit.id === id)
  const [state, setState] = useState(unit.choices)
  const [selection, setSelection] = useState({})

  // ROW included so it can have access to larger state
  const Row = ({title, options, onClick}) => {
  return <div className="mb20">
    <h3 className="mb10">{title}</h3>
    <div className="flex">
    {options.map((option)=>{
    return <img
        className={`
          w50 mr10 p10 border-radius
          ${option.title === selection[title] ? 'outline' : ''}
        `} 
        src={option.imgUrl} 
        onClick={()=>{ onClick(title, option.title) }}
      />
    }
    )} 
    </div>
  </div>
  }
  const onClick = (parent, choice) => {
    setSelection({
      ...selection,
      [parent]: choice
    })
  }

  return !id
    ? <Dimmer active>
      <Loader />
    </Dimmer>
    : <div className="p20 mt20">
        <Link to="/explore" className="mb20 block"> {`<- View All`} </Link>
      <div className='flex rowWhenLarge'>
      <div className='w50p-when-large text-align-right p20 flex justify-content-center'>
          <img src={placeholder} />
      </div>
      <div className="w50p-when-large text-align-left p20">
        <h1>{unit.title}</h1>
        <p>{unit.subTitle}</p>
        <p className="mb40">{unit.description}</p>
        <h1>Options</h1>
        {unit.choices.map((choice)=><Row {...choice} onClick={onClick} />)}
      </div>
      </div>
    </div>
}
