


//returntype funcname (arguments)


// function test()
// {
//     console.log("Test called");
// }
// //test();



// var print1=function(){
//     console.log("Print called");

// }

// print1();
// function sum()
// {
//     console.log(arguments[0],arguments[1]);
//     console.log(arguments);

//     //return x+y;


// }

// sum(12,2,3,4,5,6)
// //console.log(sum(12,10));

//CALLBACK 
// function task1()
// {
//     console.log("Task 1");
// }
// function task2()
// {
//     console.log("Task 2");
// }
// function executeTask(task)
// {
//     console.log("Executing Task..");
//     task();

// }
//  executeTask();
// executeTask(task2);
// executeTask(function(){
// console.log("Another function");

// });

//let arr=[5,4,5,6];
//let arr=[34,5,6,7,8];
// arr.unshift(100);
// console.log(arr);
//arr.splice(2,0,100,1001,1002,1003,1004);
//console.log(arr);

// arr.push(100);
// console.log(arr);
// let result=arr.pop();
// console.log(arr);

// console.log('element removed is ',result);

// arr[20]=10;
// arr[51]=1;
// console.log(arr);
// let arr=[23,4,5,67];
// let arr1=[100,200,300];
// function task1(item,index,array)
// {
//     console.log("Called",arguments[1]);

// }
// printArray(arr,task1);
// printArray(arr1,task1);

// // for(i=0;i<arr.length;i++)
// //     console.log(arr[i]);

// //printArray(arr1);



// // for(i=0;i<arr.length;i++)
// //     console.log(arr[i]);




// function printArray(array,task)
// {
// for(i=0;i<array.length;i++)
//    // console.log(array[i]);
//         task(array[i],i,array);

// }

//let arr=[23,4,5,6,7];
//FILTER
//let result=[];
// for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2==0)
//             result.push(arr[i]);
//     }
// arr.forEach(function(item){
//     if(item%2==0)
//         result.push(item);
// })
// let result=arr.filter(function(item){
//     if(item%2==0)
//         return true;
    
// })
// console.log(result);
// let results=arr.map(function(item){
//     return 1;
// })
// console.log(results);
// let results=[];
// arr.forEach(function(item){
//     if(item%2==0)
//     results.push(item*2);
//     else
//         results.push(item);
// })
// let results=arr.map(function(item){

//     // if(item%2==0)
//     //     return item*2;
//     // else
//     //     return item;
//     return (item%2==0?item*2:item);
// })
// console.log(results);

// //foreach, map, filter
// // function iterate(item,index,array)
// // {
// // console.log(item);

// // }

// // arr.forEach(iterate);
// // arr.forEach(function(item){

// //     return ;
// // })

//objects
// let obj={"10th":'Code','age':30,'name':'Test'}
// //obj.name
// //console.log(obj["10th"]);
// //let key="name";
// // console.log(key);
// // console.log(obj.key);
// // console.log(obj[key]);

// //console.log(obj["name"]);

// //console.log(obj.name);
// for(x in obj)
//     {
//         console.log(x);
//         console.log(obj[x]);


//     }

// let obj={};
// obj.name="Test";
// //console.log(obj);
// //console.log(obj.city);
// obj.city="";

// console.log(obj);
// delete obj.name;
// console.log(obj);

//
let person={
    name:'Code',
    age:30,
    getName:printName
};
let person1={
    name:'Quotient',
    age:30,
    getName:printName
};
person1.getName();


function printName()
{
   
        console.log(this.name);

}

//ARRAY OF OBJECTS
// let arr=[person,person1];
// arr.forEach(function(item){
//     console.log(item.name);

// })
let obj={
    name:'Code',
    age:30,
    education:[490,420],
    marks:{'x':490,'xii':400}

}
//obj.education[0]
obj.education.forEach(function(item){
    console.log(item);
})
console.log(obj.marks.x);


//let arr=[{id:"Item1",rate:30},{id:"Item2",rate:90}]

