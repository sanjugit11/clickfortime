import React ,{useState} from 'react';
import './index.css';

const today = new Date().toLocaleTimeString();

const App = () =>{
  const state = useState();
  const [time,updated] =useState(today);

  const nowTime = () =>{
  let  ttoday = new Date().toLocaleTimeString();
     updated(ttoday);
  }

  return(
    <>
    <div className="count">
    <h1>{time}</h1>
    <button onClick={nowTime}>GET TIME</button>
    </div>
    </>
  )
}

export default App;
