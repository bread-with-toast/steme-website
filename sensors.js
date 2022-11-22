document.getElementById("classq").hidden = true

function reveal() {
    document.getElementById("classq").hidden = false
    document.getElementById("classbtnshow").hidden = true
    document.getElementById("classinfo").hidden = true
}

function mark() {
    let first = 0
    let second = 0
    let third = 0

    let sensors1 = document.getElementById("sensors1")
    let sensors2 = document.getElementById("sensors2")
    let sensors3 = document.getElementById("sensors3")

    if (sensors1.value.toLowerCase().includes("an ultrasonic sensor")) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (sensors2.value.toLowerCase().includes("input") || sensors2.value.toLowerCase().includes("output")) {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (sensors3.value.toLowerCase().includes("input")) {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}
