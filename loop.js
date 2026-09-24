//console.log("First")
//console.log("Second")
//for(let i=0;i<1000000;i++){
//console.log("Second") 
//}
//console.log("Third")
//setTimeout(() => {
  //  setTimeout(() => {
    //    setTimeout(() => {
      //      setTimeout(() => {
        //        setTimeout(() => {
          //          setTimeout(() => {
            //            setTimeout(() => {
              //              setTimeout(() => {
                //                setTimeout(() => {
                  //                  console.log("Hello I am Ayaz setTimeout");
                    //            }, 1000);
                      //      }, 1000);
                        //}, 1000);
 //                   }, 1000);
   //             }, 1000);
     //       }, 1000);
       // }, 1000);
 //   }, 1000);
//}, 1000);
const myPromise = new Promise((resolve, reject) => {
    resolve("Login Successful");
});

async function handlelogin() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

handlelogin();
