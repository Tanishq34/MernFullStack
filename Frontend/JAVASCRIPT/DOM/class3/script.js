const mydiv=document.querySelector(".div1")
console.log(mydiv.attributes);
// to get  the value 
console.log(mydiv.attributes[0]);
// to update the value of attributes
console.log(mydiv.attributes[0].value="jai ho");

//  if you wanna add or set attribute
mydiv.setAttribute("data-info","tanushq ka data")

// to get the value thorugh loop
for(let i=0;i<3;i++){
    console.log(mydiv.attributes[i].value); 
}
// add css through js in html
// 1 way
abc.style.color="yellow";
abc.style.backgroundColor="green";

