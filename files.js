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

    let files1 = document.getElementById("files1")
    let files2 = document.getElementById("files2")
    let files3 = document.getElementById("files3")

    if (files1.value.toLowerCase().includes("create a file") || files1.value.toLowerCase().includes("creates a file")) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (files2.value.toLowerCase() == "touch file1.txt") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (files3.value.toLowerCase() == "cat > file1.txt") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}
