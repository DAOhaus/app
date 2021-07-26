import React from 'react'
import logo from '../static/logo192.png'
import '../Landing.css'

function App() {
  return (
    <div className="full-screen-center text-align-center">
      <div className="section">
        <ul className="timeline">
          <li className="timeline-event">
            <label className="timeline-event-icon"></label>
            <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">Milestone #1</p>
              <h3>VISION</h3>
              <h4>White Paper, Branding & Website</h4>
              <p>
                The basics to allow people to understand the project and follow our progress as we build towards a working MVP. For a more
                in depth look at the vision and technical specs of the project read the white paper.
                <br />
                <br />
                <a target="_blank" href="https://github.com/daohaus/paper" className="btn btn-outline-primary" style={{maxWidth: '300px;'}}>
                  White Paper
                </a>
              </p>
            </div>
          </li>
          <li className="timeline-event active">
            <label className="timeline-event-icon"></label>
            <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">Milestone #2 - Current</p>
              <h3>EXECUTE</h3>
              <h4>Build MVP</h4>
              <p>
                Crowdfunding and basic governance tools for a community owned and managed real estate asset in Arecibo, Puerto Rico.  If this type of project interests you, please <a href="mailto:john@daohaus.org">contact me</a>.
              </p>
              <iframe width='800' height='480' src='https://my.matterport.com/show/?m=baZFXW5oz8h&brand=0' frameBorder='0' allowFullScreen allow='xr-spatial-tracking'></iframe>
            </div>
          </li>
          <li className="timeline-event">
            <label className="timeline-event-icon"></label>
            <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">Milestone #3</p>
              <h3>SCALE</h3>
              <h4>Partnerships, Additional Sites, Network Token</h4>
              <p>
                Integrate with other governance platforms, build out essential UI components, and launch a token network that will help fuel
                development of tools and the ecosystem at large
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
);
}

export default App;
