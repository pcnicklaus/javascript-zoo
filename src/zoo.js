var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];

}

Zoo.prototype.changeLocation = function (location) {
  this.location = location;
};

Zoo.prototype.open = function() {
  this.status = 'open';
};

Zoo.prototype.isOpen = function() {
  if (this.status ==='open') {
    return "open";
  } else {
    return "closed";
  }
};

Zoo.prototype.addAnimal = function(animal) {
 if (this.status === 'open') {
      for (var i = 0; i <= this.animals.length; i++) {
        if (this.animals[i] === animal) {
          return "sorry, we already have that animal!";
        }
        else {
          this.animals.push(animal);
          return "Thanks, please come back and see the rest of our animals!";
        }
      }
    }
    else {
      return "The zoo is closed, please come back when we're open!";
    }
  };

Zoo.prototype.removeAnimal = function (animal) {
    if (this.status === 'open') {
      console.log(this.animals.length)
      for (var i = 0; i <= this.animals.length; i++) {
        console.log(this.animals[i]);
        if (this.animals[i] == animal) {
          console.log("Here's your " + animal + ".");
          var x = this.animals.indexOf(this.animals[i]);
          this.animals.splice(x,1);
          break;
        }
        else {
          console.log("We don't seem to have that animal. Are you sure you're at the right zoo?");
          break;
        }
      }
    }
    else {
      console.log("The zoo is closed, please come back when we're open!");
    }
  };
module.exports = Zoo;
