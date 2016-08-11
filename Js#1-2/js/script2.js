function check () {
    var arr = [];
    for (var i = 0; i < 5; i++) {
        arr[i] = prompt('Занесите имена:', "");
        console.log('name' + i, arr[i]);
    }
    var name;
    name = prompt('Введите имя:', "");
    console.log('name', name);
    for (i = 0; i < 5; i++) {
        if (name == arr[i]) {
            var flag = true;
            var k = i;
        }
    }
    console.log(flag);
    if (flag == true) {
        alert(arr[k] + ', вы успешно вошли!');
    }
    else {
        alert("Вас нет в списке пользователей!");
    }
}
check();

