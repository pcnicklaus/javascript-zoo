

function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function () {
  this.age ++;
};

Animal.prototype.wakeUp = function () {
  this.awake = true;
};

Animal.prototype.feed = function () {
  if (this.awake === true) {
    return ("NOM NOM NOM!!! DELISH!!!");
  } else {
    return ("Animal is sleeping");
  }
};

module.exports = Animal;
