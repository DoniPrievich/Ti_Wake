import logo from './tiwake.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="logoName">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="blue">
        <div className="inps">
          <input className='backblue' type="text" placeholder='Username'></input>
          <input className='backblue' type="password" placeholder='Password'></input>
          <p className='pass'>Forgot password?</p>
        </div>
        <div className="inps2">
          <input className='backwhite' type="text" placeholder='Login'></input>
          <input className='backwhite' type="password" placeholder='Регистрация'></input>
        </div>
      </div>
    </div>
  );
}

export default App;
