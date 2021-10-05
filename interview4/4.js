var inputText=document.querySelector("#inputText")
var btn=document.querySelector("#btn");
if(btn)
{
 btn.addEventListener("click",oddeeven);
} 
function oddeeven()
{
 if(inputText.value %2==0)
{
    document.querySelector("#output").innerHTML="event no. ";
}
else{
    document.querySelector("#output").innerHTML="odd no."
}    
}


