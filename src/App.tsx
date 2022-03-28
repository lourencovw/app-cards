import { useNavigate } from 'react-router-dom';
import './App.css';

export interface IData {
  englishName: string;
  _id: string;
  clowCard: string;
  meaning: string;
}

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
      <button type='submit'>ADD NAME</button>
    </form>
  );
}

export default App;
