// task 1
function prop2Taker (obj) {
return(obj["prop-2"])
}
// console.log(prop2Taker(obj))


// task 2
function propertyTaker (obj,proprtyName){
  return(obj[proprtyName])
}
const obj2 = {
  continent: 'Asia', 
   country: 'Japan'
}
const proprtyName = 'continent'
console.log(propertyTaker(obj2,proprtyName))

// task 3
function existsAndTruthy (obj3, proprtyName){
return(obj3[proprtyName])
}
const obj3 = {
  a : 1,
  b : "s",
  c : 3,
}
obj3.b ? console.log(true) : console.log(false)

if (obj3.b) {
  console.log(true)
}else{
  console.log(false)
}