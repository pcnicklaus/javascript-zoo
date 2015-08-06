JavaScript Zoo
Lions, tigers, and bears..

Create an animal class with:

Properties:

name
age
kind - a horse/lion/pig for example
awake - should default to false
methods:

oink() - returns "oink!" if the instance of an animal is a pig.
growUp() - a method that increases the age of the animal by one
feed() - if the animal is awake, return "NOM NOM NOM"
wakeUp() - a method that changes the awake property to true
sleep() - a method that changes the awake property to false
Create a zoo class with:

name
location
status - this should default to "closed"
animals - this should default to an empty array
changeLocation() - a method that updates the location of the zoo
open() - a method that changes the status to "open"
close() - open - a method that changes the status to "closed"
isOpen() - a method that returns "Open!" if the zoo is not closed
addAnimal() - a method that adds an animal to the animals array ONLY if the zoo is open, the animal is an instance of the Animal class AND the animal is not already in the animals array.
removeAnimal() - a method that removes an animal from the animals array ONLY if the zoo is open.
Steps

Write the tests for the Animal class
Write the code (in the *"src" folder) necessary to make the tests pass
Repeat this same process (TDD!) for the Zoo class
