// 1 ci sual

function reverseArray(input) {
    let arrayim = new Array;
    for(let i = input.length-1; i >= 0; i--) {
        arrayim.push(input[i]);
    }
    return arrayim;
}

let sentence = ["sense", "make", "all", "will", "This"]
console.log(reverseArray(sentence));

//  2 ci sual

function greetAliens(){
    let aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"]
    console.log( `Oh powerful ${aliens[0]} we humans offer our unconditional surrender!`)
    console.log( `Oh powerful ${aliens[1]} we humans offer our unconditional surrender!`)
    console.log( `Oh powerful ${aliens[2]} we humans offer our unconditional surrender!`)
    console.log( `Oh powerful ${aliens[3]} we humans offer our unconditional surrender!`)
}
greetAliens()

// 3 cu sual

 const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
  ];
  const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
  ];

  function justCoolStuff(){
    coolStuff.sort()
    myStuff.sort()
    let i=coolStuff.length, k=myStuff.length , a=[];
    while(i>0 && k>0){
        i--; k--;
        if(coolStuff[i]>myStuff[k]) k++;
        else if (coolStuff[i]<myStuff[k]) i++;
        else a.push(coolStuff[i])
    }
    console.log(a)
  }
  justCoolStuff()

//4 cu sual

const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
  ];
  const dinner = [
    { name: "hamburger", source: "meat"},
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
  ];

  function isTheDinnerVegan(a){
    for(let i=0;i<a.length;i++){
        if((a[i].source=='meat')){
            return false}
            else{
                return true
            }
    }
  }
  
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
  
  