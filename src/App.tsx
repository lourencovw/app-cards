import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate()

  function storeName(event: any) {
    localStorage.setItem('name', event.target[0].value);
    navigate('/cards')
    event.preventDefault()
  }

  return (
    <form className="App" onSubmit={storeName}>
      <label htmlFor="">Name:</label>
      <input type="text" />
      <button type='submit'>SEE CARDS</button>
    </form>
  );
}

export default App;
