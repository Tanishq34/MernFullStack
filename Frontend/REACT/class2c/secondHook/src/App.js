import Card from "./components/Card.jsx";
import { useState } from "react";
import "./components/card.css";
function App() {
  
  const [imgsrc,setImage]=useState("https://media.licdn.com/dms/image/v2/C5112AQGvuO8Jk2Vl9A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520118597226?e=2147483647&v=beta&t=TSInh7VchTQiXTwFJStJkUR7bQbJ3A7b8amkXnS1pdk")
 const [name,setName]=useState("MS Dhoni")
   const [abouttoMS,setAbouttO]=useState("M.S. Dhoni: The Untold Story is based on the real-life story of Indian cricketer Mahendra Singh Dhoni")
  
   return (
    < div className="App-container">
    {/* <Card imgurl={imgsrc} changeImg={setImage} 
    MSname={name} changeName={setName}
    aboutTOMS={abouttoMS} changeAboutMS={setAbouttO}/>

     <Card imgurl={imgsrc} changeImg={setImage} 
    MSname={name} changeName={setName}
    aboutTOMS={abouttoMS} changeAboutMS={setAbouttO}/>
     <Card imgurl={imgsrc} changeImg={setImage} 
    MSname={name} changeName={setName}
    aboutTOMS={abouttoMS} changeAboutMS={setAbouttO}/>
     <Card imgurl={imgsrc} changeImg={setImage} 
    MSname={name} changeName={setName}
    aboutTOMS={abouttoMS} changeAboutMS={setAbouttO}/>
     <Card imgurl={imgsrc} changeImg={setImage} 
    MSname={name} changeName={setName}
    aboutTOMS={abouttoMS} changeAboutMS={setAbouttO}/> */}
    {/* if you wanna write many time that time we use mapping method */}
    {
    [1,2,3,4,5].map((item,index)=>(<div key={index}>
   <Card imgurl={imgsrc} changeImg={setImage} 
    MSname={name} changeName={setName}
    aboutTOMS={abouttoMS} changeAboutMS={setAbouttO}/></div>
  ))
    }
    </div>

    
  );
}

export default App;
