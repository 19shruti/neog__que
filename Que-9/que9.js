

var output=document.querySelector("#output");

var serverURL="https://jsonplaceholder.typicode.com/user";
function handleErrors(response)
{
    if(!response.ok)
   var ans=   Error(response.status);
   output.innerHTML=ans;
    // return response;
}
fetch(serverURL)
.then (handleErrors)
.then(response=>{
    // console.log("ok")
    output.innerHTML=response;
})
// .then((data)=>{
//     console.log(data)
// })
// .catch(error=>console.log(error));