// Write a javaScript program to print all ASCII character with their values.

function asciiCharacterToTheirValue() {
  for (let i = 0; i <= 255; i++) {
    let char = String.fromCharCode(i);
    console.log(char);
  }
}

asciiCharacterToTheirValue();
