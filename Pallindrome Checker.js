

let inp=document.querySelector("#text-input");

let p=document.querySelector("#result");

let btn=document.querySelector("#check-btn");

  btn.addEventListener("click",()=>{


    let a=inp.value.trim();
    let reverse="";
    let corectStrg="";
    if (inp.value==="") {
        alert("Please input a value");
        return;
    }

for(let i=0; i<a.length;i++){
    if(/[a-zA-Z0-9]/.test(a[i])){
        corectStrg+=a[i];

    }
}


for (let i=corectStrg.length-1;i>=0;i--){
   
    reverse+=corectStrg[i];
}
if(reverse.toLowerCase()===corectStrg.toLowerCase()){
    p.innerText=`"${inp.value} is a palindrome"`;
}
else{
    p.innerText=`"${inp.value} is not a palindrome"`; 
}
  })




