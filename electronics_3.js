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

    let elt31 = document.getElementById("elt31")
    let elt32 = document.getElementById("elt32")
    let elt33 = document.getElementById("elt33")

    if (elt31.value.toLowerCase() == "piezoelectric ceramics." || elt31.value.toLowerCase() == "piezoelectric ceramics" ) {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (elt32.value.toLowerCase() == "yes" || elt32.value.toLowerCase() == "yes.") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (elt33.value.toLowerCase() == "magnetic piezoelectric" || elt33.value.toLowerCase() == "magnetic piezoelectric") {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}