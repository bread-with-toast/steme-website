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

    let q1 = document.getElementById("q1")
    let q2 = document.getElementById("q2")
    let q3 = document.getElementById("q3")

    if (q1.value == "cylinder(5);") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (q2.value == "color([1, 0, 1])") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (q3.value == "cube(5);") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}
