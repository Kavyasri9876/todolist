import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className="form-group">
        <div class="input-group mb-3">
            <input type="text"
            class="form-control"
            placeholder="Search Item"
            autoFocus
            required 
            onChange={(e)=> setSearch(e.target.value)}/>
        </div>
    </form>
  )
}

export default Search
