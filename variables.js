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

    let varq1 = document.getElementById("varq1")
    let varq2 = document.getElementById("varq2")
    let varq3 = document.getElementById("varq3")

    if (varq1.value == "sleeping = true") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (varq2.value.toLowerCase() == "a decimal number" || varq2.value.toLowerCase() == "a decimal number.") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (varq3.value == "quotation marks" || varq3.value == "speech marks" || varq3.value == "quotation marks." || varq3.value == "speech marks.") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}