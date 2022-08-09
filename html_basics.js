document.getElementById("basicsquestions").hidden = true

function reveal() {
    document.getElementById("basicsquestions").hidden = false
    document.getElementById("basicsinfo").hidden = true
    document.getElementById("basicsbtnshow").hidden = true
}

function mark() {
    let first = 0
    let second = 0

    if (document.getElementById("basicsshow").checked) {
        first += 1
    }

    if (document.getElementById("basicsstand").value == "Hypertext Markup Language") {
        second += 1
    }

    document.getElementById("results").innerText = "You scored: " + (first + second) + "/2"

    if (first == 1 && second == 0) {
        document.getElementById("extra").innerText = "You answered only the first question correctly"
    } else if (first == 0 && second == 1) {
        document.getElementById("extra").innerText = "You answered only the second question correctly"
    } else if (first == 0 && second == 0) {
        document.getElementById("extra").innerText = "You answered no questions correctly"
    } else {
        document.getElementById("extra").innerText = "You answered all of the questions correctly"
    }
}