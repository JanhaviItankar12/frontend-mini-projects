let price = 19.5;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
let cashfromUser=document.querySelector("#cash");
let purchasebtn=document.querySelector("#purchase-btn");
let change=document.querySelector("#change-due");


purchasebtn.addEventListener("click",()=>{
  let cash=parseFloat(cashfromUser.value);
  
  if(cash>price){
 let  changeNeeded=cash-price;
 let totalcashinCID=cid.reduce((sum,item)=>sum+item[1],0);

//  first sum=0;then itemfrom each of 1 th index added with sum
 
if(totalcashinCID===changeNeeded){
  let closedChangeArray=cid
  .filter(item=>item[1]>0)    // neglect the value having the item[1]==0
  .sort((a,b)=>b[1]-a[1])
  .map(item=>`${item[0]}:  $${item[1]}`)
  .join("<br>");

  change.innerHTML=`Status: CLOSED <br>${closedChangeArray}`;
  change.style.color="red";
  return;
}

  let currencyUnits=
  [
    ["ONE HUNDRED",100],
    ["TWENTY",20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ]
let changeArray=[];
for(let i=0;i<currencyUnits.length;i++){
  let name=currencyUnits[i][0];
  let value=currencyUnits[i][1];
  let amtAvailable=cid.find(item=>item[0]===name)[1];
  
  let amtGive=0;
  while (changeNeeded>=value && amtAvailable>0) {
    changeNeeded-=value;
    changeNeeded=Math.round(changeNeeded*100)/100;
    amtAvailable-=value;
    amtGive+=value;
  } 
  if(amtGive>0){
    changeArray.push([name,amtGive]);
  }
}

if (changeNeeded>0) {
  change.innerHTML="Status: INSUFFICIENT_FUNDS";
  change.style.color="red";

} 
else {
  change.innerHTML=`Status: OPEN<br>${changeArray.map(item=>`${item[0]}:  $${item[1]}`).join("<br>")}`;
  change.style.color="green";
}
}
else if (cash<price) {
  alert("Customer does not have enough money to purchase the item");
}
else if (cash==price) {
  change.textContent="No change due - customer paid with exact cash";
  change.style.color="orange";
}

});




