console.log("i'm in class 2");
// Non Primitive data types -> if a wanna store more than one value into a single variable that time we complex data type
// 1-Object = Its a collection of key value pairs
// key should be unique but value can be same 


// if you give same id to the value so that latest value reflect on a key 
const details={
    id:101,
    id:105,
    name:"Grow tech",
    NGO:"yes",
    ownBy:"DRF",
    1023:"tanu",
    "1024-786":"tanishq"
}
console.log(details);
console.dir(details);
// comsole.log(typeof(details))
// comsole.log(typeof(details)) this tells the type of a details varaibles i.e object
// access th eobject properties
console.log(details.id);
// sahi tarika
console.log(details['1023']) ;
// galat tarika chal to jayega but dikaat ayegii map lagane me
console.log(details[1023]);
// sahi taika " - " k liye  "1024-786"
console.log(details["1024-786"]);


