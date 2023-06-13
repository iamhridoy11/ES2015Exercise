// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

// --------------------------------------------------------------------------------------
// Same keys and values ES2015
function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    };
};

// -----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
// ------------------------------------------------------------------------------------------
// Computed Property Names ES2015

let favoriteNumber = 42;

const instructor = {
    firstName : "Colt",
    [favoriteNumber] : "This is my favorite!"
};
// -------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }
// -------------------------------------------------------------------------------------------
// ----------------------------------Object Methods ES2015---------------------------------------------------------

const instructors ={
    firstName : "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + "says bye";
    }

}


// --------------------------------createAnimal function-------------------------
const d = createAnimal("dog", "bark", "Woooof!")
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}