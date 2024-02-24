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
    if (input.compassHeading() >= 180) {
        direction = ArrowNames.North
    } else {
        direction = ArrowNames.South
    }
    basic.showArrow(direction)
})
let lights_enabled = false
let direction: ArrowNames
input.calibrateCompass()
