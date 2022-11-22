document.getElementById("classq").hidden = true

function reveal() {
    document.getElementById("classq").hidden = false
    document.getElementById("classbtnshow").hidden = true
    document.getElementById("classinfo").hidden = true
}

function mark() {
    let first = 0
    let second = 0

    let comments1 = document.getElementById("comments1")
    let comments2 = document.getElementById("comments2")

    if (comments1.value.toLowerCase() == "explain the code." || comments1.value.toLowerCase() == "explain the code") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (comments2.value == "No") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second) + "/2"
}