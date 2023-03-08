const code3 = document.querySelector(".code3")
const textArea3 = document.querySelector("#code")
code3.addEventListener("click", function () {
    textArea3.innerHTML = '// program to generate a multiplication table \n\nconst number = prompt("Enter an integer: "); \n\nfor(let i = 1; i <= 10; i++) {\n  const result = i * number;\n  console.log(result); \n}'
    updateLineNumbers()
})