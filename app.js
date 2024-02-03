let number_one = 0
let number_two = 0
let sign = ""
let counter = 0

let calculation_is_pending = false
let calculation_is_done = false

let display = document.getElementById("display")

function clear() {
    number_one = 0
    number_two = 0
    sign = ""
    counter = 0

    calculation_is_pending = false
    calculation_is_done = true
}

function display_symbol(symbol) {
    if (calculation_is_done) {
        if (display.textContent !== "0") {
            display.textContent = ""
        }

        calculation_is_done = false
    }
    
    if (calculation_is_pending && !counter) {
        display.textContent = ""
        counter++
    }
    
    if (display.textContent === "0" && symbol === "0") {
        display.textContent = "0"
    } else if (display.textContent.length < 10) {
        display.textContent += symbol
    }

    if (display.textContent === ".") {
        display.textContent = "0."
    }
}

function add() {
    number_one = display.textContent
    sign = "+"
    calculation_is_pending = true
}

function subtract() {
    number_one = display.textContent
    sign = "-"
    calculation_is_pending = true
}

function multiply() {
    number_one = display.textContent
    sign = "*"
    calculation_is_pending = true
}

function divide() {
    number_one = display.textContent
    sign = "/"
    calculation_is_pending = true
}

function solve() {
    if (calculation_is_pending) {
        number_two = display.textContent

        display.textContent = ""

        if (sign === "+") {
            display.textContent = (Number(number_one) + Number(number_two))
        }

        if (sign === "-") {
            display.textContent = (Number(number_one) - Number(number_two))
        }

        if (sign === "*") {
            display.textContent = (Number(number_one) * Number(number_two))
        }

        if (sign === "/") {
            display.textContent = (Number(number_one) / Number(number_two))
        }

        if (display.textContent.length > 10) {
            let content_array = display.textContent.split("")
            let index_of_decimal_point = content_array.indexOf(".")

            display.textContent = Number(display.textContent).toFixed(9 - index_of_decimal_point).toString().replace(/\.?0+$/, '')
        }

        clear()
    }
}

document.getElementById("0").addEventListener("click", () => display_symbol("0"))
document.getElementById("1").addEventListener("click", () => display_symbol("1"))
document.getElementById("2").addEventListener("click", () => display_symbol("2"))
document.getElementById("3").addEventListener("click", () => display_symbol("3"))
document.getElementById("4").addEventListener("click", () => display_symbol("4"))
document.getElementById("5").addEventListener("click", () => display_symbol("5"))
document.getElementById("6").addEventListener("click", () => display_symbol("6"))
document.getElementById("7").addEventListener("click", () => display_symbol("7"))
document.getElementById("8").addEventListener("click", () => display_symbol("8"))
document.getElementById("9").addEventListener("click", () => display_symbol("9"))

document.getElementById(".").addEventListener("click", () => display_symbol("."))

document.getElementById("+").addEventListener("click", () => add())
document.getElementById("-").addEventListener("click", () => subtract())
document.getElementById("*").addEventListener("click", () => multiply())
document.getElementById("/").addEventListener("click", () => divide())

document.getElementById("=").addEventListener("click", () => solve())

document.getElementById("backspace_button").addEventListener("click", () => display.textContent = display.textContent.slice(0, -1))
document.getElementById("delete_button").addEventListener("click", () => display.textContent = "0", clear())