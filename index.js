let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
const click = document.getElementsByClassName("click");


function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newe = document.createElement("ul");
        newe.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newe);
        inputs.value="";
       
        }
    }




function clickis (){
    addEventListener.click 
    document.write("hii");


    

    

}
