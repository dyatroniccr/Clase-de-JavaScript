// Your code here:
//Esta funcion convierte un numero entero en String y concatena los Strings
function conString(numb, text1, text2){
    let number = numb.toString();   
    return text1 + number + text2;
}

function getLyricsSong(i){
    let song = ""
    let lessNumb = i -1;
    if(i == 2) {            
        song += conString(i, conString(i,""," bottles of milk on the wall, ")," bottles of milk. ");
        song += conString(lessNumb, "Take one down and pass it around, "," bottle of milk on the wall.\n");
    } else if(i == 1) {
        song += conString(i, conString(i,""," bottle of milk on the wall, "), " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.\n"); 
    } 
    else if(i == 0){
        song += "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.";
    } else {
        song += conString(i,conString(i,""," bottles of milk on the wall, ")," bottles of milk. ");
        song += conString(lessNumb, "Take one down and pass it around, "," bottles of milk on the wall.\n");
    }
    return song;
}        
    
for(let a=99; a>-1; a--){  
    console.log(getLyricsSong(a));
}