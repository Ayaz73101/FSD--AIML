// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//     const result = clbk(20,40);
//     console.log(msg+":"+result)
// }

// sumWithMsg(sum,"Hey using calculation with js")

// function login(msg,error){
//     if (error){
//         console.log("Error is"+error)
//     }
//     else{
//         console.log("Welcome"+msg);
//     }
// }

// function loginVerification(username,password,clbk){
//     if(username =="muskanjaiswal" && password=="12345678"){
//         clbk("Success",null);
//     }else{
//         clbk(null,"Username or password is incorrect")
//     }
// }

// loginVerification("muskanjaiswal","12345678",login)

//function generateNumber(clbk){
  //  let randomNumber = Math.floor(Math.random() * 100) + 1;
    //clbk(randomNumber);
//}

//function checkOddEven(number){
    if(number % 2==0){
        console.log(number+"is Even");
    }
    else{
        console.log(number+"is Odd");
    }
//}

//generateNumber(checkOddEven)
