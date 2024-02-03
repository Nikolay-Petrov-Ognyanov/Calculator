const display = document.getElementById("display")

display.textContent = "1111111111"

display.addEventListener("input", event => {
    event.preventDefault()
    
    if (display.textContent.length > 10) {
        display.textContent = display.textContent.slice(0, -1)
    }
})