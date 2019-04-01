/**Задача №11.1 */
document.getElementById('exercise11.1').onclick=function(){
    let rectangle = {
        a: 8,
        b: 7
    };

    function changeSide(S){
        if(S < 0){
            alert('Площадь не может быть отрицательной')
        } else {
            rectangle.a = S/rectangle.b;
            alert(rectangle.a);
        }
    }

    alert('Сейчас стороны равны: ' + rectangle.a + ' и '+ rectangle.b);
    let s = prompt('Введите новую площадь прямоугольника:', '');
    changeSide(s);
}

/**Задача №11.2 */
document.getElementById('exercise11.2').onclick=function(){
    function sum(){
        let arr = [];
        arr.length = 8;

        for(let i = 0; i < arr.length; i++){
            arr[i] = prompt('Введите, ' + i + '-ый элемент из массива длинной 8', '');
        }
        alert('Наш массив выглядит так: ' + arr);

        for(let i = 0; i < arr.length; i++){
            arr[i] = +arr[i] + +1;
        }
        return arr;
    }
   
    alert('А теперь мы каждому элементу прибавили единицу: ' + sum());
}