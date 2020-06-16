// 1. What are arrays in JavaScript and why are they useful?

//2. What are objects in JavaScript and why are they useful?

//3. What are a couple of key differences between objects and arrays? (And can you find any good examples or metaphors that illustrate the difference?)

//4. What is the index of an array? What is it used for?

//5. What is a property?

// 6. What is a method?

//7. Create an array named colors that contains five different names of colors as strings.
function colors = ("blue", "black", "green", "red", "yellow");
console.log(colors);

// 8. Access the first color in the array and print it to the console using console.log()
console.log(colors[0]);

// 9. Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
console.log([2]);

// 10. Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
function colors[3] = "ultraviolet";
console.log(colors)


// 11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
function threeColor = "violet";
colors[3] = threeColor;
console.log(colors);

// 12. Add another color to the end of the list.
function colors[5] = ("pink");
console.log(colors);

// 13. Add another color to the beginning of the list.
function colors.unshift("white");
console.log(colors);

// 14. Print the length of the array to the console with console.log()
console.log(colors.length)

// 15. Remove the last color from the end of list, and then print the length of the array to the console one more time.
function colors.pop();
console.log(colors.length)

// 16. Write a for loop to iterate through every color in the array and print each color's value to the console.
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


// 17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
for (var i = 0; i < colors.length; i++) {
  console.log(i + ": " + colors[i]);
}

// 18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)
var lastIndex = colors.length - 1
var lastColor = colors[lastIndex]
console.log(lastColor);

// 19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
let myPenguin = {
  name: = "Duke",
  origin: = "Boner's Ark",
  author: = "Mort Walker"
}

// 20. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
console.log("Hello, I'm a penguin and my name is" + myPenguin.name + "!")

// 21. Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)
myPenguin.canFly = false;

// 22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)
myPengiun = chirp
console.log("CHIRP CHIRP" + "!"  "Is this what penguins sound like" + "?"))

// 23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!
myPenguin.sayHello = function () {
  console.log(sayHello)
}

// 24. Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)
myPenguin.sayHello();

// 25. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin.name = "Penguin McPenguinFace"
console.log(sayHello)
// 26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
myPenguin.fly = ("I can fly") {
  if (canFly === true); {

  }
  else {
    (canFly === false);
  }
}


// Hint: Remember to use the very handy this keyword to access the object that your new method is currently attached to!

// 27. Call your penguin's fly() method and make sure it works!
console.log(fly);

// 28. Change the canFly property to true -- again, without modifying any of your previous code!
myPenguin.canFly = true;

// 29. Now call your penguin's fly() method again and make sure it works as expected!
myPenguin.fly(;

// 30. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)
for (property in myPenguin);
console.log(myPenguin);

// 31. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
for (property in value);
console.log(value);

// 32. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
myPenguin.favoriteFoods = ["food", "cold", "hot"];

// 33. Access your penguin's second favorite food and print it to the console using console.log()
myPenguin.favoriteFoods([1]);
console.log(1)

// 34. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
var firstFavFood
  = myPenguin.favoriteFoods();

// 35. Add another food to the end of the list.
myPenguin.firstFavFood.push("ice cream");
// 36. Print the length of your penguin's favoriteFoods array to the console with console.log()
myPenguin.favoriteFoods.length("food", "cold", "hot");
console.log(favoriteFoods)

// 37. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
myPenguin.favoritesFoods = "pineapple";

// 38. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)
var lastFavFood = myPenguin.favoriteFoods[3]

//39. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)
for (property in favoriteFoods);
console.log(favoriteFoods);

// 40. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)
myPenguin.outfit =
  hat: = "baseball cap",
    shirt: = "Hawaiian shirt",
      pants: = "cargo shorts",
        shoes: = "flip-flops"

// 41. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.
var penguinHatType = myPenguin.outfit.hat;
console.log(myPenguin.outfit);

// 42. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!
myPenguin.outfit.accessory = "pocket watch";

// 43. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)
myPenguin.outfit.hat = "top hat";

// 44. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property. (Hint: see this page on the delete operator for examples.)
myPenguin.outfit.unshift(pants);

// 45. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. (Hint: This is the same as step 31 from above, only now we're accessing values from a nested object!)
for (property in myPenguin.oufit);
console.log(myPenguin.outfit [property]);