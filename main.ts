function runIntro () {
    Connected.folderPlay("04", "001")
    radio.sendValue("" + btToken + "Intro", 1)
    basic.pause(5000)
    Connected.folderPlay("04", "002")
    radio.sendValue("" + btToken + "Intro", 2)
    basic.pause(5000)
}
function runInstructions () {
    Connected.folderPlay("04", "003")
    radio.sendValue("" + btToken + "Intro", 3)
    Kong.setServoAngel(Kong.ServoList.S0, 50)
    basic.pause(5000)
    Kong.setServoAngel(Kong.ServoList.S0, 50)
    Connected.folderPlay("04", "004")
    radio.sendValue("" + btToken + "Intro", 4)
    lightSpace("A", "Step")
    lightSpace("B", "Off")
    lightSpace("C", "Off")
    lightSpace("D", "Off")
    lightSpace("E", "Off")
    lightSpace("F", "Off")
    lightSpace("G", "Off")
    lightSpace("H", "Off")
    lightSpace("I", "Off")
}
function lightSpace (Space: string, Effect: string) {
    if (Space == "A") {
        if (Effect == "Step") {
            stripA1.showColor(Connected.colors(Connected.NeoPixelColors.White))
            stripA2.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripA1.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
            stripA2.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripA1.showColor(Connected.colors(Connected.NeoPixelColors.Black))
            stripA2.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "B") {
        if (Effect == "Step") {
            stripB.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripB.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripB.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Mine") {
            stripB.showColor(Connected.colors(Connected.NeoPixelColors.Red))
            Kong.setServoAngel(Kong.ServoList.S7, 110)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S7, 50)
            stripB.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else {
        	
        }
    } else if (Space == "C") {
        if (Effect == "Step") {
            stripC.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripC.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripC.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Mine") {
            stripC.showColor(Connected.colors(Connected.NeoPixelColors.Red))
            Kong.setServoAngel(Kong.ServoList.S1, 85)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S1, 20)
            stripC.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else {
        	
        }
    } else if (Space == "D") {
        if (Effect == "Step") {
            stripD.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripD.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripD.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Mine") {
            stripD.showColor(Connected.colors(Connected.NeoPixelColors.Red))
            brickLightCannon.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
            Kong.setServoAngel(Kong.ServoList.S5, 65)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S5, 135)
            brickLightCannon.showColor(Connected.colors(Connected.NeoPixelColors.Black))
            stripD.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "E") {
        if (Effect == "Step") {
            stripE.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripE.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripE.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Mine") {
            stripE.showColor(Connected.colors(Connected.NeoPixelColors.Red))
            Kong.setServoAngel(Kong.ServoList.S1, 85)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S1, 20)
            stripE.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "F") {
        if (Effect == "Step") {
            stripF.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripF.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripF.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Mine") {
            stripF.showColor(Connected.colors(Connected.NeoPixelColors.Red))
            brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
            Kong.setServoAngel(Kong.ServoList.S3, 50)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S3, 120)
            brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.Black))
            stripF.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "G") {
        if (Effect == "Step") {
            stripG.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripG.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripG.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Mine") {
            stripG.showColor(Connected.colors(Connected.NeoPixelColors.Red))
            brickLightGhosts.showColor(Connected.colors(Connected.NeoPixelColors.Violet))
            Kong.setServoAngel(Kong.ServoList.S2, 40)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S2, 110)
            brickLightGhosts.showColor(Connected.colors(Connected.NeoPixelColors.Black))
            stripG.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "H") {
        if (Effect == "Step") {
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Mine") {
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.Red))
            Kong.setServoAngel(Kong.ServoList.S4, 90)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S4, 65)
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Winner") {
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.Green))
            basic.pause(2000)
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else {
        	
        }
    } else if (Space == "I") {
        if (Effect == "Step") {
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Mine") {
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.Red))
            Kong.setServoAngel(Kong.ServoList.S4, 90)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S4, 65)
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else if (Effect == "Winner") {
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.Green))
            basic.pause(2000)
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        } else {
        	
        }
    }
}
function startMazeLEGACY () {
    lightSpace("A", "Step")
    lightSpace("B", "Indicate")
    lightSpace("C", "Indicate")
    lightSpace("H", "Off")
    lightSpace("I", "Off")
    awaitingStep = true
    basic.pause(300)
    while (awaitingStep) {
        basic.pause(20)
        laserR = pins.analogReadPin(AnalogPin.P0)
        laserC = pins.analogReadPin(AnalogPin.P1)
        laserL = pins.analogReadPin(AnalogPin.P2)
        if (laserR < 5) {
            OLED.writeStringNewLine("First Step was C")
            firstStep = "C"
            lightSpace("A", "Off")
            lightSpace("B", "Off")
            lightSpace("C", "Step")
            lightSpace("E", "Indicate")
            awaitingStep = false
        } else if (laserL > 150) {
            firstStep = "B"
            OLED.writeStringNewLine("First Step was B")
            lightSpace("A", "Off")
            lightSpace("C", "Off")
            lightSpace("B", "Step")
            lightSpace("D", "Indicate")
            awaitingStep = false
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (firstStep == "B") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Second Step was D")
                secondStep = "D"
                lightSpace("B", "Off")
                lightSpace("D", "Step")
                lightSpace("E", "Indicate")
                lightSpace("F", "Indicate")
                awaitingStep = false
            }
        }
    } else if (firstStep == "C") {
        while (awaitingStep) {
            basic.pause(30)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserL > 150) {
                OLED.writeStringNewLine("Second Step was E")
                secondStep = "E"
                lightSpace("C", "Off")
                lightSpace("E", "Step")
                lightSpace("D", "Indicate")
                lightSpace("G", "Indicate")
                awaitingStep = false
            }
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (secondStep == "D") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Thrid Step was F")
                thirdStep = "F"
                lightSpace("D", "Off")
                lightSpace("E", "Off")
                lightSpace("F", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            } else if (laserC > 150) {
                OLED.writeStringNewLine("Thrid Step was E")
                thirdStep = "E"
                lightSpace("D", "Off")
                lightSpace("F", "Off")
                lightSpace("E", "Step")
                lightSpace("G", "Indicate")
                awaitingStep = false
            }
        }
    } else if (secondStep == "E") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserC > 150) {
                OLED.writeStringNewLine("Thrid Step was D")
                thirdStep = "D"
                lightSpace("E", "Off")
                lightSpace("G", "Off")
                lightSpace("D", "Step")
                lightSpace("F", "Indicate")
                awaitingStep = false
            } else if (laserL > 150) {
                OLED.writeStringNewLine("Third Step was G")
                thirdStep = "G"
                lightSpace("D", "Off")
                lightSpace("E", "Off")
                lightSpace("G", "Step")
                lightSpace("I", "Indicate")
                awaitingStep = false
            }
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (thirdStep == "F") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserL > 150) {
                OLED.writeStringNewLine("Fourth Step was H")
                fourthStep = "H"
                lightSpace("D", "Off")
                lightSpace("F", "Off")
                lightSpace("H", "Step")
                lightSpace("I", "Indicate")
                awaitingStep = false
            }
        }
    } else if (thirdStep == "E") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserL > 150) {
                OLED.writeStringNewLine("Fourth Step was G")
                fourthStep = "G"
                lightSpace("E", "Off")
                lightSpace("F", "Off")
                lightSpace("G", "Step")
                lightSpace("I", "Indicate")
                awaitingStep = false
            }
        }
    } else if (thirdStep == "D") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Fourth Step was F")
                fourthStep = "F"
                lightSpace("D", "Off")
                lightSpace("F", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            }
        }
    } else if (thirdStep == "G") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Fourth Step was I")
                fourthStep = "I"
                lightSpace("G", "Off")
                lightSpace("I", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            }
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (fourthStep == "H") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserC > 150) {
                OLED.writeStringNewLine("Fifth Step was I")
                fifthStep = "I"
                lightSpace("H", "Off")
                lightSpace("I", "Step")
                awaitingStep = false
            } else if (laserL > 150) {
                awaitingStep = false
            }
        }
    } else if (fourthStep == "G") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Fifth Step was I")
                fifthStep = "I"
                lightSpace("G", "Off")
                lightSpace("I", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            }
        }
    } else if (fourthStep == "F") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserL > 150) {
                OLED.writeStringNewLine("Fifth Step was H")
                fifthStep = "H"
                lightSpace("F", "Off")
                lightSpace("H", "Step")
                lightSpace("I", "Indicate")
                awaitingStep = false
            }
        }
    } else if (fourthStep == "I") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserC > 150) {
                OLED.writeStringNewLine("Fifth Step was H")
                fifthStep = "H"
                lightSpace("I", "Off")
                lightSpace("H", "Step")
                awaitingStep = false
            }
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (fifthStep == "I") {
        if (!(fourthStep == "H")) {
            while (awaitingStep) {
                basic.pause(20)
                laserR = pins.analogReadPin(AnalogPin.P0)
                laserC = pins.analogReadPin(AnalogPin.P1)
                laserL = pins.analogReadPin(AnalogPin.P2)
                if (laserC > 150) {
                    OLED.writeStringNewLine("Sixth Step was H")
                    sixthStep = "H"
                    lightSpace("I", "Off")
                    lightSpace("H", "Step")
                    awaitingStep = false
                }
            }
        }
    } else if (fifthStep == "H") {
        if (!(fourthStep == "I")) {
            while (awaitingStep) {
                basic.pause(20)
                laserR = pins.analogReadPin(AnalogPin.P0)
                laserC = pins.analogReadPin(AnalogPin.P1)
                laserL = pins.analogReadPin(AnalogPin.P2)
                if (laserC > 150) {
                    OLED.writeStringNewLine("Sixth Step was I")
                    sixthStep = "I"
                    lightSpace("H", "Off")
                    lightSpace("I", "Step")
                    awaitingStep = false
                }
            }
        }
    }
}
radio.onReceivedValue(function (name, value) {
    Connected.showUserText(1, name)
    Connected.showUserNumber(2, value)
    if (name.substr(0, btToken.length) == btToken) {
        position = name.substr(btToken.length, name.length - btToken.length)
        if (position.length > 1) {
            if (position == "Intro") {
                if (value == 1) {
                    stripA1.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    stripA2.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    stripB.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    stripC.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    brickLightWheelLeft.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    brickLightWheelRight.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    brickLightDragonRight.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    brickLightDragonLeft.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    brickLightGhosts.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    brickLightBomb.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    brickLightCannon.showColor(Connected.colors(Connected.NeoPixelColors.White))
                } else if (value == 2) {
                    brickLightWheelLeft.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    brickLightWheelRight.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    brickLightDragonRight.showColor(Connected.colors(Connected.NeoPixelColors.Green))
                    brickLightDragonLeft.showColor(Connected.colors(Connected.NeoPixelColors.Green))
                    brickLightGhosts.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    brickLightBomb.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    brickLightCannon.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripD.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    stripE.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    stripF.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                    stripG.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
                } else if (value == 3) {
                    stripA1.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripA2.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripB.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripC.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripD.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripE.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripF.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripG.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    stripH.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    stripI.showColor(Connected.colors(Connected.NeoPixelColors.White))
                } else if (value == 4) {
                    brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
                    stripH.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
                    stripI.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
                } else if (value == 5) {
                    brickLightWheelLeft.showColor(Connected.colors(Connected.NeoPixelColors.Red))
                    brickLightWheelRight.showColor(Connected.colors(Connected.NeoPixelColors.Red))
                    brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripH.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                    stripI.showColor(Connected.colors(Connected.NeoPixelColors.Black))
                } else if (value == 6) {
                    stripA1.showColor(Connected.colors(Connected.NeoPixelColors.White))
                    stripA2.showColor(Connected.colors(Connected.NeoPixelColors.White))
                } else if (value == 7) {
                	
                } else if (value == 8) {
                	
                } else {
                	
                }
            }
        } else {
            if (value == 0) {
                lightSpace(position, "Off")
            } else if (value == 1) {
                lightSpace(position, "Indicate")
            } else if (value == 2) {
                lightSpace(position, "Step")
            } else if (value == 3) {
                lightSpace(position, "Door")
            } else if (value == 4) {
                lightSpace(position, "RedChop")
            } else if (value == 5) {
                lightSpace(position, "Shark")
            } else if (value == 6) {
                lightSpace(position, "Cannon")
            } else if (value == 7) {
                lightSpace(position, "GrayChop")
            } else if (value == 8) {
                lightSpace(position, "Dragon")
            } else if (value == 9) {
                lightSpace(position, "Wheel")
            } else if (value == 10) {
                lightSpace(position, "Sock")
            } else if (value == 20) {
                lightSpace(position, "Mine")
            } else if (value == 30) {
                lightSpace(position, "Winner")
            } else if (value == 23) {
                lightSpace(position, "")
            } else if (value == 24) {
                lightSpace(position, "")
            } else if (value == 25) {
                lightSpace(position, "")
            } else if (value == 26) {
                lightSpace(position, "")
            } else if (value == 27) {
                lightSpace(position, "")
            } else if (value == 28) {
                lightSpace(position, "")
            } else {
            	
            }
        }
    }
})
function setStrip (A1: string, A2: string, B: string, C: string, D: string, E: string, F: string, G: string, H: string, I: string) {
	
}
let position = ""
let sixthStep = ""
let fifthStep = ""
let fourthStep = ""
let thirdStep = ""
let secondStep = ""
let firstStep = ""
let laserL = 0
let laserC = 0
let laserR = 0
let awaitingStep = false
let brickLightCannon: Connected.Strip = null
let brickLightShell: Connected.Strip = null
let brickLightBomb: Connected.Strip = null
let brickLightGhosts: Connected.Strip = null
let brickLightDragonLeft: Connected.Strip = null
let brickLightDragonRight: Connected.Strip = null
let brickLightWheelRight: Connected.Strip = null
let brickLightWheelLeft: Connected.Strip = null
let stripI: Connected.Strip = null
let stripH: Connected.Strip = null
let stripG: Connected.Strip = null
let stripF: Connected.Strip = null
let stripE: Connected.Strip = null
let stripD: Connected.Strip = null
let stripC: Connected.Strip = null
let stripB: Connected.Strip = null
let stripA2: Connected.Strip = null
let stripA1: Connected.Strip = null
let btToken = ""
let test = Connected.colors(Connected.NeoPixelColors.Red)
let lightsAreSet = false
OLED.init(128, 64)
Connected.showUserText(1, "goodbye, daisy")
basic.showIcon(IconNames.Heart)
basic.pause(200)
led.enable(false)
Kong.lightIntensity(10)
pins.setAudioPinEnabled(false)
let btGroup = 171
btToken = "KC$"
radio.setGroup(btGroup)
Connected.MP3SetPort(Connected.DigitalRJPin.O0)
Connected.setVolume(23)
Connected.setVolume(18)
let stripLights = Connected.create(Connected.DigitalRJPin.W1, 20, Connected.NeoPixelMode.RGB)
stripLights.setBrightness(100)
stripLights.showColor(Connected.colors(Connected.NeoPixelColors.Black))
stripA1 = stripLights.range(8, 2)
stripA2 = stripLights.range(10, 2)
stripB = stripLights.range(6, 2)
stripC = stripLights.range(12, 2)
stripD = stripLights.range(4, 2)
stripE = stripLights.range(14, 2)
stripF = stripLights.range(2, 2)
stripG = stripLights.range(16, 2)
stripH = stripLights.range(0, 2)
stripI = stripLights.range(18, 2)
let brickLights = Connected.create(Connected.DigitalRJPin.W15, 8, Connected.NeoPixelMode.RGB)
brickLights.setBrightness(100)
brickLightWheelLeft = brickLights.range(7, 1)
brickLightWheelRight = brickLights.range(0, 1)
brickLightDragonRight = brickLights.range(3, 1)
brickLightDragonLeft = brickLights.range(2, 1)
brickLightGhosts = brickLights.range(4, 1)
brickLightBomb = brickLights.range(5, 1)
brickLightShell = brickLights.range(6, 1)
brickLightCannon = brickLights.range(1, 1)
let wukongLights = kongpixel.create(DigitalPin.P16, 4, KongPixelMode.RGB)
wukongLights.showColor(kongpixel.colors(KongPixelColors.Green))
wukongLights.setBrightness(10)
Kong.ksetMotorSpeed(Kong.MotorList.M1, 0)
Kong.setServoAngel(Kong.ServoList.S0, 50)
Kong.setServoAngel(Kong.ServoList.S1, 20)
Kong.setServoAngel(Kong.ServoList.S2, 110)
Kong.setServoAngel(Kong.ServoList.S3, 120)
Kong.setServoAngel(Kong.ServoList.S4, 65)
Kong.setServoAngel(Kong.ServoList.S5, 135)
Kong.setServoAngel(Kong.ServoList.S6, 90)
Kong.setServoAngel(Kong.ServoList.S7, 50)
brickLightWheelLeft.showColor(Connected.colors(Connected.NeoPixelColors.Red))
brickLightWheelRight.showColor(Connected.colors(Connected.NeoPixelColors.Red))
brickLightDragonRight.showColor(Connected.colors(Connected.NeoPixelColors.Green))
brickLightDragonLeft.showColor(Connected.colors(Connected.NeoPixelColors.Green))
brickLightGhosts.showColor(Connected.colors(Connected.NeoPixelColors.Black))
brickLightBomb.showColor(Connected.colors(Connected.NeoPixelColors.Black))
brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.Black))
brickLightCannon.showColor(Connected.colors(Connected.NeoPixelColors.Black))
pins.digitalWritePin(DigitalPin.P13, 1)
for (let index = 0; index < 0; index++) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    Kong.ksetMotorSpeed(Kong.MotorList.M1, 10)
    brickLightWheelLeft.showColor(Connected.colors(Connected.NeoPixelColors.White))
    brickLightWheelRight.showColor(Connected.colors(Connected.NeoPixelColors.White))
    brickLightDragonRight.showColor(Connected.colors(Connected.NeoPixelColors.Red))
    brickLightDragonLeft.showColor(Connected.colors(Connected.NeoPixelColors.Red))
    brickLightGhosts.showColor(Connected.colors(Connected.NeoPixelColors.Violet))
    brickLightBomb.showColor(Connected.colors(Connected.NeoPixelColors.Orange))
    brickLightShell.showColor(Connected.colors(Connected.NeoPixelColors.Blue))
    brickLightCannon.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
    Kong.setServoAngel(Kong.ServoList.S0, 140)
    Kong.setServoAngel(Kong.ServoList.S1, 85)
    Kong.setServoAngel(Kong.ServoList.S2, 40)
    Kong.setServoAngel(Kong.ServoList.S3, 50)
    Kong.setServoAngel(Kong.ServoList.S4, 90)
    Kong.setServoAngel(Kong.ServoList.S5, 65)
    Kong.setServoAngel(Kong.ServoList.S6, 75)
    Kong.setServoAngel(Kong.ServoList.S7, 110)
}
basic.forever(function () {
	
})
