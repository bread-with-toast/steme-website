document.getElementById("classq").hidden = true

function reveal() {
    document.getElementById("classq").hidden = false
    document.getElementById("classbtnshow").hidden = true
    document.getElementById("classinfo").hidden = true
}

function mark() {
    let first = 0
    let second = 0

    let cad21 = document.getElementById("cad21")
    let cad22 = document.getElementById("cad22")

    if (cad21.value.toLowerCase().includes("isometric") && cad21.value.toLowerCase().includes("orthogonal")) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (cad22.value.includes("LibreCAD")) {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second) + "/2"
}