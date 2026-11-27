var x=10;
var x=20;
let a=50;
a="hello";
const b=40;
console.log(typeof a);
let obj={
    name:"test"
}
console.log(obj.name);
console.log(5=='5');
function add(a,b){
    return a+b;
}
console.log(add(100,100));
//arrow function
const addl=(a,b)=>a+b;
console.log(add(1,5));
const calc=(a,b,callback)=>{
    return callback(a,b);
}
let arr=[1,2,3,4,5];
const double=num=>num*2;
const doublearr=arr.map(double);
console.log(doublearr);
let details=[
    {name:"test1",marks:50,age:20},
    {name:"test2",marks:60,age:25},
    {name:"test3",marks:70,age:30}
] 
const namelist=details.map((item)=>item.name);  
console.log(namelist);
const filterlist=details.filter((item)=>item.marks>50);
console.log(filterlist);
const findlist=details.find((item)=>item.marks>50);
console.log(findlist);
const reducearr=arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log(reducearr);
let n='prabhu';
let mark=60;
console.log(`my name is ${n} and my mark is ${mark}`);
let am=[1,2,3,4,5];
let [first,second,third]=am;
console.log(first,second,third);
console.log("1");
setTimeout(()=>{
    console.log('2')
},3000)
console.log("3");