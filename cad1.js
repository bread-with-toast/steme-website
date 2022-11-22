document.getElementById("classq").hidden = true

function reveal() {
    document.getElementById("classq").hidden = false
    document.getElementById("classbtnshow").hidden = true
    document.getElementById("classinfo").hidden = true
}

function mark() {
    let first = 0
    let second = 0

    let cad11 = document.getElementById("cad11")
    let cad12 = document.getElementById("cad12")

    if (cad11.value.toLowerCase().includes("computer aided design")) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (cad12.value.toLowerCase().includes("no")) {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second) + "/2"
}