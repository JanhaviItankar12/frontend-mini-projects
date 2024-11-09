let searchInput=document.querySelector("#search-input");
let searchbtn=document.querySelector("#search-button");
let pokemonName=document.querySelector("#pokemon-name");
let pokemonID=document.querySelector("#pokemon-id");
let pokemonWeight=document.querySelector("#weight");
let pokemonHeight=document.querySelector("#height");
let pokemonTypes=document.querySelector("#types");
let pokemonHP=document.querySelector("#hp");
let pokemonAttack=document.querySelector("#attack");
let pokemonDefense=document.querySelector("#defense");
let pokemonSpecialattack=document.querySelector("#special-attack");
let pokemonSpecialdefense=document.querySelector("#special-defense");
let pokemonSpeed=document.querySelector("#speed");
let pokemonImg=document.querySelector("#sprite");

let url="https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

searchbtn.addEventListener("click",()=>{
    let searchTerm=searchInput.value.toLowerCase().trim();
    let found=false;
    
    pokemonTypes.innerHTML="";
    
    fetch(url)
    .then((result) => {
        return  result.json();
        
    })
    .then((res)=>{
       for (let  pokemon of res.results) {
        
        if(pokemon.name.toLowerCase()===searchTerm || pokemon.url.endsWith(`/${searchTerm}/`))
        {
            found=true;
        //    fetch data from specific pokemon urls
           
            fetch(pokemon.url)
            .then((detailResult) => {
                return detailResult.json();
            })
            .then((details)=>{
                pokemonImg.setAttribute("src",details.sprites.front_default);
                pokemonName.innerHTML=details.name.toUpperCase();
                pokemonID.innerHTML=details.id;
                pokemonWeight.innerHTML=details.weight; 
                pokemonHeight.innerHTML=details.height; 
                // clear previous types and display the new ones
                    details.types.forEach(typeInfo => {
                //    create new div for each type 
                     let typeElement=document.createElement("div");
                     typeElement.innerHTML=typeInfo.type.name.toUpperCase();
                     pokemonTypes.appendChild(typeElement);
                    });
                 

                pokemonHP.innerHTML=details.stats[0].base_stat; 
                pokemonAttack.innerHTML=details.stats[1].base_stat; 
                pokemonDefense.innerHTML=details.stats[2].base_stat; 
                pokemonSpecialattack.innerHTML=details.stats[3].base_stat; 
                pokemonSpecialdefense.innerHTML=details.stats[4].base_stat;
                pokemonSpeed.innerHTML=details.stats[5].base_stat;
            })
            .catch((err) => {
                console.log("Error Found=",err)
            });
            break;
        }

    }
       
       if (!found) {
          alert("Pokémon not found");
       }
    })
    
    .catch((err) => {
        console.log("Error-",err);
    });
});



