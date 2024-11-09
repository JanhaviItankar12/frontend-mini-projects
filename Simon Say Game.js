let gamesqnce=[];
let userseqnce=[];

let buttons=["red","green","yellow","purple"];


let gameOver=document.querySelector("#gameover");



let started=false;
let level=0;
let highscore=0;


let h2=document.querySelector("h2");
let body=document.querySelector("body");
let h4=document.querySelector("h4");

    
     h4.innerText=`Your Highest Score is ${highscore}`;   


document.addEventListener("keypress",function(){
    if(started==false){
    
    console.log("Game is started");
    started=true;
    levelup();
}
 });


 function levelup(){
    userseqnce=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randmindx=Math.floor(Math.random()*buttons.length);
    let randmcolr=buttons[randmindx];
    let randmbtn=document.querySelector(`.${randmcolr}`);
    

    gamesqnce.push(randmcolr);
    console.log(gamesqnce)

    flashbtn(randmbtn);
 }

 function flashbtn(butn){
    butn.classList.add("flash");
    setTimeout(function(){
    butn.classList.remove("flash"); 
    },200);

 }

 function Userflashbtn(butn){
    butn.classList.add("userflash");
    setTimeout(function(){
    butn.classList.remove("userflash"); 
    },200);

 }


 function btnPress(){
    let btn=this;
    Userflashbtn(btn);

    userColor=btn.getAttribute("id");

   userseqnce.push(userColor);

   checkAns(userseqnce.length-1);
   

 }

 let allbtns=document.querySelectorAll(".btn");
  for(btn of allbtns){
    btn.addEventListener("click",btnPress)
  }

  function checkAns(indx){
    
    if(userseqnce[indx]==gamesqnce[indx]){
        if(userseqnce.length==gamesqnce.length){
            setTimeout(levelup,500);
        }
          

    }
    else{
        
        

       


        h2.innerHTML=`Game Over!  <b>Your Score is ${level}</b><br> Press any Key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        
        
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);


        gameOver.play();

        Updatehighscore();
       reset();
       console.log("current level:",level);
    } 
     
    
  }


 
 function reset(){
    started=false;
    gamesqnce=[];
    userseqnce=[];
    level=0;
   
 }

   function Updatehighscore(){
    console.log("current level:",level,"current score:",highscore);
    if(level>highscore){
        highscore=level;
        
       console.log(highscore);
   
    
    h4.innerText=`Your Highest Score is ${highscore}`;
    console.log("new highscore:",highscore);
    
    }
    
   }