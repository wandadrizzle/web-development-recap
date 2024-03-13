//Using the dot notation we can access different properties of an object
let x = document.getElementById("p1");
x.textContent = "Text updated using JavaScript";

document.getElementById("c1").checked = true;

let par = document.getElementById("p2");
par.style.color = "red";

console.log(true && true) //AND
console.log(true || false) //OR
console.log(true && false)
console.log(false && true)
console.log(true || false)
console.log(false || true)

function submitOptions(){
   let javascript = document.getElementById("c1").checked;
   let python = document.getElementById("c2").checked;
   let csharp = document.getElementById("c3").checked;

   if(csharp && python && javascript){
        alert("Wow, you want to learn a lot of languages! Make sure to make enough time for each")
   }
   else if(!csharp && !python && !javascript){
        let question = prompt("Which coding languages would you rather spend time on instead?") //Prompts always return a string
        alert(`Oh, sounds cool ${question} is a great language.`)
   }
   else{
        alert("Good to know you have SOME coding goals this year!")
   }
}

/* FYI encane
var keywords = [
  "abstract", "await", "boolean", "break", "byte", "case", "catch", "char", "class",
  "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum",
  "export", "extends", "false", "final", "finally", "float", "for", "function", "goto",
  "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long",
  "native", "new", "null", "package", "private", "protected", "public", "return", "short",
  "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient",
  "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"
];
*/

let herName = "Wanda";
let age = 27;
let isMarried = false;
let bankBalance = 27.83
let y = "36";
let z = Number(y); //String()
console.log(y)
console.log(z)
console.log(`Her name is a ${typeof herName}. Her age is a ${typeof age}. Is she married? Well, if she said yes that would obviously be ${isMarried}. That's a ${typeof isMarried} you know. She has no money in the bank, she can't stay a${typeof bankBalance} (this part of the sentence won't work if float isn't an actual data type in JS). ${bankBalance} is not enough to do anything, or is it? She can totally get 2 Play energy drinks. Silver linings baby, silver linings.`)