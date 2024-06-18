import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
//for html above import is required
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtask from './AddTask';
import Header from '../Header';
import Search from './Search';
// import {FaTrash} from 'react-icons/fa'


const Content = (props) => {
    // const todoList =["Wake up early",
    //     "Pray to God",
    //     "Complete study",
    //     "Exercise",
    //     "Bath twice"
    // ];
    const [todoList,setTodoList] = useState (()=>{
        const data = localStorage.getItem('todoList')
        return data?JSON.parse(data):[]
    }
);


    const [search, setSearch] = useState("")
const handleChange = (id) =>{
    const newTodoList = todoList.map((row) => 
        row.id === id ? {...row,checked:!row.checked} : row
    )
    setTodoList(newTodoList)
    localStorage.setItem('todolist',JSON.stringify(newTodoList))
}



        const handleCheckboxChange = (id) => {

            const newTodoList = todoList.map((row) => 
                row.id===id? {...row,checked : !row.checked} : row
            );
            // directly giving row.checked without giving ..row gives only checked. Just returns checkbox as an object
            // ...row give row alnog with changed checked column.
            setTodoList(newTodoList);
            localStorage.setItem('todoList',JSON.stringify(newTodoList))
            //Direct state update
            // setTodoList(todoList =>
            //     todoList.map(item =>
            //         item.id === id ? { ...item, checked: !item.checked } : item
            //     )
            // );
            // Functional state update
        };


        const handleDelete = (id) => {
           const newTodoList = todoList.filter((row) => 
                row.id!==id
            );
            setTodoList(newTodoList);
            localStorage.setItem('todolist',JSON.stringify(newTodoList))

        };

    return(
        <main className="container-flex" style = {{ backgroundColor: props.color}}>
            <Header
            search = {search}
            setSearch = {setSearch}/>
            <Addtask
                todoList = {todoList}
                setTodoList = {setTodoList}
            />
            {/* <Search
                search = {search}
                setSearch = {setSearch}
            /> */}
            <ul className="list-group">
            {todoList.length!==0 ?
                (
                    
                    // todoList.forEach( item =>
                    //     <li>{item}</li>
                    // )
                    // todoList.map((element) => 
                    todoList.filter((element)=>element.descr.toLowerCase().includes(search.toLowerCase()))
                    .map((element) => 

                        <div className="">
                            <li className="list-group-item" style={{background:'none',
                                border:'none'
                            }} key ={element.id}>
                            <input type="checkbox" name="" id="" value="" className="me-2 form-check-input" checked={element.checked}
                            onChange={() => handleCheckboxChange(element.id)} />
                            
                            <label className="col-11">{element.descr}</label>
                            <button onClick={() => handleDelete(element.id)} style={{
                                background:'none',
                                border:'none',
                                cursor: 'pointer'
                            }}>
                                <i class="fa-sharp fa-solid fa-trash"></i>
                                </button>
                            </li> 
                            
                                
                        </div>
                        // react - <FontAwesomeIcon icon={faTrash} />
                        //<FaTrash/>
                        
                    )
                    //shouldn't keep curly braces.
                )
                : (<h4 class="NewTodo">Lets make a  Todo List!</h4>)}
            </ul>
        </main>
    )
}

export default Content
