let listeMots = ["pomme", "orange", "fraise"]
let score = 0
let motUser = ""

function quiz(num) {
    motUser = prompt("Merci de taper: " + listeMots[num])

    if (motUser === listeMots[num]) {
        score += 5
        alert("Bravo ! score = " + score)
    } else {
        score -= 2
        alert("Caca ! score = " + score)
    }
}

for (let i = 0; i < 3; i++) {
    quiz(i)
}