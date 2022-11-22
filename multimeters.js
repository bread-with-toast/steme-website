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

    let multimeters1 = document.getElementById("multimeters1")
    let multimeters2 = document.getElementById("multimeters2")

    if (multimeters1.value.toLowerCase().includes("2") || multimeters1.value.toLowerCase().includes("two") ) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (multimeters2.value.toLowerCase().includes("2") || multimeters2.value.toLowerCase().includes("two")) {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second) + "/2"
}
