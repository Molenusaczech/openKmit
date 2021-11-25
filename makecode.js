let mid = 0
let max = 0
let min = 0
let turnBy = 0
let capturing = 0
min = 0
max = 90
mid = 45
motors.resetAll()
forever(function () {
    capturing = 1
    motors.mediumB.run(50, 90, MoveUnit.Degrees)
    capturing = 0
    motors.mediumB.run(50, -90, MoveUnit.Degrees)
})
forever(function () {
    brick.showNumber(sensors.color4.color(), 1)
    brick.showNumber(motors.mediumB.angle(), 2)
    brick.showNumber(min, 3)
    brick.showNumber(max, 4)
})
forever(function () {
    if (capturing == 1) {
        sensors.color4.pauseUntilColorDetected(ColorSensorColor.Black)
        min = motors.mediumB.angle()
        brick.setStatusLight(StatusLight.GreenFlash)
        sensors.color4.pauseUntilColorDetected(ColorSensorColor.White)
        max = motors.mediumB.angle()
        brick.setStatusLight(StatusLight.RedFlash)
        mid = (min + max) / 2
    }
})
forever(function () {
    turnBy = mid - 45
    motors.largeAD.steer(turnBy, 50)
})
