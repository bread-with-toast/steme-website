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

    var css_for = document.getElementById("basicstyle")
    var css_stand = document.getElementById("basicsstand")
    var inline_tag_start = document.getElementById("basicsopen")

    if (css_for.checked) {
        first = 1
        document.getElementById("extra1").innerText = "Your answer to question 1 is correct." 
    } else {
        first = 0
        document.getElementById("extra1").innerText = "Your answer to question 1 is not correct." 
    }

    if (css_stand.value == "Cascading Style Sheets" || css_stand.value == "Cascading Style Sheet") {
        second = 1
        document.getElementById("extra2").innerText = "Your answer to question 2 is correct." 
    } else {
        second = 0
        document.getElementById("extra2").innerText = "Your answer to question 2 is not correct." 
    }

    if (inline_tag_start.value == "<style>") {
        third = 1
        document.getElementById("extra3").innerText = "Your answer to question 3 is correct." 
    } else {
        third = 0
        document.getElementById("extra3").innerText = "Your answer to question 3 is not correct." 
    }

    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}