document.getElementById("basicsquestions").hidden = true

function reveal() {
    document.getElementById("basicsquestions").hidden = false
    document.getElementById("basicsbtnshow").hidden = true
    document.getElementById("basicsinfo").hidden = true
}

function mark() {
    let first = 0
    let second = 0
    let third = 0

    let symbolselect = document.getElementById("selectorsid")
    let selectorstypeafter = document.getElementById("selectorstypeafter")
    let style = document.getElementById("selectorsstyle")

    if (symbolselect.value == ".") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (selectorstypeafter.value.toLowerCase() == "curly braces" || selectorstypeafter.value.toLowerCase() == "{}") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (style.value == "#card { background-color: green; }") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}