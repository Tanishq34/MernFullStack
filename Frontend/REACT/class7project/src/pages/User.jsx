
import { useSelector , useDispatch} from "react-redux"
import { setUserByRedux } from "../slices/UserSlice"
import "./Page.css"
function User(){
const tanu=useDispatch()
 const fname = useSelector((value) => value.UserData.Name)
    const Age = useSelector((value) => value.UserData.Age)
      const Email = useSelector((value) => value.UserData.Email)
 function setUserdetail(){
  
tanu(setUserByRedux())
}

    return(
         <div className="body">
        <div className="userpage">
            <h1>USER Details</h1>
            <p>Name: <span>{fname}</span></p>
            <p>Age            :<span>{Age}</span></p>
            <p>Email: <span>{Email}</span></p>
            <button onClick={()=>{
                setUserdetail()
            }}>Change Details</button>
        </div>
        </div>
    )
}
export default User;