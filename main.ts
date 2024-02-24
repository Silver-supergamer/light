let lights_enabled = false
input.onButtonPressed(Button.A, function () {
    lights_enabled = !(lights_enabled)
    if (lights_enabled) {
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . # # #
        . # # # #
        # # # # .
        # # # . .
        # # . . .
        `)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # #
        # # # # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
