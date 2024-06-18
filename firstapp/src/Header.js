import React,{useState} from 'react'
import {FaSearch} from 'react-icons/fa'

function Header({search,setSearch}) {
    const headerStyle =
    {
        backgroundColor:"cadetblue",
        color:"white",
        textAlign:"center"
    };

    const handleSubmit = (evt) => {
      evt.preventDefault();
    }
  return (
    <header className="d-flex align-items-center">
      <div className="col-9">
      <h1>My Todo List</h1>
      </div>
      <form classname="form-group" onSubmit = {handleSubmit}>
      <div class ="input-group  mb-3 my-2 px-2">
        <input type="text" 
        className="form-control" 
        placeholder = "Search Tasks..."
        autoFocus
        required
        onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" style={{background:'none',border:'none',color:'white'}}>
        <FaSearch role="button"/>
        </button>
      </div>
      </form>
    </header>
  )
}

export default Header







