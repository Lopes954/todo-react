
import { useState } from 'react'
import Item from './components/Item.js'

function Ternaire() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle);
  };


// Operation trenaire
  
    return (
      <div className="Ternaire">

        <div className={toggle ? "box animated" : "box" }></div>


    
        
        {toggle ? <h1>le state est true</h1> : <h1>le state est false</h1>}

        <button onClick={changeState}>change state</button>
      </div>


    );


    // le short circuit operator && permet de montrer que c'est True

    // return (
    //   <div className="Ternaire">
        
    //     {toggle && <h1>le state est true</h1> }

    //     <button onClick={changeState}>change state</button>
    //   </div>


    // );

}

export default Ternaire;