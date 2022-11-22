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

    let shutdown1 = document.getElementById("shutdown1")
    let shutdown2 = document.getElementById("shutdown2")
    let shutdown3 = document.getElementById("shutdown3")

    if (shutdown1.value == "shutdown -h [time]" || shutdown1.value  == "shutdown --halt [time]") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (shutdown2.value == "shutdown -c") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (shutdown3.value == "shutdown -h 23:42" || shutdown3.value == "shutdown --halt 23:42") {
        third = 1
        document.getElementById("extra2").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 3 incorrect."
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}