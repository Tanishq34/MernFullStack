import { useState } from "react"
import "./App.css"

function App() {
  // let name = "Avi"

  // const [name, setName] = useState("karan sir")
  // const [Age, setAge] = useState("40")
  //   const [study,setStudy] = useState("B.Tech")


  let Details = {
    name1: "Tanishq Rimjha",
    age: 22,
    qualification: "B.Tech",
    locality: "Indore",
    hobby: "cricket",
  }
  const [BioData, setDetails] = useState(Details)

  function setDetailsData(name,value){
    setDetails((oldvalue)=>{
      return {...oldvalue,[name]: value}
    })
  }
  // function change() {
  //   console.log("Hello!!")
  //   // name = "Prachi"
  //   setName("Prachi")
  //   console.log(name)
  // }
  // console.log(name)
  return (
    <div className="Details">
      <p>Name:{BioData.name1}</p>
      {/* <button onClick={() => {setDetails({...BioData,name1:"Adarsh"}) }} >change Status</button> */}
      <button onClick={()=>{
setDetailsData("name1","Adarsh")
      }}>change status</button>

      <p>Age:{BioData.age} </p>
            {/* <button onClick={() => {setDetails({...BioData,age:30}) }} >change Status</button> */}

       <button onClick={()=>{
setDetailsData("age",24)
      }}>change status</button>

      <p>qualification:{BioData.qualification} </p>
       <button onClick={()=>{
setDetailsData("qualification","School")
      }}>change status</button>


      <p>locality:{BioData.locality} </p>
       <button onClick={()=>{
setDetailsData("locality","gao ka")
      }}>change status</button>
      

      <p>Hobby:{BioData.hobby} </p>
       <button onClick={()=>{
setDetailsData("hobby","singing")
      }}>change status</button>









      {/* <p> name: {name} <span><button onClick={()=>{
        setName("Mohan sir")
      }}>change</button></span>
      </p>
      <p> Age: {Age} <span><button onClick={()=>{
        setAge("26")
      }}> change Age</button></span>
      </p>
      <p> Study: {study} <span><button onClick={()=>{
        setStudy ("M.Tech")
      }}> change Study </button></span>
      </p> */}




      {/* <button onClick={()=>{
        change()
      }}>Change Name</button> */}
      {/* <button onClick={change()}>Name-bADAL</button> */}
      {/* <button onClick={change}>Name</button> */}
    </div>

  );
}

export default App;

