# Servo

## Steg 1

```blocks
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
let variabel = 0
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
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
basic.clearScreen()
basic.pause(100)
if (randint(0, 10) == 0 + 0) {
    variabel = 0
}
bitbot.bbSetServo(BBServos.P1, 90)
bitbot.bb360Servo(BBServos.P1, BBDirection.Forward, 50)
bitbot.bbServoTrim(BBServos.P1, 5)
bitbot.bbStopServos()
basic.forever(function () {
	
})
```

```package
BitBot=github:4tronix/bitbot#1.5.2
```
