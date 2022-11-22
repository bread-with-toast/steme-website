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

    let schematics1 = document.getElementById("schematics1")
    let schematics2 = document.getElementById("schematics2")
    let schematics3 = document.getElementById("schematics3")

    if (schematics1.value.toLowerCase().includes("picture") || schematics1.value.toLowerCase().includes("diagram") && schematics1.value.toLowerCase().includes("circuit")) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect. Make sure you formatted the formula correctly."
    }

    if (schematics2.value.toLowerCase().includes("cathode")) {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (schematics3.value.toLowerCase().includes("triangle") && schematics3.value.toLowerCase().includes("line") ) {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}