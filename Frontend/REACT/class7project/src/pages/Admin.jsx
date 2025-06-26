import { useSelector,useDispatch } from "react-redux";
import { setAdminByRedux } from "../slices/AdminSlice";
function Admin() {
    const tanu=useDispatch()
    const fname = useSelector((value) => value.AdminData.name)
    const Age = useSelector((value) => value.AdminData.Age)
      const Email = useSelector((value) => value.AdminData.Email)
function setAdmindetail(){
tanu(setAdminByRedux())
}

    return (
        <div className="body">
        <div  className="userpage">
                      <h1>ADMIN Details</h1>
            <p>Name: <span>{fname}</span></p>
            <p>Age           : <span>{Age}</span></p>
            <p>Email: <span>{Email}</span></p>
            <button onClick={()=>{
                setAdmindetail()
            }}>Change Details</button>
        </div>
        </div>
    )
}
export default Admin;