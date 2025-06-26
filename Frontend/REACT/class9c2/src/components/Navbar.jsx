import React from 'react'

//  function Navbar() {
//   const [searchitem,setSearchitem]=useState(data)
//   return (
//     <div>
//       <input type="text" placeholder='Search Items' name='' />
//     </div>
//   )
// }
// export default Navbar;
import  { useState } from 'react'

function Navbar({ getValueFromNavbar, setData, data, copydata }) {
    const [searchItem, setSearchItem] = useState();
    function manegeSearchItem(event) {
        let ans=event.target.value.toLowerCase()
        let newItems = data.filter((data) => {
            return data.toLowerCase().includes(ans)
        })
        // console.log("item which is search", newItems)
        setData(newItems)
       if(event.target.value===""){
        setData(copydata)
         
       }
    }

    // function storeItem(event) {
    //     event.preventDefault()
    //     getValueFromNavbar(searchItem)
    // }



    return (
        <div>

            <input type='search' name='search' placeholder='search items' value={searchItem} onChange={(event) => {
                manegeSearchItem(event)
            }} />


        </div>
    )
}

export default Navbar