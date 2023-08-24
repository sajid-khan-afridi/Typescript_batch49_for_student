for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log(i)
    }
   console.log("\n")
}
// i-3
// j-2

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
console.log(fullNames)
