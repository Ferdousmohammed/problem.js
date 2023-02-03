var depth = 25 ;
var animal = 0;
if(depth<=10){
    animal = depth * 50;
}

else if(depth<=20){
var first10 = 10 * 50;
var rmain = depth - 10;
var second = rmain * 100;
animal = first10 + second;
}
else{
    var first10 = 10 * 50;
    var second = 10*100;
    var rmain = depth -20 ;
    var third = rmain * 300;
    animal = first10 + second + third;


}
console.log(animal);