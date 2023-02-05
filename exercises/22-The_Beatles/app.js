function sing(){
    let letra = "";    
    for(let i=0; i < 5; i++) {
        if(i == 1){
            letra += "whisper words of wisdom, let it be, ";
        }
        else if(i == 3) {
            letra += "there will be an answer, ";
        }
        else {
            let count =1;
            while(count < 5){
                letra += "let it be";
                if(i == 4) { break; }                
                letra += ", ";
                count ++;                
            }
        }         
    }
    return letra;
}

//Your code above ^^^

console.log(sing());