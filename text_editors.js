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

    let te1 = document.getElementById("te1")
    let te2 = document.getElementById("te2")
    let te3 = document.getElementById("te3")

    if (te1.value.toLowerCase() == "by pressing certain keys" || te1.value.toLowerCase() == "by pressing certain keys.") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (te2.value.toLowerCase() == "integrated development environment" || te2.value.toLowerCase() == "integrated development environment.") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (te3.value.toLowerCase() == "vim" || te3.value.toLowerCase() == "emacs" || te3.value.toLowerCase() == "vi") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}
