var txtInput=document.querySelector("#txtInput");
var textoutput=document.querySelector("#textoutput");
var btn_translate=document.querySelector("#btn-translate");
var output=document.querySelector("#textoutput");



 var serverURL="https://api.funtranslations.com/translate/pirate.jso";
 function getTranslatedURL(input)
 {
     return serverURL+"?"+"text="+input;
 }

function clickHandler()
{
    console.log("button is clicked");
    var inputText=txtInput.value ; //taking input
  //fetch input 
  fetch(getTranslatedURL(inputText))
  .then(Response=>Response.json()) //get input response 
  .then ((json)=>{
      var translatedText=json.contents.translated;
      output.innerHTML=translatedText;
  })
  .catch(error=>console.log(error));

};
 btn_translate.addEventListener("click",clickHandler);

