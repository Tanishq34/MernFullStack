// const mydiv = document.querySelectorAll(".items")
// const addbtn = document.getElementById("btn1")
// const inputfld = document.getElementById("user")

// //  console.log(inputfld.value);

// // const inputdata=inputfld.innerText;

// function addurl() {

//     console.log(inputfld.value);
//     const url = document.createElement("p");
//     url.innerText = inputfld.value;
//     mydiv[0].append(url)
//     // update button
//     let updatebtn = document.createElement("button")
//     updatebtn.innerText = "Update"
//     mydiv[0].append(updatebtn)
//     // remove button
//     const removebtn = document.createElement("button")
//     removebtn.innerText = "X"
//     mydiv[0].append(removebtn)
//     removebtn.addEventListener("click", () => {
//         const newpara = document.querySelector("p")
//         mydiv[0].removeChild(newpara)
//         mydiv[0].removeChild(removebtn)
//         mydiv[0].removeChild(updatebtn)
//     })
//     updatebtn.addEventListener("click", () => {
//         let savebtn = document.createElement("button")
//         savebtn.innerText = "save"
//         mydiv[0].append(savebtn)
//       mydiv[0].removeChild(updatebtn)  
//         inputfld.value = url.innerText
//     })
//     savebtn.addEventListener("click",()=>{
//         url.innertext=inputfld.value;
//         mydiv[0].append(url);
//         mydiv[0].prepend(updatebtn);
//         mydiv[0].removeChild(savebtn);
//         inputfld.value=""
//     })

// }
// addbtn.addEventListener("click", () => {
//     addurl();
// })

// by sir

let inputBox = document.getElementById("input");

let btn = document.getElementById("btn");
let AddDiv = document.getElementById("items-div");

function createItem() {
    if (inputBox.value === "") {
        alert("Ham to add nhi hoga");
        return;
    }
    const para = document.createElement("p");
    para.textContent = inputBox.value;
    AddDiv.appendChild(para);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "make change";
    AddDiv.appendChild(updateBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    AddDiv.appendChild(deleteBtn);
    inputBox.value = "";
    deleteBtn.addEventListener("click", () => {
        AddDiv.removeChild(para);
        AddDiv.removeChild(updateBtn);
        AddDiv.removeChild(deleteBtn);
    });

    updateBtn.addEventListener("click", () => {
        //step-1 no. create Button
        const saveBtn = document.createElement("button");
        //step-2 Give the name of button
        saveBtn.innerText = "Save";
        //step-3 Append karo save btn ko
        AddDiv.prepend(saveBtn);
        //step-4 remove updatebtn
        AddDiv.removeChild(updateBtn);

        inputBox.value = para.innerText;

        saveBtn.addEventListener("click", () => {
            //jaise hee save me click karo input box me string empty dikhe
            para.innerText = inputBox.value;
            AddDiv.prepend(para);
            AddDiv.append(updateBtn);
            AddDiv.removeChild(saveBtn);
            inputBox.value = "";
        });
    });
}

btn.addEventListener("click", () => {
    createItem();
});


