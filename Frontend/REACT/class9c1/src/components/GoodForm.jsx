import { useState } from "react";

function GoodForm() {

    const [Formdata, setFormData] = useState({
        UserName: "Tansihq",
        Age: 22,
        pass: "jahdfb",
        city: "katni",
        Gender:"male",
   
    })
    const [ProgrammingLanguage,setPl]=useState([])

    function handleFormData(event) {
        setFormData((initialvalue) => {
            return { ...initialvalue, [event.target.name]: event.target.value }
        })

    }
    function handleprog(event){
       if(event.target.checked){
        setPl([...ProgrammingLanguage,event.target.value])
       }
       else{
        let arr=ProgrammingLanguage.filter((item)=>{
return(item!==event.target.value)
        })
        setPl(arr)
       }
    }
    function submitFormdata(event) {
        event.preventDefault()
        console.log("FOrm data me value ", Formdata,ProgrammingLanguage)
    }
    return (
        <div>
            <form onSubmit={(event) => { submitFormdata(event) }}>
                <div>
                    <label htmlFor="username">UserNAme</label>
                    <input type="text" id="username" name="username" value={Formdata?.UserName} onChange={(event) => {
                        handleFormData(event)
                    }} />
                </div>
                <div>
                    <label htmlFor="Age">Age</label>
                    <input type="text" id="Age" name="Age" value={Formdata?.Age} onChange={(event) => {
                        handleFormData(event)
                    }} />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" name="pass" value={Formdata?.pass} onChange={(event) => {
                        handleFormData(event)
                    }} />
                </div>

                <div>
                    <label>City</label><br />
                    <select name="city" onChange={(event) => {
                        handleFormData(event)
                    }}>
                      
                        <option value="Katni">Katni</option>
                        <option value="Ujjain">Ujjain</option>
                        <option value="Bhopal">Bhopal</option>
                    </select>
                </div>
                <div>
                    <p>GEnder:</p>
                    <label htmlFor="gen1">Male</label>
                    <input type="radio" id="gen1" name="Gender" value="male" onChange={(event) => {
                        handleFormData(event)
                    }} />
                    <label htmlFor="gen2">Female</label>
                    <input type="radio" id="gen2" name="Gender" value="female" onChange={(event) => {
                        handleFormData(event)
                    }} />
                    <label htmlFor="gen3">Other</label>
                    <input type="radio" id="gen3" name="Gender" value="other" onChange={(event) => {
                        handleFormData(event)
                    }} />
                </div>

                <div>
                    <p>Programming Language:</p>
                    <label htmlFor="prog1">c++</label>
                    <input type="checkbox" id="prog1" name="ProgrammingLanguage" value="c++" onChange={(event) => {
                        handleprog(event)
                    }} />
                    <label htmlFor="prog2">Java</label>
                    <input type="checkbox" id="prog2" name="ProgrammingLanguage" value="Java" onChange={(event) => {
                        handleprog(event)
                    }} />
                    <label htmlFor="prog3">python</label>
                    <input type="checkbox" id="prog3" name="ProgrammingLanguage" value="python" onChange={(event) => {
                        handleprog(event)
                    }} />
                </div>
                <div>
                    <button >Submit</button>
                </div>

            </form>
        </div>
    )
}
export default GoodForm;