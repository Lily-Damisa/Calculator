//Defining our variables
(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

//Making our data visible on the screen
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

//Making our equal button work
    equal.addEventListener('click', function(e){
        if(screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });


    //making the clear button work
    clear.addEventListener('click', function(e){
        screen.value = '';
    })
}) ();