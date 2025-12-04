
//-------------------TYPE CONVERSION-------------------------------

/*console.log("oviya"+2);                   //implicit conversion
console.log("1"+2);
console.log("10"-2,"5"*2,"15"/3,true-1);
console.log(Number("123"));
console.log(Number("123abc"));           //explicit conversion
console.log(Number(true));
console.log(Number(false));
console.log(Number("abc"));
console.log(Number("abc"));
console.log(String("abc"));
console.log(String("123"));
console.log(Boolean("123abc"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(5=="5");
console.log(0==false);
console.log(null==undefined);
console.log(10=="10");
console.log(true==1);
console.log(""==false);
console.log(5==="5");
console.log(0===false);                  //strict equality
console.log(null===undefined);
console.log(10==="10");
console.log(true===1);
console.log(""===false);
*/


//-----------------------------------VARIABLE ACCESSIBLILITY---------------------

/* let age=25                              //varibale can be only reassigned not decalred with let but with var keyword it can be reassigned and redeclared
 age=30                                    //variables cannot be reassigned and redcleared with const keyword
console.log(age);  */


//--------------------------------HOISTING---------------------

/* 
console.log(x);                            //hoisting is only possible with var keyword
 x=10;
 */



//---------------SCOPE OF THE VARIABLE-------------------------------------


 /* function ex(){
    if(1){
        var count=19;                      //function scope&block scope:it can be accessed anywhere in the gunction if let is used it can be only accesed in the block
    }                                        //var is a function scope variable and let,const are block scope variable
    console.log(count);
 }
 ex();
 */




 //----FUNCTIONS--------------------


/*  function greet(){
    console.log("hello world");
    
 }
 greet();
 greet(); */


 //-------------------------HOISTING FUNCTIONS-----------------------
 

/*  function greet(){
    console.log("hello world");
    
 }
 greet();
 sayhello();
 function sayhello(){
    console.log("hello");
 }
 */


 //--------------------  ANONYMOUS FUNCTION EXPRESSION---------------------


/* let greet=function(){                              //any keyword can be used to assign name to function
    console.log("hello world");
}
greet(); */


 //--------------------  NAMED FUNCTION EXPRESSION---------------------


/* let greet=function greeting(){                              //any keyword can be used to assign name to function
    console.log("hello world");
}
greet(); */

//------------------CALLBACK FUNCTIONS---------------------------

/* function process(callback){
    console.log("processing");                 //function passed as an argument for another function  is called as callback function
    callback();
}
function done(){
    console.log("task completed");
}
process(done);
 */


//-------------------------HIGHER ORDER FUNCTIONS--------------------

/* function highorder(func){
    console.log("processing");             //function which recieves another function as an argument is called higher order function
    func();
}
function done(){
    console.log("task completed");
}
highorder(done);
 */



//--------------ARROW FUNCTION---------------------


//normal function
/* const greet=function(name){
    return "hello"+ name;                     //ex1
}
//aroow function
const greetName=(name)=>{
    return "hello"+ name;
}

console.log(greet("oviya"));
console.log(greetName("oviya"));  */
                                                           
/* let add=(a,b)=>a+b;
console.log(add(2,3));                              //ex2
                                                    //any keyword can be given
let square=(a)=>a*a;
console.log(square(2)); 
 */


//---------------------ARRAYS---------------             --------METHODS-------------------------------

/* const fruits=["mango","banana","orange"];
console.log(fruits);
const Newfruits=fruits.push("grapes");         //push method will return the updated length of the array-push()-add to an end
console.log(Newfruits);                       //unshift()-add to the beginning                    
console.log(fruits.length);                   //pop()-remove from an end                 
                                               //shift()-remove from the beginning 
 */

//----------------------SLICING--------------SHALLOW COPY ----------NEW ARRAY WILL BE CRAETED FOR THE CHANGES-----------------------ORIGINAL ARRY WILL GET AFFECTED -----------------------


/* let fruits=["mango","banana","orange","grapes","kiwi"];
let citrus=fruits.slice(1,4);
console.log(citrus);
console.log(fruits);
let lasttwo=fruits.slice(-2);
console.log(lasttwo); */


//---------------------------SPLICING-------------it will modify the original array--------------

/* 
let fruits=["mango","banana","orange","grapes","kiwi"];
let removed=fruits.splice(1, 2);
console.log(removed);                         //indexOf(),lastIndexOf(),if not found=-1===return index
console.log(fruits);                        //includes()=====return boolean value(true/false)
fruits.splice(1, 0, "papaya");              
console.log(fruits); */



//find()-return the first and foremost elemnt according to the condition given
/* let num=[1,4,7,12,150];
let found=num.find((element)=>element>10);
console.log(found); */



 //map()-return another array with same length
/*
 let num = [1, 4, 7, 12, 150];
let result = num.map(element => {
    return element > 10 ? element : null;
});
console.log(result); */



//printing even numnbers usind find

/* let num = [1, 3, 4, 7, 10, 15];
let firstEven = num.find(element => element % 2 === 0);
console.log(firstEven); */

//printing even numnbers usind map

/* let num = [1, 3, 4, 7, 10, 15];

let evenMap = num.map(element => {
    return element % 2 === 0 ? element : null;
});

console.log(evenMap); */

























