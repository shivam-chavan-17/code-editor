const textarea = document.querySelector("#code")
const outputDiv = document.querySelector("#output")
const runButton = document.querySelector("#run")
const lineNumbers = document.querySelector("#line-numbers")

// adds input event listener to the code that updates the line numbers. 
// line numbers are calculated using the split method
// split method returns an array of strings, with each element being a line of text
// Array.from() is used to create no of lines based on line in editor
// { length: lines } object that show no of lines
// (_, i) => i + 1) returns the index of each element in the array, incremented by one 
// (_, i) => i + 1) is map function having two elements => 1.ignored(not used in the calculation of the line numbers) 
//                                                         2.show current index of iteration
// textarea.addEventListener("input", function () {
//     const lines = this.value.split("\n").length
//     lineNumber.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join("<br>")
// })

// textarea.addEventListener('scroll', () => {
//     lineNumbers.scrollTop = textarea.scrollTop 
//   }) 
// Update line numbers based on content of editor
function updateLineNumbers() {
    const editorValue = textarea.value
    const lines = editorValue.split('\n')
    const lineNumbersArray = Array.from({ length: lines.length }, (_, i) => i + 1)
    const lineNumbersHTML = lineNumbersArray.join('<br>')
    lineNumbers.innerHTML = lineNumbersHTML
}
// Update line numbers when editor value changes
textarea.addEventListener('input', updateLineNumbers)
// Update line numbers when window is resized
//   window.addEventListener('resize', updateLineNumbers) 
// Initial line number update
updateLineNumbers()

// Clears the output terminal
function clearBtn() {
    document.getElementById("clr")
    outputDiv.innerHTML = ""
}

// Create a custom console object that outputs to the output div
const customConsole = {
    log: function (message) {
        const logLine = document.createElement("div")  // creates the HTML element
        logLine.innerText = message
        outputDiv.appendChild(logLine)   // append it to the document
    }
}

// Clear the output div on each run
runButton.addEventListener("click", function () {
    outputDiv.innerHTML = ""

    // Replace the global console object with our custom one
    window.console = customConsole  // gives the access of browser's console

    try {
        eval(textarea.value)
    } catch (error) {
        const errorLine = document.createElement("div")
        errorLine.style.color = "red"
        errorLine.innerText = error.message
        outputDiv.appendChild(errorLine)
    }
}) 