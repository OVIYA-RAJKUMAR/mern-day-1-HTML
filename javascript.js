
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


 //--------------------  NAMED FUNCTION EXPRESSION---------------------


/* let greet=function(){                              //any keyword can be used to assign name to function
    console.log("hello world");
}
greet(); */


 //--------------------  ANONYMOUS FUNCTION EXPRESSION---------------------


