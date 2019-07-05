let p  = new Promise((resolve,reject)=>{
    let a = 1 + 2;

    if(a === 2){
      resolve("It is resolved successfully");
    }
    else {
      reject("It is rejected");
    }

});

p.then((message)=>{
  console.log("Promise resolved with message:= "+ message);
}).catch((message)=>{
    console.log("Promise rejected with message:= "+message);
});
