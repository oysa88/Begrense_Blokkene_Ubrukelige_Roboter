let variabel = 0
input.onButtonPressed(Button.A, function () {
    if (randint(0, 10) == 0 + 0) {
        variabel = 0
    }
    bitbot.bbSetServo(BBServos.P1, 90)
    bitbot.bb360Servo(BBServos.P1, BBDirection.Forward, 50)
    bitbot.bbServoTrim(BBServos.P1, 5)
    bitbot.bbStopServos()
})
input.onGesture(Gesture.Shake, function () {
    bitbot.setLedColor(0xFF0000)
    bitbot.ledClear()
    bitbot.setPixelColor(0, 0xFF0000)
    bitbot.ledRotate()
    basic.showNumber(0)
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
basic.forever(function () {
    basic.pause(100)
})
