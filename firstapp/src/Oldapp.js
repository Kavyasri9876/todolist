
//import './App.css';
import Header from './Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import UseStateDemo from './components/UseStateDemo';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const nameList = ["Kavya","Chinni","Varnitha","shinchan","Doraemon","Nobita"]
  // const myName = "Kavya Sri"
  // const person ={firstName:"Kavya", lastName:"Sri",
  //   fullName:  function()  {
  //     return this.firstName + " "+ this.lastName
  //   }
  //   // when using arrow function you cannbot use this operator
  // }; //object
  // const {firstName,lastName} = person;
  // const handleNameChange = () => {
  //   let index = Math.floor(Math.random()*nameList.length)
  //   return nameList[index];
  // }
  return (
    <div className="App">
      
      {/* <h1>Good Morning {myName}</h1> */}
      {/* <h1>Good Morning {handleNameChange()}</h1>
       */}
       {/* <h1>Good Morning {person.firstName+" "+person.lastName}</h1>  */}
       {/* cant display objects directly in react */}
       {/* <h1>Good Morning {firstName + " "+lastName}</h1>
       <h1>{person.fullName()}</h1>
       <h2>{1===3}</h2>  */}
       {/* we cannot print boolean values */}

       {/* <Header/> */}
       <Content color="lightblue"/>
       {/* <UseStateDemo/> */}
       <Footer/>
    </div>
  );
}

export default App;
