var output=document.querySelector("#output");
var serverURL="https://jsonplaceholder.typicode.com/todos";
fetch(serverURL)
.then(Response=>Response.json())
.then((json)=>{


    for(let i=0; i<json.length ;i++)
    {
        var titles=json[i].title;
        if(json[i].completed=== false)
        {
            output.innerHTML+=`\n <p style ="color:grey"> Tittle :: ${titles}</p> \n Flag:: ${json[i].completed} \n `;            
        console.log(`%c Tittles: ${titles}`,`color:grey`,`\n Flag:${json[i].completed}\n`)
        }
        else{
            output.innerHTML+=`\nTittle:: ${titles} \n flag:: ${json[i].completed} \n` ;
            console.log(` Tittles: ${titles}`,`\n Flag:${json[i].completed}\n`)
    }
}
})
