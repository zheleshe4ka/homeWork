document.getElementById('exercise1').onclick=function() {
  function healthySleep (X, Y, Z) {
    if (X < 0 || Y < 0 || Z < 0) {
      alert('В нашем измерении время не может быть отрицательным :3');
    } else if (Z < X) {
      alert('Недосып');
    } else if (Z > Y) {
      alert('Пересып');
    } else {
      alert('Это нормально');
    }
  }

  let x = prompt('Введите X часов:', '');
  let y = prompt('Введите Y часов:', '');
  let z = prompt('Введите Z часов:', '');

  healthySleep(x, y, z);
}