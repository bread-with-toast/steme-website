document.getElementById("basicsquestions").hidden = true

function reveal() {
    document.getElementById("basicsquestions").hidden = false
    document.getElementById("basicsbtnshow").hidden = true
    document.getElementById("basicsinfo").hidden = true
}

function mark() {
    let first = 0
    let second = 0

    let foreground = document.getElementById("coloursforeground")
    let bg = document.getElementById("colourshex")

    if (foreground.value == "color: ") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (bg.value == "background-color: #00FF00;") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second) + "/2"
}