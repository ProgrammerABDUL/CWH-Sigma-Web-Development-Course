alert("This is the Part of Sigma Web development Course")

// Insert Value at the end
let name = prompt("Btw What's your name?")
document.getElementById("name").insertAdjacentText("beforeend", name)

// Dynamically insert value
let Prompt = document.getElementById("prompt").textContent
let response = prompt(Prompt)
document.getElementById("answer").insertAdjacentText("beforeend", response)