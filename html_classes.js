document.getElementById("classq").hidden = true

function reveal() {
    document.getElementById("classq").hidden = false
    document.getElementById("classbtnshow").hidden = true
    document.getElementById("classinfo").hidden = true
}

function mark() {
    let first = 0
    let second = 0

    var div_made = document.getElementById("divmade")
    var id_atr = document.getElementById("idatr")

    if (div_made.value == "<div></div>") {
        first = 1
        document.getElementById("extra1").innerText = "Your answer to question 1 is correct." 
    } else {
        first = 0
        document.getElementById("extra1").innerText = "Your answer to question 1 is not correct." 
    }

    if (id_atr.value == "id=''" || id_atr.value == 'id=""') {
        second = 1
        document.getElementById("extra2").innerText = "Your answer to question 2 is correct." 
    } else {
        second = 0
        document.getElementById("extra2").innerText = "Your answer to question 2 is not correct." 
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second) + "/2"
}