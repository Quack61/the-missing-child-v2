const cheeseAnswer = "pepperjack"
const toppingAnswer = "jalepenos"
const shapeAnswer = "square"
const sizeAnswer = "personal"

let cheeseGuess = 'cheese'
let toppingGuess = 'topping'
let shapeGuess = 'shape'
let sizeGuess = 'size'


function saveAnswer(buttonelement){
  
    if (buttonelement.className =="shape"){
        localStorage.setItem(shapeGuess, buttonelement.value)
        //shapeGuess=buttonelement.value
        //alert(shapeGuess)
    }

    else if (buttonelement.className =="topping"){
        localStorage.setItem(toppingGuess, buttonelement.value)
        toppingGuess=buttonelement.value
    }
    else if (buttonelement.className =="size"){
       localStorage.setItem(sizeGuess, buttonelement.value)
    }else if (buttonelement.className =="cheese"){
       localStorage.setItem(cheeseGuess, buttonelement.value)
       if(localStorage.getItem(shapeGuess)=== shapeAnswer && localStorage.getItem(toppingGuess)===toppingAnswer && localStorage.getItem(sizeGuess)===sizeAnswer && localStorage.getItem(cheeseGuess)=== cheeseAnswer){
        //alert("You have reached phonenumber")
        location.href="phonenumber.html"
      

          } else {
            location.href = "bad.html";
             
          }
        //alert(localStorage.getItem(shapeGuess) + " " + localStorage.getItem(toppingGuess) + " " + localStorage.getItem(sizeGuess) + " " + localStorage.getItem(cheeseGuess))
    }
}

