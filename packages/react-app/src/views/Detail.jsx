/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import { Dimmer, Loader } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';

export default function DetailView({
}) {
  const { id } = useParams();
  const [state, setState] = useState({ id });

  return !state.id
    ? <Dimmer active>
      <Loader />
    </Dimmer>
    : <div className="p20 mt20">
	    here: {id}
    </div>;
}
