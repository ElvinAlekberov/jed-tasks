function add(num1, num2, callback) {
   let sum = num1 + num2;
   if (typeof callback === 'function') {
     callback(sum);
   }
 }
 add(2,3,console.log);


 function logGreeting() {
  const name = 'Elvin';
  console.log(`${name} is a JS developer`);
}

logGreeting();
 
 
function greeting(cins, ad) {
  function title() {
    if (cins === "Q") {
      console.log("Cənab " + ad);
    } else if (cins === "K") {
      console.log("Xanim " + ad);
    }
  }
  return title;
}
const greeting1 = greeting('Q', 'Ali');
greeting1(); 

const greeting2 = greeting('K', 'Ayşe');
greeting2(); 



function userActive(username) {
  console.log(username + " is active now");
}
userActive("Elvin");
userActive("Shamil");
userActive("Elchin");