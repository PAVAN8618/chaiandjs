const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);

        const results= document.querySelector('#results');

        if(isNaN(height) || height <0 || height==='') {
            results.innerHTML = `Please give valid height ${height}`
        }
        else if( isNaN(weight)||weight <0 || weight==='')  {
            results.innerHTML = `please give valid weight ${weight}`

        }
        else{
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);


            //result

            results.innerHTML = `<span>BMI Total: ${bmi}</span>`
        }

})