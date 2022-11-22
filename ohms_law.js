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

    let ohmslaw1 = document.getElementById("ohmslaw1")
    let ohmslaw2 = document.getElementById("ohmslaw2")
    let ohmslaw3 = document.getElementById("ohmslaw3")

    if (ohmslaw1.value.toLowerCase() == "i = v/r" || ohmslaw1.value.toLowerCase() == "i = v / r" ) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect. Make sure you formatted the formula correctly."
    }

    if (ohmslaw2.value.toLowerCase() == "the difference of electric charge between two points" || ohmslaw2.value.toLowerCase() == "the difference of electric charge between two points.") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (ohmslaw3.value.toLowerCase() == "0.009 amps" || ohmslaw3.value.toLowerCase() == "0.009 amps.") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}