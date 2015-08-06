var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation('Denver');
      expect(zoo.location).toEqual('Denver');
      // add spec
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toEqual('open');
      // add spec
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      // console.log(zoo.status)
      zoo.open();
      // console.log(zoo.status)
      expect(zoo.isOpen()).toEqual('open');
      // add spec
    });
    it('should see if the zoo is closed', function(){
      // console.log(zoo.isOpen());
      // console.log(zoo.status);
      expect(zoo.isOpen()).toEqual('closed');
      // add spec
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
      // add spec
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([]);
      // add spec
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(lion);
      console.log(zoo.animals);
      expect(zoo.animals).toEqual([lion]);
      // add spec
    });

    it('should only add instances of animals', function(){
      zoo.open();
      zoo.addAnimal(lion);
      console.log(zoo.animals);
      expect(zoo.animals).toEqual([lion]);

      // add spec
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(lion);
      zoo.addAnimal(lion);
      expect(zoo.animals).toEqual([lion]);
      // add spec
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(lion);
      zoo.removeAnimal(lion);
      expect(zoo.animals).toEqual([]);
      // add spec
    });
  });
});
