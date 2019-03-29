/**Задача №5 */
document.getElementById('exercise5').onclick=function(){
    function calc(a, b, operation){
        if(operation == '+'){
            return +a + +b;
        } else if(operation == '-'){
            return +a - +b;
        } else if(operation == '*'){
            return +a * +b;
        } else if(operation == '/'){
            if(b == 0){
                alert('Деление на нуль!')
            } else {
                return +a / +b
            };
        } else if(operation == 'mod'){
            return +a % +b;
        } else if(operation == 'pow'){
            return Math.pow(+a,+b);
        } else if(operation == 'div'){
            if(b == 0){
                alert('Деление на нуль!')
            } else {
                return parseInt(+a/+b)
            };
        }
    }

    let x = prompt('Введите первое число:', '');
    let y = prompt('Введите второе число:', '');
    let operator = prompt('Введите одну из математических операций (+, -, *, /, mod, pow, div)', '');

    alert(calc(x, y, operator));
}