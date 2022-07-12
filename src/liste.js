import { useState } from 'react'


// function Item(){
//     return <h1>hello depuis item</h1>
// }



function Liste () {
    const [dataArr, setDataArr] = useState([

        {nom: "juliette"},
        {nom: "john"},
        {nom: "clement"},

       

    ])

    //grace a la méthode Map on va pouvoir retourné un tableau

    return(
           <div className='List'>
                {dataArr.map(item =>{
                    return <p key={index}>Nom : {item.nom}</p>
                })}
            </div>
        




    )
    
    

    
}


export default Liste;