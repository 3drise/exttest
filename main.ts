namespace testled {
    /**
     * test led sur port P0
     */
//% blockId=ledsurP0
//% block="lanceLED"
 pins.digitalWritePin(DigitalPin.P0, 1),
    basic.pause(8000),
     pins.digitalWritePin(DigitalPin.P0, 1),
    basic.pause(8000)
}
