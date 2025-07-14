const lines = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];
let output = "";
for (const line of lines) {
  output += line + "\n";
}
output = output.slice(0, -1);
console.log(output);