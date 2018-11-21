
var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var num = 0;

while (num < ingredients.length) {
  console.log(ingredients[num]);
  num++;
}

// Write a for loop that prints out the contents of ingredients:

for (var i=0; i<ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length - 1; 0<= i; i--) {
  console.log(ingredients[i]);
}