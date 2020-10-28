window.onkeydown = function(e) {
if (e.keyCode == 8 && e.target == document.body || e.keyCode == 111 && e.target == document.body) 
    e.preventDefault(); //disable the turn back page function of backspace and / search page function
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 97 || event.keyCode == 49 ) {
        display.value += '1';
    }

    if(event.keyCode == 98 || event.keyCode == 50 ) {
        display.value += '2';
    }

    if(event.keyCode == 99 || event.keyCode == 51 ) {
        display.value += '3';
    }

    if(event.keyCode == 100 || event.keyCode == 52 ) {
        display.value += '4';
    }

    if(event.keyCode == 101 || event.keyCode == 53 ) {
        display.value += '5';
    }

    if(event.keyCode == 102 || event.keyCode == 54 ) {
        display.value += '6';
    }

    if(event.keyCode == 103 || event.keyCode == 55 ) {
        display.value += '7';
    }

    if(event.keyCode == 104 || event.keyCode == 56 ) {
        display.value += '8';
    }

    if(event.keyCode == 105 || event.keyCode == 57 ) {
        display.value += '9';
    }

    if(event.keyCode == 96 || event.keyCode == 48 ) {
    display.value += '0';
    }

    if(event.keyCode == 70 ) {
    alert("You Paid Respect! Thanks <3 ");
    }

    if(event.keyCode == 107 ) {
    display.value += '+';
    }
    
    if(event.keyCode == 109 ) {
    display.value += '-';
    }

    if(event.keyCode == 106 ) {
    display.value += '*';
    }

    if(event.keyCode == 111 ) {
    display.value += '/';
    }
   
    if(event.keyCode == 8 ) {
        display.value = display.value.slice(0,-1);
        }

    if(event.keyCode == 67 || event.keyCode == 46 ) {  // C and Del can erase the Calculator
    display.value = '';
    }

    if(event.keyCode == 13 ) {  // Enter key can show the result of the math exp.
        display.value = eval(display.value);
    }

});
