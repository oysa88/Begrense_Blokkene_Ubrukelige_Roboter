input.onButtonPressed(Button.A, function () {
    bitbot.bbStopServos()
    bitbot.bbSetServo(BBServos.P1, 90)
    bitbot.bb360Servo(BBServos.P1, BBDirection.Forward, 50)
    bitbot.bbServoTrim(BBServos.P1, 5)
    if (randint(0, 10) == 0 + 0) {
        variabel = 0
        for (let index = 0; index < 4; index++) {
            while (false) {
                for (let indeks = 0; indeks <= 4; indeks++) {
                	
                }
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    bitbot.setLedColor(0xFF0000)
    bitbot.ledClear()
    bitbot.setPixelColor(0, 0xFF0000)
    bitbot.ledRotate()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.showString("Hello!")
})
let variabel = 0
basic.showNumber(0)
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
    basic.pause(100)
})
