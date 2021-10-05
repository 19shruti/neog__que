// var serverURL='https://jsonplaceholder.typicode.com/users';

// fetch(serverURL)
// .then((response)=>{
//     show the responce data of the server
//     console.log(response);
//     console.log("The Response Status is "+response.status);

//     if(response.status===404)
//     {
//         document.querySelector("h1").innerHTML=`PAGE NOT FOUND ${response.status}`;
//     }
//     else if(response.status===401)
//     {
//         document.querySelector("h1"),innerHTML=`YOU ARE NO LOGGED IN ${response.status}`;
//     }
//     else
//     {
//         document.querySelector("h1").innerHTML=`ok!! `;
//     }
// })
// .then(response=>response.json())
// .then((json)=>{
// console.log(json);
// })
// .catch((err)=>{
//     document.querySelector("h1").innerHTML=`you have got an error.. ${err}`;
// });


const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((res) => {
      console.log(res)
    if (res.status === 404) {
      document.querySelector(
        "h1"
      ).innerHTML = `Page not found! ${res.status}`;
    } else if (res.status === 404) {
      document.querySelector(
        "h1"
      ).innerHTML = `You are not logged in. ${res.status}`;
    } else {
      document.querySelector("h1").innerHTML = `Ok!`;
      return res.json();
    }
  })
  .then((data) => {
  //   console.log(data);
  })
  .catch((err) => {
    document.querySelector("h1").innerHTML = `You got an error. ${err}`;
  });