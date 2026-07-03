const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button){

    button.onclick = function(){

        let value = button.innerHTML;

        if(value == "C"){
            display.value = "";
        }

        else if(value == "="){

            if(display.value != ""){
                display.value = eval(display.value);
            }

        }

        else{

            display.value += value;

        }

    };

});