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

    let elt1 = document.getElementById("elt1")
    let elt2 = document.getElementById("elt2")
    let elt3 = document.getElementById("elt3")

    if (elt1.value.toLowerCase() == "the columns" || elt1.value.toLowerCase() == "the columns." ) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (elt2.value.toLowerCase() == "two" || elt2.value.toLowerCase() == "two." || elt2.value == "2") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (elt3.value.toLowerCase() == "light emitting diode" || elt3.value.toLowerCase() == "light emitting diode.") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}