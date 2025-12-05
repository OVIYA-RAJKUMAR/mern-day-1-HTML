//------------synchronisation---------------

/* console.log("start");
setTimeout(()=>{
    console.log("inside timeout");
},2000)
console.log("end"); */

/* setTimeout(()=>{
    console.log("made tea");                  //callback hell-timeour inside an another timeout

    setTimeout(()=>{
        console.log("made coffee");

        setTimeout(()=>{
            console.log("made milk");
        },5000)
    },5000)
},5000) */



/* let iceCreamPromise=new Promise((resolve,reject)=>{
    let iceCreamReady=true;
    if(iceCreamReady){
        resolve("ice cream is ready");
    }
    else{
        reject("ice cream is not ready");
    }
});
iceCreamPromise.then((result)=>{
    console.log("Yah "+result);
}).catch((error)=>{
    console.log("oops "+error);
}) */

/* 
let iceCreamPromise=new Promise((resolve,reject)=>{
    let iceCreamReady=true;
    if(iceCreamReady){
        resolve("ice cream is ready");
    }
    else{
        reject("ice cream is not ready");
    }
});
iceCreamPromise.then((result)=>{
    console.log("Yah "+result);
}).catch((error)=>{
    console.log("oops "+error);
})

async function getIceCream() {
    try{
        let message=await iceCreamPromise;
        console.log("yay"+message);
        
    } catch(error){
        console.log("oops"+mesage);
        
    }
    
}
getIceCream();

 */


//---------------array destructuring---------


/* const [a,b,c]=[10,20,30];
console.log(a);
console.log(b);
console.log(c);



 */
/* 
const[first,...rest]=[1,2,3,4,5,6];
console.log(first);
console.log(rest);
 */


//-------------object destructuring-----------------


/* const user={name:"oviya",age:"19"};
const {name,age}=user;
console.log(name);
console.log(age); */

//-----------------function destructuring-----------

/* 
function greet({name,age})   {
    console.log(`hello ${name},you are ${age} years old`);
}

greet({
    name:"oviya",
    age:"19"
});
    */


