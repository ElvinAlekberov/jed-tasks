/*--------27.04.23--------*/

// task 1
function square(){
   let num = prompt("eded daxikl edin");
   console.log(Math.sqrt(num));
}
// task 2
function far(c){
   console.log("Farenheit:" + " " + ((c * 1.8 ) + 32));
}
far(10);

// task3

let user1 = +prompt("reqem daxil edin");
if ( user1 > 0 ){
   console.log ("musbet reqem")
}
else if (user === 0){
   console.log ("reqem beraberdir sifira")
}
else{
   console.log ("menfi reqem")
}

// task4

let oddOrEven = (a) => {
   if (a % 2 === 0){
      console.log("четные");
   }
   else{
      console.log("нечетный");
   }
}
oddOrEven(5);

// task5

let a = 4;
let b = 5;
let c = 6;
const max = () => {
   if( a>b && a >c){
      console.log(a)
   }
   else if ( b > c && b > a)
      console.log(b)
   else {
      console.log(c)
   }

}
max();

let d = 4;
let e = 5;
let t = 6;
function Max(){
   console.log(Math.max(d,e,t))
}
Max();

// task6

const FizzBuzz = (a) => {
   if (a % 3 === 0 && a % 5 === 0) {
       console.log('fizzbuzz')
   } else if (a % 5 === 0) {
       console.log('buzz')
   } else if (a % 3 === 0) {
       console.log('Fizz')
   } else {
       console.log('dogru deyil');
   }
}
FizzBuzz(30);

// task7
const user = +prompt("Eded daxil edin");
if(user > 9 && user < 100){
   alert("Iki reqemdir")
}
else{
   alert("iki reqemli deyil")
}

// task8
const sum = (a,b,c) => {
   if ((a + b + c )> 100){
       alert('coxduuu 100 den')
   } else {
       alert('azdi 100 den')
   }
}
sum(12,12,120);

/*-----30.04.23-------*/



// TASK.1

let ureyimdeOlanEded = Math.floor(Math.random() * 50 + 1)
let userinEdedi = +prompt("Eded daxil et")
let say = 1;
let prize1= 1000;
let prize2 = 750;
let prize3 = 250;
let prize4 = -250;

while(userinEdedi !== ureyimdeOlanEded){
   say++
   if(userinEdedi > ureyimdeOlanEded){
      userinEdedi = +prompt("Ededi awagi salin:")
   }
   else {
      userinEdedi = +prompt("Ededi yuxari qaldirin:")
   }  
} if(say === 1){
   console.log("Ededi" + " " + say + " " + "defeye tapdin. Kapital bankdan" + ' ' + prize1 + ' ' +  "azn kocurulsun. Reqem" + " " + ureyimdeOlanEded);
} else if(say >1 && say < 6){
   console.log("Ededi" + " " + say + " " + "defeye tapdin. Kapital bankdan" + ' ' + prize2 + ' ' +  "azn kocurulsun. Reqem" + " " + ureyimdeOlanEded);
} else if(say >5 && say < 10){
   console.log("Ededi" + " " + say + " " + "defeye tapdin. Kapital bankdan" + ' ' + prize3 + ' ' +  "azn kocurulsun. Reqem" + " " + ureyimdeOlanEded);
}else if(say >10){
   console.log("Ededi" + " " + say + " " + "defeye tapdin. Kapital bankdan" + ' ' + prize4 + ' ' +  "azn kocurulsun. Reqem" + " " + ureyimdeOlanEded);
}
// TASK.2

function sumTo(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
     sum += i;
   }
   return sum;
 }
 
 console.log( sumTo(2) );


//  TASK.3

for(let i = 8; i >= 1; i--){
   for(let n = 0; n <= i; n++){
      document.write("*")
   }
      document.write("<br/>")
}
