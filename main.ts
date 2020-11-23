input.onButtonPressed(Button.A, function () {
    Go = true
})
input.onButtonPressed(Button.B, function () {
    Go = false
})
let BlueButton = 0
let Go = false
Go = false
basic.forever(function () {
    while (Go) {
        BlueButton = pins.digitalReadPin(DigitalPin.P5)
        if (BlueButton == 1) {
            serial.writeLine("Blue Button Pressed")
            pins.analogWritePin(AnalogPin.P1, 1023)
        } else {
            serial.writeLine("Blue Button Released")
            pins.analogWritePin(AnalogPin.P1, 0)
        }
    }
})
