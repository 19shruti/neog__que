// var output=document.querySelector("#output");
// var text=document.querySelector("#text");
// var serverURL="https://api.funtranslations.com/translate/yoda.json";

// function errorHandling(error)
// {
    
//     output.innerHTML=error ;
// }
// fetch(serverURL)

// .then(Response=>Response.json())
// .then(Response=>{
//     if(!Response.ok)
//     {
//         throw Response.error.message;
     
//     }
//     else{
//         output.innerHTML="success";
//     }
// })

// .then(json=>{console.log(json)})
// .catch(error=>errorHandling(error))

var outputText = document.querySelector("#output")
var api = "https://api.funtranslations.com/translate/yoda.json//";



fetch(api)
.then(response=> response.json())
.then(response => {
    if (response.status === 200){
        outputText.innerText = "success";
    }else{
        outputText.innerText = response.error.message;
        
    }
}
)