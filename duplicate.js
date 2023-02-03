var nam = [ 2, 2,2, 3, 3, 4, 5, 6, 7, 8,7];
var unique = [];

for(var i=0; i<nam.length; i++){
    
    var excp = nam[i];
    var index = unique.indexOf(excp);
    if(index == -1){
            unique.push(excp);
    }

}
console.log(unique);