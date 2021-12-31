function addMore(){
    document.getElementById("error").innerHTML="";
     
    
    let name = document.getElementById("name").value;
    if(name==""){
        document.getElementById("error").innerHTML="PLease Enter Value";
        
    }
    else{
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = name;
        li.appendChild(p);
        // let possition = box.firstElementChild;
    
        let button = document.createElement("button");
        button.textContent = "x"
        button.className = "remove"
        li.appendChild(button);
         


    if(possition=null){
        box.appendChild(li);
    }  
    else{
        box.insertBefore(li, possition);
    }      
        
    }
    document.getElementById("name").value="";

}

let btn= document.querySelector("ul");
btn.addEventListener("click", function(e){
    let box = document.getElementById("box");  
    let li=e.target.parentNode;
    box.removeChild(li);
})