import logo from './static/logo192.png'

function App() {
  return (
    <div className="full-screen-center text-align-center">
          <img className="w50" src={logo} />
        <div className="m20">
          <strong>l</strong>egally{' '}
          <strong>e</strong>mpowered{' '}
          <strong>g</strong>overnance{' '}
          <strong>t</strong>okens{' '}
          <p className='text-medium text-gray'>
            linking tokens with legal documents & trusted 3rd party entities
            <div className="m30"></div>
          </p>

        </div>
        <div class="flex">
        <a className="pointer" href="mailto:john@legt.co">✉️</a>
        </div>
    </div>
  );
}

export default App;
