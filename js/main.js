// add scripts


var Animal = function (name, age, kind, awake) {
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = 'false';
};


Animal.prototype.oink = function () {
  if (this.kind === 'pig') {
    console.log('oink!');
  }
};

Animal.prototype.growUp = function () {
  this.age ++;
};

Animal.prototype.feed = function () {
  if (this.awake === 'true') {
    console.log("NOM NOM NOM!!! DELISH!!!");
    return ("NOM NOM NOM!!! DELISH!!!");
  }
};

Animal.prototype.wakeUp = function () {
  this.awake = 'true';
};

Animal.prototype.sleep = function () {
  this.awake = 'false';
};


var Zoo = function (name, location, status, animals) {
  this.name = name;
  this.location = location;
  this.status = status;
  this.animals = [];
  this.open = function () {
    this.status = 'open';
  };
  this.close = function () {
    this.status = 'closed';
  };
  this.addAnimals = function (animal) {
    if (this.status === 'open') {
      for (var i = 0; i <= this.animals.length; i++) {
        if (this.animals[i] === animal) {
          console.log("sorry, we already have that animal!");
          break;
        }
        else {
          this.animals.push(animal);
          console.log("Thanks, please come back and see the rest of our animals!");
          break;
        }
      }
    }
    else {
      console.log("The zoo is closed, please come back when we're open!");
    }
  };
  this.removeAnimal = function (animal) {
    if (this.status === 'open') {
      for (var i = 0; i <= this.animals.length; i++) {
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

}
