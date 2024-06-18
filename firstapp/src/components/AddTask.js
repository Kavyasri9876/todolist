import Button  from 'react-bootstrap/Button';
import React,{useState} from 'react';
import {FaPlus} from 'react-icons/fa';

const Addtask = ({todoList,setTodoList}) => {
    const [newTask,setnewTask] = useState("")
    const onTextChange = (event) => {
        const text = event.target.value;
        setnewTask(text)

    }

    const addtask = (text) => {
         const newId = todoList.length!==0 ? todoList[todoList.length-1].id+1 : 1;
         const newTaskItem = {id:newId,descr:text,checked:false}

         const newTaskList = [...todoList,newTaskItem]
         setTodoList(newTaskList)
         localStorage.setItem('todoList',JSON.stringify(newTaskList));
         

    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addtask(newTask);
        setnewTask('')
    }

    const onTaskClicked = () => {

    }

    

  return (
    <form className="form-group" onSubmit={(evt) => handleSubmit(evt)}>
        <div class="input-group mb-3">
            <label htmlFor="" className="form-group-label"></label>
            <input type="text"
            autoFocus //automatically goes to the search bar
            className="form-control"
            required
            placeholder ='AddTask'
            id="taskLabel"
            onChange = {(evt)=>(onTextChange(evt))} />
            <span class="input-group-text">
                <Button type="submit">
                    <FaPlus className="" role="button"/></Button>
            </span>
                
        </div>
    </form>
  )
}

export default Addtask