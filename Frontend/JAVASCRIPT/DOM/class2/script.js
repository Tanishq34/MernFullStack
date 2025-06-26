// console.log("hello");

// how to access custom attributes 

// const bycustomattribute=document.querySelector('[data-name="tanu"]')
// console.log("ye lo output",bycustomattribute);
// const mydiv=document.querySelector("div")
// console.log("output", mydiv);
// console.log("with innerhtml-",mydiv.innerHTML);
// console.log("with innerText-",mydiv.innerText);
// console.log("with textContent-",mydiv.textContent);

// // Create a tag by append
// let myid=document.getElementById("firstid")

// let mydiv1=document.createElement("p")
// mydiv1.innerHTML="har har mahadev";
// console.log(mydiv1);
// myid.append(mydiv1)

// Create a tag by append child
// const body=document.querySelector("body")
// let mydiv1=document.createElement("p")
// mydiv1.innerText="har har mahadev";
// body.prepend(mydiv1)

// Add element on button

// const a=document.querySelector(".firstdiv")
// const btn=document.querySelector("button")

// function getEleByClick(){
//     const para=document.createElement("p")
//     para.innerText="har har mahadev ho gya"
//     a.appendChild(para)
//      const removebtn=document.createElement("button")
//     removebtn.innerText="REMOVE"
//     a.appendChild(removebtn)
//      const updatebtn=document.createElement("button")
//     updatebtn.innerText="Update"
//     a.appendChild(updatebtn)
// removebtn.addEventListener("click",()=>{
//      const para=document.querySelector("p")
//  a[0].removeChild("para")
//  a[0].removeChild("removebtn")
// })

// }

// btn.addEventListener("click",()=>{
//     getEleByClick()
// })

const container = document.getElementsByClassName("div1");
const mybtn = document.querySelector("button");
console.log(mybtn);

function addkaro() {
  const newpara = document.createElement("p");
  newpara.textContent = "new paragraph added";
  container[0].appendChild(newpara);
  //crete btn
  const remobtn = document.createElement("button");
  remobtn.textContent = "Remove Content";
  container[0].appendChild(remobtn);
  //event
  remobtn.addEventListener("click", () => {
  const newpara = document.querySelector("p"); 
  container[0].removeChild(newpara)
  container[0].removeChild(remobtn)
    container[0].removeChild(updbtn)
});
 const updbtn = document.createElement("button");
  updbtn.textContent = "Update Content ";
  container[0].appendChild(updbtn);
updbtn.addEventListener("click", () => {
  const newpara = document.querySelector("p"); 
   newpara.textContent="Update changes";
   container[0].appendChild(newpara)

});

}

mybtn.addEventListener("click", () => {
  addkaro();
});









