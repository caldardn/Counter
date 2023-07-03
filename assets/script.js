let click = 0
let countEl = document.getElementById("count-el")

function increment() {
    click += 1
    countEl.textContent = click
}

let saveEl = document.getElementById("save-el")

function save() {
    let countStr = + click + " - "

    saveEl.textContent += countStr
    countEl.textContent = 0
    click = 0
}
console.log("Let's count people on the subway!")







