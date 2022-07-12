import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'



function TodoList () {

    return(

    <div className="TodosList">
        <h1 className="text-center col-sm-12">Todo-Liste</h1>

        <Form />  
    
    </div>
    )



}

export default TodoList;
