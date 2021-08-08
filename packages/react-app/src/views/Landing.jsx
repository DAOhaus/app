import React from 'react'
import logo from '../static/logo.png'
import '../Landing.css'

function App() {
  return (

    <div className="full-screen-center">
      <div className="section jumbotron" style={{paddingTop: 80}}>
        <img src={logo} alt="logo" style={{width: 80, marginBottom: 15}}/>
        <h1 className="strong">daohaus</h1>
        <p className="jumbotron-desc">
          rebuilding democracy, one house at a time<br/> read the <a target="_blank" href="https://github.com/daohaus/paper">white paper</a>      and subscribe for updates:
        </p>
      </div>
      <div className="section text-align-left">
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
                <a target="_blank" href="https://github.com/daohaus/paper" className="btn btn-outline-primary" style={{maxWidth: 300}}>
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
      <div className="section page-buffer text-align-left" style={{marginTop: 80}}>
        <h4>Abstract</h4>
        <p style={{marginBottom: 20}}>Taken from the <a target="_blank" href="https://github.com/daohaus/paper">full treatment</a></p>

        <p>Daohaus is a social experiment to test pure democratic governance.
          <strong className="underline">The aim is to purchase, manage, and enjoy a single real estate property.</strong></p>
        <p>
          The hope is to use this specific scope to expand and grow the idea into governance of a community, and even a nation. Hopefully
          bringing us closer to a more pure, accountable, and representative government. One that is truly of the people, by
          the people and for the people.
        </p>

        {/* <!-- I shall be asked if I am a prince or a legislature to write on politics. I answer that I am neither, and that is why I do
          so -- Rousseau, Social Contract --> */}

        <p>Three large similarities exist between managing a real estate property, and governing a nation.
          Namely the <strong className="underline">the creation of rules</strong> called laws,&nbsp;
          <strong className="underline">the enforcement of those rules</strong>, and the&nbsp;
          <strong className="underline">the management of an escrow account</strong> that we all fund through our taxes.</p>

        <p>Creating the framework for doing those three things on a much smaller and simpler scale holds an important
          advantage which is flexibility. We start small, so that we can learn from flaws in the design, build it incrementally,
          and test our hypothesis as it grows following an Agile mentality.</p>

        <p>In regards to the larger political dialogue that's occurring in today's society, 
          Daohaus is a proving ground for the advantages of a proposal governance over our 
          current charismatic representative based system that pulls from two major political parties. </p>

        <p> With the maturity of technologies such as the internet and blockchain, this system has&nbsp;
        <strong className="underline">become outdated and unnecessary</strong></p>

        <p>Greed, corruption and incompetence cannot be solved by purely technical solutions, but our hope is that Daohaus will grow
          into a tool used to combat such evils. If you'd like to read more of my thoughts on the subject, please see the afterword
          where I briefly address the implications of this project on our country's&nbsp;
          <a target="_blank" href="https://github.com/daohaus/paper#finances">financial</a>,&nbsp;
          <a target="_blank" href="https://github.com/daohaus/paper#policy">policy</a> and&nbsp;
          <a target="_blank" href="https://github.com/daohaus/paper#enforcement">enforcement</a> practices.
        </p>

        <p>In the same way that the Bauhaus movement was characterized by a minimalist type of design, 
          we also hope to <strong className="underline">simplify and minimize governance.</strong></p>
      </div>
      <div className="section jumbotron" >
        <div id="mc_embed_signup">
          <form action="https://daohaus.us16.list-manage.com/subscribe/post?u=5ebe9bb2466801bfe7716eba2&amp;id=5f9c3aa652" method="post"
            id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          </form>
        </div>
        <img src={logo} alt="logo" style={{width: 80, marginTop: 15}} />
      </div>
    </div>
);
}

export default App;
