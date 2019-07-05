const dog =  false;
const cat = false;


new Promise((resolve, reject)=>{

    if(dog)
      resolve("Bark");
    else reject('error')

}).then((msg)=>{
  console.log('Resolved msg: ' + msg);
}).catch((msg)=>{
  console.log('Reject msg: ' + msg);
});


/*
function animalCheck(dogCallBack,  catCallBack, errorCallBack) {

    if(dog) {

        dogCallBack('Barks');

    }

    else if (cat) {

        catCallBack('Meow');
    }

    else {

        errorCallBack('error');
    }


}

animalCheck(
  (message)=>{
      console.log(message);
  },
  (message)=>{
    console.log(message);
  },
  (message)=>{
    console.log(message);
  });
*/
