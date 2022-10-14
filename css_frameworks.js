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

    let mentioned = document.getElementById("frameworkmentioned")
    let frameworks_do = document.getElementById("frameworksallow")
    let bg_apply = document.getElementById("frameworksbg")

    if (mentioned.value == "TailwindCSS" || mentioned.value == "Bootstrap" || mentioned.value == "WingCSS") {
        first = 1
        document.getElementById("extra1").innerText = "You got question 1 correct."
    } else {
        document.getElementById("extra1").innerText = "You got question 1 incorrect."
    }

    if (frameworks_do.value.toLowerCase() == "speed up web design" || frameworks_do.value.toLowerCase() == "they allow us to speed up web design.") {
        second = 1
        document.getElementById("extra2").innerText = "You got question 2 correct."
    } else {
        document.getElementById("extra2").innerText = "You got question 2 incorrect."
    }

    if (bg_apply.value == "<p class='bg-green-400'></p>" || bg_apply.value == '<p class="bg-green-400"></p>') {
        third = 1
        document.getElementById("extra3").innerText = "You got question 3 correct."
    } else {
        document.getElementById("extra3").innerText = "You got question 3 incorrect."
    }


    document.getElementById("results").innerText = "You got " + parseInt(first + second + third) + "/3"
}