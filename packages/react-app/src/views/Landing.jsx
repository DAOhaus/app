import React from 'react'
import logo from '../static/logo.png'
import '../Landing.css'
import { Highlight } from "../components";

function App() {
  return (
    <div className="full-screen-center ">
      <div className="section jumbotron" style={{ paddingTop: 80 }}>
        <img src={logo} alt="logo" style={{ width: 80, marginBottom: 15 }} />
        <h1 className="strong">daohaus</h1>
        <p className="jumbotron-desc">
          building & financing real world asset daos
          <br />
          NFT meets RWA meets ĐAO
          <br />
          <br />
          🧘‍♂️ 🏡 🧘‍♂️
          <div className="flex justify-content-center column mt20">
            <a target="_blank" href="https://github.com/daohaus/paper"><Highlight color="red">Governance Model</Highlight></a>
            <a target="_blank" href="https://github.com/DAOhaus/EIPs/blob/master/EIPS/eip-1776.md"><Highlight color="yellow">Legal & Meta Standards</Highlight></a>
            <a target="_blank" href="https://legt.co"><Highlight color="blue">L£GT DeFi Protocol</Highlight></a>
            {/* <a target="_blank" href=""><Highlight color="green">Consumer Brand</Highlight></a> */}
          </div>
        </p>
      </div>
      {/* <div className="section page-buffer text-align-left" style={{marginTop: 40}}>
         <p className="italic p10" style={{paddingBottom: 30}}>
          I shall be asked if I am a prince or a legislature to write on politics. I answer that I am neither, and that is why I do
          so 
          -- Rousseau, Social Contract
          </p>
        </div> */}

      <div className="section text-align-left">
        <ul className="timeline">
          <li className="timeline-event">
            <label className="timeline-event-icon"></label>
            <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">Governance Model</p>
              <h4>White Paper, Branding & Website</h4>
              <p>
                The basics to allow people to understand the project and follow our progress as we build towards a working MVP. For a more
                indepth look at the vision and technical specs of the governance model read the white paper.
                <br />
                <br />
                <a target="_blank" href="https://github.com/daohaus/paper"><Highlight color="red">Model White Paper</Highlight></a>
              </p>
            </div>
          </li>
          <li className="timeline-event">
            <label className="timeline-event-icon"></label>
            <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">Legal & Meta Standards</p>
              <h4>Acquire & Manage Initial Location</h4>
              <p>
                Utilizing our concepts and tools as we legally tokenize, build and manage a small complex of buildings in Arecibo, Puerto Rico.  If you would like to get involved in anyway please <a href="mailto:john@daohaus.org">contact me</a>.
              </p>
              <iframe width='100%' height='300' src='https://my.matterport.com/show/?m=baZFXW5oz8h&brand=0' frameBorder='0' allowFullScreen allow='xr-spatial-tracking'></iframe>
            </div>
          </li>
          <li className="timeline-event active">
            <label className="timeline-event-icon"></label>
            <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">RWA DeFi Protocol</p>
              <h4>Partnerships & Additional Services</h4>
              <p>
                Integrate with other governance platforms, build out critical partnerships & verticle integrations. Launch a multi-token ecosystem that will help fuel
                development of tools and the ecosystem at large as we bring RWAs into the DeFi ecosystem.
                <br />
                <br />
                <a target="_blank" href="https://legt.gitbook.io"><Highlight color="blue">L£GT ĐAO</Highlight></a>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="section page-buffer text-align-left" style={{ marginTop: 40 }}>

        {/* <p style={{marginBottom: 20}}>Read the original <a target="_blank" href="https://github.com/daohaus/paper">paper</a></p> */}

        <p>An experiment to create governance models & marketplaces to be used for underlying real world assets.&nbsp;
          <strong className="underline">Our initial aim is to purchase, manage, and enjoy a single real estate property in multiple jurisdictions.</strong></p>
        <p>
          The hope is to use this specific scope to expand and grow the idea into governance of a community, and eventually a nation. Hopefully
          bringing us closer to a more pure, accountable, and fluid government of public/private organizations. One that is voluntarily chosen by the people, managed by
          the people and serves at the will of the people.
        </p>

        <p>Three large similarities exist between managing a real estate property, and governing a nation.
        Namely the <strong className="underline">the creation of rules</strong> called laws,&nbsp;
        <strong className="underline">the enforcement of those rules</strong>, and the&nbsp;
        <strong className="underline">the management of an escrow account</strong> that we all fund through fees & estate sales.
        </p>

        <p>Creating the framework for doing those three things on a much smaller and simpler scale holds an important
          advantage which is flexibility. We start small, so that we can learn from flaws in the design, build it incrementally,
          and test our hypothesis as it grows following building patterns such as in the "agile" pattern in software development.</p>

        <p>In regards to the larger political dialogue that's occurring, we hope to be a proving ground for the advantages of a proposal governance over
          charismatic representative based system that pulls from major political parties. </p>

        <p>Our current system has served us well, howevber with the maturity of technologies such as the internet and blockchain, our system has&nbsp;
          <strong className="underline">become outdated and unnecessary</strong></p>

        <p>Greed, corruption and incompetence cannot be solved by purely technical solutions, but our hope is that □∆○haus will grow
          into an ecosystem used to combat such evils. If you'd like to read more of my thoughts on the subject, please see the afterword
          where I briefly address the implications of this project on our&nbsp;
        <a target="_blank" href="https://github.com/daohaus/paper#finances">financial</a>,&nbsp;
        <a target="_blank" href="https://github.com/daohaus/paper#policy">policy</a> and&nbsp;
        <a target="_blank" href="https://github.com/daohaus/paper#enforcement">enforcement</a> practices.
        </p>

        <p>In the same way that the Bauhaus movement was characterized by a minimalist type of design,
          we also hope to <strong className="underline">simplify and minimize governance.</strong></p>
      </div>
      <div className="section jumbotron" >
        <img src={logo} alt="logo" style={{ width: 80, marginTop: 100, marginBottom: 70 }} />
      </div>
    </div>
  );
}

export default App;
