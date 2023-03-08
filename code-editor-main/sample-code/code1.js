// function primeNo() {
//     document.getElementsByClassName("code1")
//     console.log('Clicked')
//     textarea.innerHTML = '//Program to check whether the number is prime or not\n\nfunction test_prime(n){\n  if (n===1){\n  return false;\n  }\n\n  else if(n === 2){\n  return true;\n  }\n\n  else{\n    for(var x = 2; x < n; x++){\n      if(n % x === 0){\n      return false;\n      }\n    }\n\n  return true;\n\n  }\n}\nconsole.log(test_prime(37));'
// }

const code1 = document.querySelector(".code1")
const textArea1 = document.querySelector("#code")
code1.addEventListener("click", function () {
    textArea1.innerHTML = '//Program to check whether the number is prime or not\n\nfunction test_prime(n){\n  if (n===1){\n  return false;\n  }\n\n  else if(n === 2){\n  return true;\n  }\n\n  else{\n    for(var x = 2; x < n; x++){\n      if(n % x === 0){\n      return false;\n      }\n    }\n\n  return true;\n\n  }\n}\nconsole.log(test_prime(37));'
    updateLineNumbers()
})
