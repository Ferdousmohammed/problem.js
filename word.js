var good = 'l am a good and humble person ';
var count = 0;
for (var i =0; i< good.length; i++){
    var letter = good[i];
        if(letter == " "){
            count++;
        }

}

console.log(count);
