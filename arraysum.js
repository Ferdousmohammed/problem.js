

function arrauSum (numbers){
   
        var sum = 0;

    for (var i = 0; i<numbers.length; i++){
        
    var ex = numbers[i];
    sum = sum + ex;


}
    return sum;
}
var numbers = [45, 55, 66, 717, 88];
var result = arrauSum(numbers);
console.log("total of the numbers:", result);