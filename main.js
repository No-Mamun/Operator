
/*
Comparison & Logical Operators

Equality valu only (==);

identity valu and Equal Type (===);

inequality (!==);

Not identity (!==);

greater Than (>)

smaller Than or less than (<);

greater Than or Equal two(>=);

less than Than or Equal two(<=);

Mot ! =

Not !==

***javascript arithmethic operator,

+,-,*,/,%,**;++,--,==;

No:1,

let number_One = 100;

let number_Two = 200;

let sum = (number_One + number_Two);

console.log (sum);

No:2,

let number_One = '100';

let number_Two = '200';

let sum = (number_One + number_Two);

console.log (sum);

No:3,

let number_One = 10;

let number_Two = 5;

let div = (number_One * number_Two);

console.log (div);

No:4,

let number_One = 10;

let number_Two = 5;

let mod = (number_One / number_Two);

console.log (mod);

No:5,

let number_One = 10;

let number_Two = 3;

let mod = (number_One / number_Two);

console.log (mod);

No:6,

let number_One = 10;

let number_Two = 3;

let mod = (number_One ** number_Two);

console.log (mod);

No:7

var x = 9;

var y = 2;

var result = x**y;

console.log(Math.pow(x,y));

No:8

for (let index = 0; index <100; index ++){

              console.log(index);
}

No:9

for (let index = 0; index <100; index ++){

              console.log("The number is",index);
}

No:10

let x = 20;

let y = 3;

let devide = x / y;

let final = Math.floor(devide) * y;

let remainderis = x - final;

console.log(5 % 3);

console.log(remainderis);

***javascript assignment operator;

No:1

let x = 10;

let y = 5;

let z = x + y;

console.log(x+y);

No:2

let x = 10;

x+=20;

console.log(x);

Logical Operators

No:3

let x = 10;

x-=5;

console.log(x);

No:4

let x = 10;

x/=5;

console.log(x);

No:5;

let x = 10;

x*=5;

console.log(x);

No:6

let x = 10;

x%=5;

console.log(x);

No:7

let x = 5;

x**=3;

console.log(x);

***javascript comparison operator

No:1
let x = 10;

let y = 10;

let z = x==y;

console.log(z);(true)

No:2

let x = 10;

let y = 5;

let z = x==y;

console.log(z);(folse)

No:3
let x = '10';

let y = 10;

let z = x===y;

console.log(z);(folse)

No:3

let x = 10;

let y = 10;

let z = x!=y;

console.log(z);(folse)

No:4

let x = 10;

let y = 5;

let z = x!=y;

console.log(z);(true)


No:5

let x = '10';

let y = 10;

let z = x!==y;

console.log(z);(true)

No:6

let x = '10';

let y = 25;

let z = x < y;

console.log(z);(true)

No:7

let x = '10';

let y = 25;

let z = x > y;

console.log(z);(folse)

No:8

let x = '10';

let y = 10;

let z = x > y;

console.log(z);(folse)

No:9

let x = '1';

let y = 10;

let z = x > y;

console.log(z);(folse)

No:10

let x = '100';

let y = 10;

let z = x > y;

console.log(z);(true)

No:11

let x = 10;

let y = 20;

let z = x >= y;

console.log(z);(false)

No:12

let x = 10;

let y = 10;

let z = x >= y;

console.log(z);(true)

No:13

let x = 10;

let y = 20;

let z = x >= y;

console.log(z);(false)

No:14

let x = 20;

let y = 20;

let z = x >= y;

console.log(z);(true)

No:15

let x = 20;

let y = 20;

let z = x <= y;

console.log(z);(true)

*** javascript logical operator

AND &&,OR ||,!,

No:1

let x = 10;

let y = 20;

let z = x < y && x == y;

console.log(z);(false)

No:2

let x = 10;

let y = 20;

let z = x < y && x != y;

console.log(z);(true)

No:3

let x = 10;

let y = 20;

z = !(x !=y);

console.log(z);(false)

No:4

let x = 10;

let y = 20;

z = !(x ==y);

console.log(z);(true)

No:5

let x = 10;

let y = 20;

z = x == y || x < y;

console.log(z);(true)

No:6

let x = 10;

let y = 20;

z = x == y || x > y;

console.log(z);(false)

No:7

let x = 10;

let y = 20;

z = x == y || x > y;

console.log(z);(false)

*** Ternary Operator

No:1

var age = 18;

var type = (age >=18)? "adult" : "child";

console.log(type);(adult)

No:2

var age = 18;

var type = (age >=18)? "adult" : "child";

console.log(type);(child)

No:3

var age = 19;

var type = age >=18 ? "adult" : age <10 ? "child" : "young";

console.log(type);

No:4

var age = 18;

var type = age >=18 ? "adult" : age <10 ? "child" : "young";

console.log(type);

No:5

var age = 9;

var type = age >=18 ? "adult" : age <10 ? "child" : "young";

console.log(type);

No:6

var age = 11;

var type = age >=18 ? "adult" : age <10 ? "child" : "young";

console.log(type);

No:7

var a = 5;

var access = a> 5;

console.log(access);(false)

No:8

var a = 6;

var access = a> 5;

console.log(access);(true)

No:9

var number = Number(prompt("enter a number"));

if(number >0){
              console.log("positive");
}
else{
              console.log("Negative");
}

No:10

var number = Number(prompt("enter a number"));

// if(number >0){
//               console.log("positive");
// }
// else{
//               console.log("Negative");
// }

number > 0 ? console.log("Positive") : console.log("Negative");

No:16

var number = Number(prompt("enter a number"));

if(number >0){
              console.log("positive");
}
else if(number<0){
              console.log("Negative");
}
else{
              console.log("zero");
}

No:11

var number = Number(prompt("enter a number"));

var result = number> 0 ? "positive" : number <0 ? "Negative" : "zero";

console.log(result);

NO:12

var email = "mamunkhanmfc@gmail.com";

var pwd = "@ba456faf";

if(email==="mamunkhanmfc@gmail.com" && pwd === "@ba456faf"){

              console.log("wellcome!Login succes")
}
else{
              console.log("wellcome! No-Login succes");
}

NO:13

var email = "mamunkhanmfc@gmail.com";

var pwd = "@ba456faf";

if(email==="mamunkhanmfc@gmail.com" && pwd === "@ba456fa"){

              console.log("wellcome!Login succes")
}
else{
              console.log("wellcome! No-Login succes");
}

*/


//*** */ how to use while loop in javascript

No:1

for (var i = 1; i <= 100; i = i+1){

              document.write(" " + i);
}
