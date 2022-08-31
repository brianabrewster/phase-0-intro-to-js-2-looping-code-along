// Code your solutions in this file
for (let age = 30; age <40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
wrapGifts(gifts);

const names = ["John", "Carly", "Steven"]
const messages = []
function writeCards(names, surprise) {
for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
}
return messages
}

function countDown() {
    let number = 10
    while (number > -1) {
        console.log(number--)
    }
}