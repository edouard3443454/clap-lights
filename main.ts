input.onSound(DetectedSound.Loud, function () {
    ligthsOn = !(ligthsOn)
    if (ligthsOn) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let ligthsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.forever(function () {
	
})
