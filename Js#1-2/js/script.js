function  pow(a, b){
        var res=1;
    for(var i=0; i<b; i++) {
        res= res * a;
    }
    console.log('Результат',res);
    return res;
}
var a;
var b;
    a = prompt('Введите число',"");
    b = prompt('Введите степень',"");
    pow(a, b);

