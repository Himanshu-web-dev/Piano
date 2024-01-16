let clicks = document.querySelectorAll("button")

clicks.forEach((click) => {

    click.addEventListener("click", function () {

        playSound(this.innerText)

    })
})

window.addEventListener("keypress", function (event) {
    let key = event.key.toUpperCase()
    playSound(key)
})
function show(key) {
    let obj = document.querySelector(`.${key}`)
    obj.classList.add("play")

    setTimeout(() => {
        obj.classList.remove("play")
    }, 200);

}


function playSound(key) {
    switch (key) {
        case "A":
            let audio1 = new Audio("./tunes/a.wav")
            audio1.currentTime = 0
            audio1.play()
            show("A")
            return;
        case "S":
            let audio2 = new Audio("./tunes/s.wav")
            audio2.currentTime = 0
            audio2.play()
            show("S")
            return;
        case "D":
            let audio3 = new Audio("./tunes/d.wav")
            audio3.currentTime = 0
            audio3.play()
            show("D")
            return;
        case "F":
            let audio4 = new Audio("./tunes/f.wav")
            audio4.currentTime = 0
            audio4.play()
            show("F")
            return;
        case "G":
            let audio5 = new Audio("./tunes/g.wav")
            audio5.currentTime = 0
            audio5.play()
            show("G")
            return;
        case "H":
            let audio6 = new Audio("./tunes/h.wav")
            audio6.currentTime = 0
            audio6.play()
            show("H")
            return;
        case "J":
            let audio7 = new Audio("./tunes/j.wav")
            audio7.currentTime = 0
            audio7.play()
            show("J")
            return;
        case "K":
            let audio8 = new Audio("./tunes/k.wav")
            audio8.currentTime = 0
            audio8.play()
            show("K")
            return;
        case "L":
            let audio9 = new Audio("./tunes/l.wav")
            audio9.currentTime = 0
            audio9.play()
            show("L")
            return;
        case ";":
            let audio10 = new Audio("./tunes/;.wav")
            audio10.currentTime = 0
            audio10.play()
            show2()
            return;
        case "W":
            let audio11 = new Audio("./tunes/w.wav")
            audio11.currentTime = 0
            audio11.play()
            show("W")
            return;
        case "E":
            let audio12 = new Audio("./tunes/e.wav")
            audio12.currentTime = 0
            audio12.play()
            show("E")
            return;
        case "T":
            let audio13 = new Audio("./tunes/t.wav")
            audio13.currentTime = 0
            audio13.play()
            show("T")
            return;
        case "Y":
            let audio14 = new Audio("./tunes/y.wav")
            audio14.currentTime = 0
            audio14.play()
            show("Y")
            return;
        case "U":
            let audio15 = new Audio("./tunes/u.wav")
            audio15.currentTime = 0
            audio15.play()
            show("U")
            return;
        case "O":
            let audio16 = new Audio("./tunes/o.wav")
            audio16.currentTime = 0
            audio16.play()
            show("O")
            return;
        case "P":
            let audio17 = new Audio("./tunes/p.wav")
            audio17.currentTime = 0
            audio17.play()
            show("P")
            return;

    }

}

