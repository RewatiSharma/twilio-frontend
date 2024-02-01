import React, { useState } from 'react';
import './App.css'; 
import { saveuserService } from './services/user';

function App() {
  const [obj, setObj] = useState({
    contact: '',
    message: '',
  });

  const handleMobileNumberChange = (event) => {
    setObj({ ...obj, contact: event.target.value });
  };
  
  const handleMessageChange = (event) => {
    setObj({ ...obj, message: event.target.value });
  };
  
  const handleSendClick = async () => {
    const res = await saveuserService(obj); 
    console.log(obj);
    alert(res.data.message);
  };

  return (
    <div className="App">
      <h1>SMS Sender</h1>
      <label>
        Mobile Number:
        <input
          type="text"
          value={obj.contact}
          onChange={handleMobileNumberChange}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={obj.message}
          onChange={handleMessageChange}
        />
      </label>
      <br />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}

export default App;