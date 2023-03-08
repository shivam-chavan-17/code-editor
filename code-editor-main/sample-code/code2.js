const code2 = document.querySelector(".code2")
const textArea2 = document.querySelector("#code")
code2.addEventListener("click", function () {
    textArea2.innerHTML = '// program to check if the number is even or odd \n\nconst number = prompt("Enter a number: "); \n\nif(number % 2 == 0) { \n  console.log("The number is even."); \n} \n \nelse { \n  console.log("The number is odd."); \n}'
    updateLineNumbers()
})