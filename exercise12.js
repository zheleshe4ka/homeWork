/**Задача №12.1 */
document.getElementById('exercise12.1').onclick=function(){
    let rectangle = {
        a: 8,
        b: 7
    };

    function changeSides(k){
        if(k < 0){
            alert('k не может быть отрицательным')
        } else {
           rectangle.a *= k;
           rectangle.b *= k;
           alert('Теперь стороны равны: '+ rectangle.a + ' и '+ rectangle.b);
        }
    }

    alert('Сейчас стороны равны: ' + rectangle.a + ' и '+ rectangle.b);
    let K = prompt('Введите число K:', '');
    changeSides(K);
}

/**Задача №12.2 */
document.getElementById('exercise12.2').onclick=function(){
    function sum(){
        let arr = [];
        arr.length = 8;

        for(let i = 0; i < arr.length; i++){
            arr[i] = prompt('Введите, ' + i + '-ый элемент из массива длинной 8', '');
        }
        return arr;
    }
    alert('Наш массив выглядит так: ' + sum());
}
