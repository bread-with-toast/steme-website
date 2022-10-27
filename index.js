let random_number = Math.round(Math.random() * 5)

if (random_number == 0) {
    document.getElementById("title_content").innerHTML = "<h1 class='down'>Enjoy <span class='blue'>Learning</span></h1>"
} else if (random_number == 1) {
    document.getElementById("title_content").innerHTML = "<h1 class='down'>Learn <span class='blue'>With Ease</span></h1>"
} else if (random_number == 2) {
    document.getElementById("title_content").innerHTML = "<h1 class='down'>Learn <span class='blue'>For Free</span></h1>"
} else if (random_number == 3) {
    document.getElementById("title_content").innerHTML = "<h1 class='down'>Web Design <span class='blue'>For Free</span></h1>"
} else if (random_number == 4) {
    document.getElementById("title_content").innerHTML = "<h1 class='down'>Information <span class='blue'>For Free</span></h1>"
} else if (random_number == 5) {
    document.getElementById("title_content").innerHTML = "<h1 class='down'>Portable <span class='blue'>Education</span></h1>"
}