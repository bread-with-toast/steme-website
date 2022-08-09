document.getElementById("listsquestions").hidden = true

function reveal() {
    document.getElementById("listsquestions").hidden = false
    document.getElementById("listsinfo").hidden = true
    document.getElementById("listsbtnshow").hidden = true
}

function mark() {
    let first = 0
    let second = 0

    if (document.getElementById("bp").checked) {
        first += 1
        document.getElementById("extra1").innerText = "Your answer to question 1 is correct"
    }

    if (document.getElementById("listexist").value == "two") {
        second += 1
        document.getElementById("extra2").innerText = "Your answer to question 2 is correct"
    }

    document.getElementById("results").innerText = "You scored: " + (first + second) + "/2"

    if (first + second == 0) {
        document.getElementById("extra1").innerText = "None of your answers were correct"
        document.getElementById("extra2").innerText = ""
    }

    if (second == 1 && first == 0) {
        document.getElementById("extra1").innerText = "Your answer to question 2 is correct"
        document.getElementById("extra2").innerText = ""
    }

    if (second == 0 && first == 1) {
        document.getElementById("extra1").innerText = "Your answer to question 1 is correct"
        document.getElementById("extra2").innerText = ""
    }
}