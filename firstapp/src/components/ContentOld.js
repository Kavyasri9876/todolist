import React from 'react'

const ContentOld = () => {
    const nameList = ["Kavya","Chinni","Varnitha","shinchan","Doraemon","Nobita"];
    const handleNameChange = () => {
          let index = Math.floor(Math.random()*nameList.length)
          return nameList[index];
        }
  
    return (
    <div>
      <p>Enjoy Learning 
        <span style = {{
            color:"cadetblue"
        }}>{" "+handleNameChange()}</span>
      </p>
    </div>
  )
}

export default ContentOld
