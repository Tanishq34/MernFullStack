import "./Form.css";
import { useState } from "react";
function GoodForm() {

    //Ye industry approach 
    const [formValaData, setFormData] = useState({
        myemail: "abc@gmail.com",
        age: 25,
        pass: "123456"
    })

    function changeFormData(event) {
         const { name, value } = event.target;
        setFormData((oldData) => {
            return { ...oldData, [name]: value }
        })
    }
    function handleFormData(event) {
        event.preventDefault();
        console.log("Form Vala Data ", formValaData)
        const { myemail, age, pass } = formValaData
        console.log(myemail, age, pass)
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleFormData}>
                <h2>Login</h2>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" value={formValaData?.myemail} name="myemail"
                            onChange={(event) => {changeFormData(event)}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="AGE">Age</label>
                        <input type="number" id="AGE" placeholder="Enter your AGE" value={formValaData?.age} name="age" onChange={(event) => {
                            changeFormData(event)
                        }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" value={formValaData?.pass} name="pass" onChange={(event) => {
                            changeFormData(event)
                        }} />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default GoodForm;