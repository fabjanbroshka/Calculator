
    const keys = document.querySelectorAll('button');
    const display = document.getElementById('display');


    let A = 0;
    let B = null;
    let operator = null;

    function clear(){
    A = 0;
    B = null;
    operator = null;

}

    for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function (){
            const value = keys[i].innerHTML;
            if( value === 'x' || value === '+' || value === '-' || value === '/' || value === '='){
                if(value === '=') {
                    if(A != null){
                        B = display.value;
                        let numA = Number(A);
                        let numB = Number(B);

                        if(operator === '/'){
                            display.value = numA/numB
                        } else if (operator === 'x'){
                            display.value = numA*numB;
                        } else if(operator === '+'){
                            display.value = numA+numB;
                        } else if(operator === '-'){
                            display.value = numA-numB
                        }

                        clear()
                    }
                } else {
                    operator = value;
                    A = display.value;
                    display.value = "";
                }
            } else if(value === 'AC'){
                if(value === 'AC'){
                    clear();
                    display.value = '';
                }
            } else {
                if(value === '.'){
                    if(display.value !== '' && !display.value.includes(value)){
                        display.value += value;
                    }
                }else if(display.value === "0"){
                    display.value = value;
                }else {
                    display.value += value;
                }
            }
        }
    )}