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

    let elt21 = document.getElementById("elt21")
    let elt22 = document.getElementById("elt22")
    let elt23 = document.getElementById("elt23")

    if (elt21.value.toLowerCase() == "ohms" || elt21.value.toLowerCase() == "ohms.") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (elt22.value.toLowerCase() == "no" || elt22.value.toLowerCase() == "no.") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (elt23.value.toLowerCase() == "a multimeter" || elt23.value.toLowerCase() == "a multimeter.") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}
