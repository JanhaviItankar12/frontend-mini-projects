let a=document.querySelector("#user-input");
let result=document.querySelector("#results-div");
let checkbtn=document.querySelector("#check-btn");
let clearbtn=document.querySelector("#clear-btn");




checkbtn.addEventListener("click",()=>{
   if(a.value===""){
    alert("Please provide a phone number");
    return;
   }
   
      
//   let cleanedinput=a.value.replace(/[^0-9]/g,"");
//   let count=cleanedinput.length;
  
  let phonePattern =/^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  

if(phonePattern.test(a.value)){
    result.textContent=`Valid US number: ${a.value}`;
    result.style.color="green";
    
}

else{
    result.textContent=`Invalid US number: ${a.value}`;
    result.style.color="red";
    
}



a.value="";
});

clearbtn.addEventListener("click",()=>{
    result.textContent="";
    a.value="";
})