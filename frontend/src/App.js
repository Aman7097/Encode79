import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [value, setValue] = useState({
    key: 0,
    name: '',
  })
  const [encoded, setEncoded] = useState('');
  const handleSubmit =  (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/change-string', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(value),
    }).then((res)=> res.json()).then((response)=> setEncoded(response.encodecode));

  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setValue(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <div className="App">
     <form method='POST' onSubmit={handleSubmit}>
      <label htmlFor='input'>Name</label>
      <input className='input' name='name' value={value.name} onChange={handleChange} />
      <label htmlFor='input'>Key</label>
      <input className='input' name='key' value={value.key} onChange={handleChange} />
      <button type='submit'>Submit</button>
     </form>
     <h2>Your Encoded Code Is Below</h2>
     {encoded && <p>{encoded}</p>}
    </div>
  );
}

export default App;
