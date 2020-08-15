let w = 0
basic.showIcon(IconNames.No)
let x = 2
let y = 2
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    w = input.compassHeading()
    basic.pause(500)
    led.unplot(x, y)
    if (w < 11) {
        x = 2
        y = 0
    }
    if (w >= 11 && w < 34) {
        x = 1
        y = 0
    }
    if (w >= 34 && w < 56) {
        x = 0
        y = 0
    }
    if (w >= 56 && w < 79) {
        x = 0
        y = 1
    }
    if (w >= 79 && w < 101) {
        x = 0
        y = 2
    }
    if (w >= 101 && w < 124) {
        x = 0
        y = 3
    }
    if (w >= 124 && w < 146) {
        x = 0
        y = 4
    }
    if (w >= 146 && w < 169) {
        x = 1
        y = 4
    }
    if (w >= 169 && w < 191) {
        x = 2
        y = 4
    }
    if (w >= 191 && w < 214) {
        x = 3
        y = 4
    }
    if (w >= 214 && w < 236) {
        x = 4
        y = 4
    }
    if (w >= 236 && w < 259) {
        x = 4
        y = 3
    }
    if (w >= 259 && w < 281) {
        x = 4
        y = 2
    }
    if (w >= 281 && w < 304) {
        x = 4
        y = 1
    }
    if (w >= 304 && w < 326) {
        x = 4
        y = 0
    }
    if (w >= 326 && w < 349) {
        x = 3
        y = 0
    }
    if (w >= 349 && w < 360) {
        x = 2
        y = 0
    }
    led.plot(x, y)
})
