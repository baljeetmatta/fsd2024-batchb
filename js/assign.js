// function test(e)
// {
//     if (e.target==fpara)
//     console.log("Para Clicked",e);

//     if (e.target==btn)
//         console.log("Btn  Clicked",e);

// }

// let fpara=document.querySelector("#fpara");
// fpara.addEventListener("click",test);

// let btn=document.querySelector("#btn");
// btn.addEventListener("click",test);

// let input1=document.querySelector("#input1");
// let input2=document.querySelector("#input2");
// let result=document.querySelector("#result");
// let addbtn=document.querySelector("#addbtn");

// addbtn.addEventListener("click",function(){

//     let operand1=parseInt(input1.value);
//     let operand2=parseInt(input2.value);
//     let add=operand1+operand2;
//     result.value=add;

// })
//ASSIGN2
let digits = document.querySelector("#digits");
// let btn1=document.querySelector("#btn1");
// let btn2=document.querySelector("#btn2");
// let btn3=document.querySelector("#btn3");


// btn1.addEventListener("click",clickHandler);
// btn2.addEventListener("click",clickHandler);
// btn3.addEventListener("click",clickHandler);
// let operand1=0;
// let operator="";
// let isNew=false;
// let elements=document.querySelectorAll(".btns");
// elements.forEach(function(element){
//     element.addEventListener("click",clickHandler)
// })

// let operations=document.querySelectorAll(".operations");
// operations.forEach(function(element){
//     element.addEventListener("click",operationHandler)
// })

// function operationHandler(e){

//     if(e.target.innerText=="+")
//         {
//                 operand1=parseInt(digits.innerText);
//                 operator="+";
//                 isNew=true;
//         }
//         if(e.target.innerText=="=")
//             {
//                     let operand2=parseInt(digits.innerText);
//                     let add=operand1+operand2;
//                     digits.innerText=add;
//                     isNew=true;

//             }
// }
// function clickHandler(e)
// {
//     let target=e.target;
//  if(digits.innerText=="0")
//     digits.innerText="";

//  if(isNew==true)
//     {
//     digits.innerText="";
//     isNew=false;
//     }

//     //a=a+10 a+=10
//     digits.innerText+=target.innerText;
// }
let tasks = [];
let id = 1;
let taskname = document.querySelector("#taskname");
let taskList = document.querySelector("#taskList");
taskname.addEventListener("keypress", function (e) {

    if (e.key == "Enter") {
        // tasks.push(taskname.value);
        let obj = {};
        obj.title = taskname.value;
        obj.status = "Pending";
        obj.taskid = id;
        id++;
        tasks.push(obj);
        setLocalStorage();

        addtoDom(obj);
        console.log(tasks);
        taskname.value = "";


    }
    // console.log("Enter Called");

})
function addtoDom(task) {
    // let li=document.createElement("li");
    // li.innerText=taskname.value;

    // taskList.append(li);
    let taskdiv = document.createElement("div");
    taskdiv.setAttribute("id", task.taskid);


    let span = document.createElement("span");
    span.innerText = task.title;

    let chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.addEventListener("click", function () {
        //  console.log(chk.checked);
        let newstatus = "";
        if (chk.checked == true) {
            newstatus = "Completed";
            span.style.textDecoration = "line-through";

        }
        else {
            newstatus = "Pending";
            span.style.textDecoration = "none";

        }

        tasks = tasks.map(function (item) {
            if (item.taskid == task.taskid)
                item.status = newstatus;

            return item;
        })
        setLocalStorage();
        console.log(tasks);

    })
    let delbtn = document.createElement("button");
    delbtn.innerText = "del";
    // delbtn.addEventListener("click", function () {
    //     taskdiv.remove();
    //     //console.log(tasks);
    //     tasks = tasks.filter(function (item) {
    //         if (item.taskid != task.taskid)
    //             return true;

    //     })
    //     console.log(tasks);
    // })
    delbtn.addEventListener("click",delHandler)


    taskdiv.append(span);
    taskdiv.append(chk);
    taskdiv.append(delbtn);


    taskList.append(taskdiv);


}

function delHandler(e)
{
    let parent=e.target.parentNode;
    let id=parent.getAttribute("id");

    parent.remove();
        tasks = tasks.filter(function (item) {
            if (item.taskid != id)
                return true;

        })
        setLocalStorage();
        console.log(tasks);

}
function setLocalStorage()
{
    localStorage.setItem("tasks",JSON.stringify(tasks));
    
    //let arr=["one","two"];
    //document.write(arr);
    // let obj={};
    // obj.title="First";
    // document.write(obj);

//    localStorage.setItem("name",JSON.stringify(obj));
   // let data=JSON.parse(localStorage.getItem("name"));

   // console.log(data.title);



}

function getLocalStorage()
{

    if(localStorage.getItem("tasks"))
        tasks=JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach(function(item){
        addtoDom(item);
        
    })
    console.log(tasks);

}
getLocalStorage();
