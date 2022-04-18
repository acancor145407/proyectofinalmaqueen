radio.onReceivedNumber(function (receivedNumber) {
    maqueen.motorStop(maqueen.Motors.All)
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 6) {
        radio.sendNumber(3)
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (receivedNumber == 4) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) == 0 && maqueen.Ultrasonic(PingUnit.Centimeters) == 0) {
            maqueen.motorStop(maqueen.Motors.M1)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
            basic.pause(500)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
        }
    }
    if (receivedNumber == 5) {
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    }
    if (receivedNumber == 6) {
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    }
})
radio.setGroup(14)
basic.showIcon(IconNames.Happy)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(100)
})
