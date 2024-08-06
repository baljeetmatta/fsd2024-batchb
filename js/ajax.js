// //1. create an object XMLHttpRequest
// let request=new XMLHttpRequest();
// //2. Prepare the request, METHOD,URL,Mode(async,sync)
// request.open("GET","../data.json");
// //3. load
// // request.onload=function(){

// // }
// request.addEventListener("load",function(){

//     let result=JSON.parse(request.responseText)
//     console.log(result);

// })
// //4. Send/Submit
// request.send();

// let request=new XMLHttpRequest();
// request.open("GET","https://reqres.in/api/users?page=2");
// request.addEventListener("load",()=>{

//     let result=JSON.parse(request.responseText);

//     console.log(result);


// })
// request.send();

// let request=new XMLHttpRequest();
// request.open("POST","https://reqres.in/api/users");
// request.addEventListener("load",()=>{

//     console.log(request.responseText);

// })
// request.setRequestHeader("content-type","application/json");

// let obj={};
// obj.name="CodeQuotient"
// obj.job="Trainer";
// request.send(JSON.stringify(obj));
//request.send("variable=value&variable=value");

// let no=12;
// let prom=new Promise((resolve,reject)=>{

//     if (no%2==0)
//         resolve(no);
//     else
//         reject();


// })

// prom.then((no)=>{
//     console.log("Even",no);
// }).catch(()=>{

//     console.log("Not an Even");

// })
// let f=fetch("../data.json");
// //console.log(f);
// f.then((data)=>{
//     //console.log(data);
//    return  data.json();

// }).then((data)=>{
//     console.log(data);
// })
// fetch("../data.json").then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);

// })

// fetch("https://reqres.in/api/users?page=2").then ((data)=>{return data.json()}).then ((data)=>{
//     console.log(data);

// })
// let obj={};
// obj.name="Code";
// obj.job="Test";
// fetch("https://reqres.in/api/users",{
//     method:"POST",
//     body:JSON.stringify(obj),
//     headers:{
//         "Content-type":"application/json"
//     }
// }).then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// })
// async function getData()
// {
//     let response=await fetch("https://reqres.in/api/users?page=2");
//     let result=await response.json();
//     console.log(result);




// }

// getData();