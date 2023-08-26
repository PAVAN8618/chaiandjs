
const buttons = document.querySelectorAll('.button');
const bg = document.querySelector("body");

buttons.forEach(function(button){
        console.log(button)

        button.addEventListener('click' , function(e){

            if(e.target.id == 'pink'){
            bg.style.backgroundColor = e.target.id;
            }

            if(e.target.id == 'yellow'){
            bg.style.backgroundColor = e.target.id;
            }

            if(e.target.id == 'red'){
            bg.style.backgroundColor = e.target.id;
            }


        })
})