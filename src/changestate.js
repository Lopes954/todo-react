
import { useState } from 'react'
import Item from './components/Item.js'

function ChangeState() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle)
  }



  if (toggle) {
    return (
      <div className="App">
        <h1>le state est true</h1>

        <button onClick={changeState}>change state</button>
      </div>


    );

  } else if (toggle === false) {
    return (
      <div className="App">
        <h1>le state est false</h1>

        <button onClick={changeState}>change state</button>
      </div>


    );

  }

}

export default ChangeState;
