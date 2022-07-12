import React from 'react'

export default function Item(props) {
  return (

    <li className='border d-flex justify-content-between align-items-center p-2 m-2'>
    
    {/* Importation de notre tableau */}
        <div className="p-3">{props.txt}</div>

        {/* Méthode qui permet de supprimer un elements */}
            <button className="mt-2 btn btn-danger" onClick={() => props.delfunc(props.id)}>supprimer</button>
    
    </li>
  )
}
