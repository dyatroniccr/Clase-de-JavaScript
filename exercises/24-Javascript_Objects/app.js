var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  for(let i = 0; i < anArray.length; i++){
    for(let item in anArray[i].lucky_numbers){
      //console.log(anArray[i].lucky_numbers[item]);
      sumOfAllLuckyNumbers += parseInt(anArray[i].lucky_numbers[item]);
    }
  }  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
//prompt('What is your age?');

family.members[0].lucky_numbers[3] = 33

let person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
}
family.members.push(person3);
//console.log( family.members);
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
                                                                                                                                                   
//console.log( family.members[1].lucky_numbers);