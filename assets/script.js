
let countEl = document.getElementById("count-el")

console.log(countEl)

let click = 0

function increment() {
    click = click + 1
    countEl.innerText = click
}

let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save() {
    console.log(click)

}