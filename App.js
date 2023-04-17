import SignUpButton from './components/signUpButton';
import Card from './components/card.component';
import Login from './components/loginButton';
import Logo from './components/logo';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className='header-container'>
      <SignUpButton />
      <Logo />
      <Login />
      </header>
      
    </div>
  );
}

export default App;
