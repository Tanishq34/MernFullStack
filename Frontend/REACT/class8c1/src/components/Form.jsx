import "./Form.css"
import { useState } from "react";
function Form() {
    const [FormkaData,setFormkaData]=useState()
    return (
        <div class="form-container">
            <form>
                <h1>Login</h1>
                <div class="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="emai;" placeholder="Enter Email" value="bheru maharaj"/>
                </div>
                <div class="form-group">
                    <label htmlFor="pass">Pasword:</label>
                    <input type="password" id="pass;" placeholder="Enter Password" value="123456"/>
                </div>
                 <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Form;




