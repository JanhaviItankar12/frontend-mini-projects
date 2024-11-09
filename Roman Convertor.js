let inp=document.querySelector("input");
let btn=document.querySelector("button");
let p=document.querySelector("p");


btn.addEventListener("click",()=>{

let b="";
let a=parseInt(inp.value);
if (isNaN(a)) {
    p.innerText="Please enter a valid number";
    return;
}
else if(a<1){
    p.innerText="Please enter a number greater than or equal to 1";
    return;
}
else if(a>3999){
    p.innerText="Please enter a number less than or equal to 3999";
    return;
}


let thousands=Math.floor(a/1000);

if(thousands==3){
    b+="MMM";
}
else if (thousands==2) {
    b+="MM";
}
else if (thousands==1) {
    b+="M";
}
a%=1000;

let hundreds=Math.floor(a/100);

if (hundreds==9) {
    b+="CM";
} 
else if(hundreds==8) {
    b+="DCCC";
}
else if(hundreds==7) {
    b+="DCC";
}
else if(hundreds==6) {
    b+="DC";
}
else if(hundreds==5) {
    b+="D";
}
else if(hundreds==4) {
    b+="CD";
}
else if(hundreds==3) {
    b+="CCC";
}
else if(hundreds==2) {
    b+="CC";
}
else if(hundreds==1) {
    b+="C";
}

a%=100;
let tens=Math.floor(a/10);
if(tens==9){
  b+="XC";
  
}
else if(tens==8){
    b+="LXXX";
}
else if(tens==7){
    b+="LXX";
}
else if(tens==6){
    b+="LX";
}

else if(tens==5){
    b+="L";
}
else if(tens==4){
    b+="XL";
}
else if(tens==3){
    b+="XXX";
}
else if(tens==2){
    b+="XX";
}
else if(tens==1){
    b+="X";
}

a%=10;


if (a==9) {
    b+="IX";
}
else if(a==8){
   b+="VIII";
}
else if(a==7){
    b+="VII";
 }
 else if(a==6){
    b+="VI";
 }
 else if(a==5){
    b+="V";
 }
 else if(a==4){
    b+="IV";
 }
 else if(a==3){
    b+="III";
 }
 else if(a==2){
    b+="II";
 }

 else if(a==1){
    b+="I";
 }
p.innerText=b;

})