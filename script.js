let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
// Rimuovere questa linea problematica:
// let arr = Array.from('buttons'); 

// Usare direttamente buttons invece di arr
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;

        if (buttonValue == '=') {
            try {
                if (string) {
                    string = eval(string);
                    input.value = string;
                }
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }
        else if (buttonValue == 'AC') {
            string = "";
            input.value = string;
        }
        else if (buttonValue == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string += buttonValue;
            input.value = string;
        }
    })
});