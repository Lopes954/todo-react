import {useState} from 'react'
import Item from './Item'
import {v4 as uuidv4} from 'uuid'



export default function Form(){

    // Création d'un tableau qui pour chaque element aura un ID different 

    const [dataArr, setDataArr] = useState([
        {txt: "promener le chien", id: uuidv4()},
        {txt: "promener le chat", id: uuidv4()},
        {txt: "promener le cheval", id: uuidv4()},
        {txt: "promener le poney", id: uuidv4()},
       
    ])

    const [stateInput, setStateInput] = useState();

    // Creation d'une fonction qui va permettre de supprimer des elements

    const deleteElement = id => {
        // console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

    const linkeInput = e =>{
        console.log(e);
    }


    return (
        <div>
            <form action="post" className="col-mb-3">

            <h5> chose a faire</h5>

           
                
                <input onInput={e => linkedInput(e.target.value)} className="form-control" id="todo" />
                <button className="mt-2 btn btn-primary">Envoyer</button>
            </form>

            <h2>Liste des chose a faire :</h2>
            <ul className="list-group">

               {dataArr.map(item => {

                return(
                    <Item 
                    txt={item.txt}
                    key={item.id}
                    id={item.id}
                    delfunc={deleteElement}
                    
                    />
                )
               })}

               
               

            </ul>
        </div>
    )
}