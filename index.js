// // Code your solution here
// // const drivers = ['Bobby', "Sammy", "Sally", "Annette", "Sarah", "Bobby"]
// // findMatching returns all drivers that match
// // ignores whether the value input for drivers is uppercase, i.e can return a match of any case




function findMatching(drivers, name) {
  return drivers.filter((canMatch) => 
      canMatch.toLowerCase() === name.toLowerCase()
    );
}


//   // can access drivers using a data function that executes the code.
//   //  data structure can be anything (data) either from object or an array of objects
  // function matchName(drivers, nameOfName) {
  //   return drivers.filter( (data) =>
  //     data.sort === nameOfName);
  // }

function matchName(drivers, nameOfName) {
  return drivers.filter((data) => data.name === nameOfName  );
}

//   //  focuses on the name string
//   // returns a driver if indexOf(theNameOfTheDriver) === 0
function fuzzyMatch(drivers, driverString) {
  return drivers.filter(
    (canMatch) =>
    canMatch.toLowerCase().indexOf(driverString.toLowerCase()) === 0
  );
}

