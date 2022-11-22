document.getElementById("classq").hidden = true

function reveal() {
    document.getElementById("classq").hidden = false
    document.getElementById("classbtnshow").hidden = true
    document.getElementById("classinfo").hidden = true
}

function mark() {
    let first = 0
    let second = 0

    let microcontrollers1 = document.getElementById("microcontrollers1")
    let microcontrollers2 = document.getElementById("microcontrollers2")
    let microcontrollers3 = document.getElementById("microcontrollers3")

    if (microcontrollers1.value == "Python" || microcontrollers1.value  == "C++" || microcontrollers1.value == "C") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (microcontrollers2.value == "Arduino Uno" || microcontrollers2.value == "Raspberry Pi") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second) + "/2"
}
