let equal_pressed = 0;
// Tous les boutons sauf AC et DEL 
let button_input = document.querySelectorAll(".input-button");
// Tous les champs sauf clear et delete all 
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};
//Accés à toutes les classes utilisant forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equal_pressed == 1){
            input.value = "";
            equal_pressed = 0;
        }
        // affiche la valeur de chaque bouton
        input.value += button_class.value;
    });
});
// Résolution les champs de l'utilisateur sur clique
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        let solution = eval(inp_val);
        if(Number.isInteger(solution)){
            input.value = solution;
        }else{
            input.value = solution.toFixed(2);
        }
    }catch(err){
        alert("Invalid Input");
    }
});


clear.addEventListener("click", () => {
    input.value = "";
});

erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length -1);
});