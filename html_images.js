document.getElementById("imagesquestions").hidden = true

function reveal() {
    document.getElementById("imagesquestions").hidden = false
    document.getElementById("imagesinfo").hidden = true
    document.getElementById("imagesbtnshow").hidden = true
}

function mark() {
    let first = 0
    let second = 0
    let third = 0
    
    if (document.getElementById("imagestag").value == "<img>") {
        first += 1
        document.getElementById("extra1").innerText = "Your answer to question 1 is correct"
    }

    if (document.getElementById("imagesalt").value == 'alt=""' || document.getElementById("imagesalt").value == "alt=''") {
        second += 1
        document.getElementById("extra2").innerText = "Your answer to question 2 is correct"
    }

    if (document.getElementById("imageslink").value == "<a href=''>" || document.getElementById("imageslink").value == '<a href="">') {
        third += 1
        document.getElementById("extra3").innerText = "Your answer to question 3 is correct"
    }

    document.getElementById("results").innerText = "You scored: " + (first + second + third) + "/3"

    if (first == 0) {
        document.getElementById("extra1").innerText = ""
    }

    if (second == 0) {
        document.getElementById("extra2").innerText = ""
    }

    if (third == 0) {
        document.getElementById("extra3").innerText = ""
    }

    if (first + second + third == 0) {
        document.getElementById("extra1").innerText = "None of your answers were correct"
        document.getElementById("extra2").innerText = ""
        document.getElementById("extra3").innerText = ""
    }

    
}