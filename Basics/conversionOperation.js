const num=undefined;

console.log(typeof num);
console.log(typeof(num));

let valueInNumber = Number(num);
// /console.log(typeof valueInNumber);

let isloggedin = "Abhishek";

let booleanisloggedin = Boolean(isloggedin);
console.log(booleanisloggedin);

// 1=>true;
//0=>false
//""=>false
//"Abhiskek"=>true

let somenumber= 34;
let stringnumber= String(somenumber);
console.log(stringnumber);
console.log(typeof stringnumber);


//*****************************************Operations****************************************

let value=3;
let negvalue=-value;
console.log(negvalue);

console.log(2+2);
console.log(2*3);
console.log(34/23);
console.log(2**4);
console.log(2**8);
console.log(43/234);
console.log(3**2);
console.log(323%323);
console.log(23%12);

let str1="hello";
let str2=" Abhishek";
let str3=str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1+"2");
console.log(1+2+"45")
console.log((3+4) *4%5);

console.log(true);
console.log(+true);
console.log(false);
console.log(+false);

let num1,num2,num3,num4;
num1 = num2 = num3 = num4 = 2+2;
console.log(num4);

let gamecounnter=100;
gamecounnter++;
++gamecounnter;
console.log(gamecounnter);