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

    let fileperms1 = document.getElementById("fileperms1")
    let fileperms2 = document.getElementById("fileperms2")
    let fileperms3 = document.getElementById("fileperms3")

    if (fileperms1.value == "chmod a-r a.txt") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (fileperms2.value == "chmod [people]-[permissions] [file]") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (fileperms3.value == "chmod -w hi.txt") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 2 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}