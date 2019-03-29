/**Задача №13 */
document.getElementById('exercise13').onclick=function(){
    //let dnk = 'aaaaaeeeefffAaAAAa';        
    
    function algorithmDNK(arr) {
        let newArr = '';
        let count = 1;
        let i = 0;
        while(i < arr.length){
            if(arr[i] == arr[i+1]){
                count += 1;
            } else {
                newArr = newArr + arr[i] + count;
                count = 1;
            }
            i++;
        }
        return newArr;
    }
    let dnk = prompt('Введите цепочку DNK: ', '');
    alert(algorithmDNK(dnk));
}