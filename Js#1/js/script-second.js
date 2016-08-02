    var n = 5;
    var arr = [n];
    for(var i=0; i<n; i++){
        arr[i]=prompt('Занесите имена:',"");
    }
    var name;
    name = prompt('Введите имя:',"");
    for(i=0; i<n; i++){
        if (name == arr[i]){
            var flag = true;
            var k=i;
        }
    }
    console.log(flag);
    if (flag == true){
        alert ("Добро пожаловать, " + arr[k]);
    }
    else {
        alert ("Вас нет в списке пользователей!");
    }


