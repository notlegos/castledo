function toRGB (Color: string, RGB: string) {
    R = 0
    G = 0
    B = 0
    if (Color == "Red") {
        R = 255
        G = 0
        B = 0
    } else if (Color == "White") {
        R = 255
        G = 255
        B = 255
    } else if (Color == "Off") {
        R = 0
        G = 0
        B = 0
    } else if (Color == "Yellow") {
        R = 255
        G = 255
        B = 0
    } else if (Color == "Blue") {
        R = 0
        G = 0
        B = 255
    } else {
    	
    }
    if (RGB == "R") {
        return R
    } else if (RGB == "G") {
        return G
    } else {
        return B
    }
}
function setBricks (WheelL: string, WheelR: string, DragonL: string, DragonR: string, Ghosts: string, Bomb: string, Shell: string, Cannon: string) {
    if (WheelL != "") {
        brickLights.setPixelColor(7, Connected.rgb(toRGB(WheelL, "R"), toRGB(WheelL, "G"), toRGB(WheelL, "B")))
    }
    if (WheelR != "") {
        brickLights.setPixelColor(0, Connected.rgb(toRGB(WheelR, "R"), toRGB(WheelR, "G"), toRGB(WheelR, "B")))
    }
    if (DragonL != "") {
        brickLights.setPixelColor(3, Connected.rgb(toRGB(DragonL, "R"), toRGB(DragonL, "G"), toRGB(DragonL, "B")))
    }
    if (DragonR != "") {
        brickLights.setPixelColor(2, Connected.rgb(toRGB(DragonR, "R"), toRGB(DragonR, "G"), toRGB(DragonR, "B")))
    }
    if (Ghosts != "") {
        brickLights.setPixelColor(4, Connected.rgb(toRGB(Ghosts, "R"), toRGB(Ghosts, "G"), toRGB(Ghosts, "B")))
    }
    if (Bomb != "") {
        brickLights.setPixelColor(5, Connected.rgb(toRGB(Bomb, "R"), toRGB(Bomb, "G"), toRGB(Bomb, "B")))
    }
    if (Shell != "") {
        brickLights.setPixelColor(6, Connected.rgb(toRGB(Shell, "R"), toRGB(Shell, "G"), toRGB(Shell, "B")))
    }
    if (Cannon != "") {
        brickLights.setPixelColor(1, Connected.rgb(toRGB(Cannon, "R"), toRGB(Cannon, "G"), toRGB(Cannon, "B")))
    }
    brickLights.show()
}
function lightSpace (Space: string, Effect: string) {
    if (Space == "A") {
        if (Effect == "Step") {
            setStrip("White", "White", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off")
        } else if (Effect == "Indicate") {
            setStrip("Yellow", "Yellow", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off")
        } else if (Effect == "Off") {
            setStrip("Off", "Off", "", "", "", "", "", "", "", "")
        }
    } else if (Space == "B") {
        if (Effect == "Step") {
            setStrip("", "", "White", "", "", "", "", "", "", "")
        } else if (Effect == "Indicate") {
            setStrip("", "", "Yellow", "", "", "", "", "", "", "")
        } else if (Effect == "Off") {
            setStrip("", "", "Off", "", "", "", "", "", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "Red", "", "", "", "", "", "", "")
            Kong.setServoAngel(Kong.ServoList.S7, 110)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S7, 50)
            setStrip("", "", "Off", "", "", "", "", "", "", "")
        }
    } else if (Space == "C") {
        if (Effect == "Step") {
            setStrip("", "", "", "White", "", "", "", "", "", "")
        } else if (Effect == "Indicate") {
            setStrip("", "", "", "Yellow", "", "", "", "", "", "")
        } else if (Effect == "Off") {
            setStrip("", "", "", "Off", "", "", "", "", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "Red", "", "", "", "", "", "")
            Kong.setServoAngel(Kong.ServoList.S1, 85)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S1, 20)
            setStrip("", "", "", "Off", "", "", "", "", "", "")
        }
    } else if (Space == "D") {
        if (Effect == "Step") {
            setStrip("", "", "", "", "White", "", "", "", "", "")
        } else if (Effect == "Indicate") {
            setStrip("", "", "", "", "Yellow", "", "", "", "", "")
        } else if (Effect == "Off") {
            setStrip("", "", "", "", "Off", "", "", "", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "Red", "", "", "", "", "")
            setBricks("", "", "", "", "", "", "", "Yellow")
            Kong.setServoAngel(Kong.ServoList.S5, 65)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S5, 135)
            setBricks("", "", "", "", "", "", "", "Off")
            setStrip("", "", "", "", "Off", "", "", "", "", "")
        }
    } else if (Space == "E") {
        if (Effect == "Step") {
            setStrip("", "", "", "", "", "White", "", "", "", "")
        } else if (Effect == "Indicate") {
            setStrip("", "", "", "", "", "Yellow", "", "", "", "")
        } else if (Effect == "Off") {
            setStrip("", "", "", "", "", "Off", "", "", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "Red", "", "", "", "")
            Kong.setServoAngel(Kong.ServoList.S1, 85)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S1, 20)
            setStrip("", "", "", "", "", "Off", "", "", "", "")
        }
    } else if (Space == "F") {
        if (Effect == "Step") {
            setStrip("", "", "", "", "", "", "White", "", "", "")
        } else if (Effect == "Indicate") {
            setStrip("", "", "", "", "", "", "Yellow", "", "", "")
        } else if (Effect == "Off") {
            setStrip("", "", "", "", "", "", "Off", "", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "", "Red", "", "", "")
            setBricks("", "", "", "", "", "", "Blue", "")
            Kong.setServoAngel(Kong.ServoList.S3, 50)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S3, 120)
            setBricks("", "", "", "", "", "", "Off", "")
            setStrip("", "", "", "", "", "", "Off", "", "", "")
        }
    } else if (Space == "G") {
        if (Effect == "Step") {
            setStrip("", "", "", "", "", "", "", "White", "", "")
        } else if (Effect == "Indicate") {
            setStrip("", "", "", "", "", "", "", "Yellow", "", "")
        } else if (Effect == "Off") {
            setStrip("", "", "", "", "", "", "", "Off", "", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "", "", "Red", "", "")
            setBricks("", "", "", "", "Blue", "", "", "")
            Kong.setServoAngel(Kong.ServoList.S2, 40)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S2, 110)
            setBricks("", "", "", "", "Off", "", "", "")
            setStrip("", "", "", "", "", "", "", "Off", "", "")
        }
    } else if (Space == "H") {
        if (Effect == "Step") {
            setStrip("", "", "", "", "", "", "", "", "White", "")
        } else if (Effect == "Indicate") {
            setStrip("", "", "", "", "", "", "", "", "Yellow", "")
        } else if (Effect == "Off") {
            setStrip("", "", "", "", "", "", "", "", "Off", "")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "", "", "", "Red", "")
            Kong.setServoAngel(Kong.ServoList.S4, 90)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S4, 65)
            setStrip("", "", "", "", "", "", "", "", "Off", "")
        } else if (Effect == "Winner") {
            setStrip("", "", "", "", "", "", "", "", "Blue", "")
            basic.pause(2000)
            setStrip("", "", "", "", "", "", "", "", "Off", "")
        }
    } else if (Space == "I") {
        if (Effect == "Step") {
            setStrip("", "", "", "", "", "", "", "", "", "White")
        } else if (Effect == "Indicate") {
            setStrip("", "", "", "", "", "", "", "", "", "Yellow")
        } else if (Effect == "Off") {
            setStrip("", "", "", "", "", "", "", "", "", "Off")
        } else if (Effect == "Mine") {
            setStrip("", "", "", "", "", "", "", "", "", "Red")
            Kong.setServoAngel(Kong.ServoList.S4, 90)
            basic.pause(2000)
            Kong.setServoAngel(Kong.ServoList.S4, 65)
            setStrip("", "", "", "", "", "", "", "", "", "Off")
        } else if (Effect == "Winner") {
            setStrip("", "", "", "", "", "", "", "", "", "Blue")
            basic.pause(2000)
            setStrip("", "", "", "", "", "", "", "", "", "Off")
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
                if (value == 0) {
                    setBricks("Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off")
                    setStrip("Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off")
                } else if (value == 1) {
                    basic.pause(600)
                    setBricks("White", "White", "White", "White", "Off", "White", "White", "White")
                    basic.pause(600)
                    setStrip("White", "White", "White", "White", "White", "White", "White", "White", "White", "White")
                } else if (value == 2) {
                    for (let index = 0; index < 8; index++) {
                        setStrip("Red", "Blue", "Blue", "Red", "Red", "Blue", "Blue", "Red", "Red", "Blue")
                        setBricks("Blue", "Red", "Blue", "Red", "Off", "Blue", "Blue", "Red")
                        basic.pause(100)
                        setStrip("Blue", "Red", "Red", "Blue", "Blue", "Red", "Red", "Blue", "Blue", "Red")
                        setBricks("Red", "Blue", "Red", "Blue", "Off", "Red", "Red", "Blue")
                        basic.pause(140)
                    }
                    for (let index = 0; index < 13; index++) {
                        setStrip("Red", "Blue", "Blue", "Red", "Red", "Blue", "Blue", "Red", "Red", "Blue")
                        setBricks("Blue", "Red", "Blue", "Red", "Off", "Blue", "Blue", "Red")
                        basic.pause(60)
                        setStrip("Blue", "Red", "Red", "Blue", "Blue", "Red", "Red", "Blue", "Blue", "Red")
                        setBricks("Red", "Blue", "Red", "Blue", "Off", "Red", "Red", "Blue")
                        basic.pause(60)
                    }
                    basic.pause(700)
                } else if (value == 3) {
                    setBricks("Red", "Red", "Red", "Red", "Off", "Red", "Red", "Red")
                    setStrip("White", "White", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off")
                    basic.pause(150)
                    setStrip("", "", "White", "White", "", "", "", "", "", "")
                    basic.pause(100)
                    setStrip("Off", "Off", "", "", "White", "White", "", "", "", "")
                    basic.pause(50)
                    setStrip("", "", "Off", "Off", "", "", "White", "White", "", "")
                    basic.pause(25)
                    setStrip("", "", "", "", "Off", "Off", "", "", "White", "White")
                    basic.pause(25)
                    setStrip("", "", "", "", "", "", "Off", "Off", "White", "White")
                    setBricks("Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off")
                } else if (value == 4) {
                    basic.pause(750)
                    setStrip("", "", "", "", "", "", "", "", "Off", "White")
                } else if (value == 5) {
                    setStrip("Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue")
                    setBricks("Blue", "Blue", "Blue", "Blue", "Off", "Blue", "Blue", "Blue")
                } else if (value == 6) {
                    setStrip("Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red")
                    setBricks("Red", "Red", "Red", "Red", "Off", "Red", "Red", "Red")
                    basic.pause(4000)
                    setStrip("White", "White", "White", "White", "White", "White", "White", "White", "White", "White")
                    setBricks("White", "White", "White", "White", "Off", "White", "White", "White")
                } else if (value == 7) {
                    setStrip("White", "White", "White", "White", "White", "White", "White", "White", "White", "White")
                    setBricks("White", "White", "White", "White", "Off", "White", "White", "White")
                } else if (value == 8) {
                	
                } else if (value == 9) {
                	
                } else if (value == 10) {
                	
                } else if (value == 11) {
                    Kong.setServoAngel(Kong.ServoList.S0, 50)
                    basic.pause(5000)
                    Kong.setServoAngel(Kong.ServoList.S0, 50)
                } else if (value == 12) {
                	
                } else if (value == 13) {
                	
                } else if (value == 14) {
                	
                } else if (value == 15) {
                	
                } else if (value == 16) {
                	
                } else if (value == 17) {
                	
                } else if (value == 18) {
                	
                } else if (value == 19) {
                	
                } else if (value == 20) {
                	
                } else if (false) {
                	
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
    if (A1 != "") {
        colorA1 = Connected.rgb(toRGB(A1, "R"), toRGB(A1, "G"), toRGB(A1, "B"))
        lightStrip.setPixelColor(8, colorA1)
        lightStrip.setPixelColor(9, colorA1)
    }
    if (A2 != "") {
        colorA2 = Connected.rgb(toRGB(A2, "R"), toRGB(A2, "G"), toRGB(A2, "B"))
        lightStrip.setPixelColor(10, colorA2)
        lightStrip.setPixelColor(11, colorA2)
    }
    if (B != "") {
        colorB = Connected.rgb(toRGB(B, "R"), toRGB(B, "G"), toRGB(B, "B"))
        lightStrip.setPixelColor(6, colorB)
        lightStrip.setPixelColor(7, colorB)
    }
    if (C != "") {
        colorC = Connected.rgb(toRGB(C, "R"), toRGB(C, "G"), toRGB(C, "B"))
        lightStrip.setPixelColor(12, colorC)
        lightStrip.setPixelColor(13, colorC)
    }
    if (D != "") {
        colorD = Connected.rgb(toRGB(D, "R"), toRGB(D, "G"), toRGB(D, "B"))
        lightStrip.setPixelColor(4, colorD)
        lightStrip.setPixelColor(5, colorD)
    }
    if (E != "") {
        colorE = Connected.rgb(toRGB(E, "R"), toRGB(E, "G"), toRGB(E, "B"))
        lightStrip.setPixelColor(14, colorE)
        lightStrip.setPixelColor(15, colorE)
    }
    if (F != "") {
        colorF = Connected.rgb(toRGB(F, "R"), toRGB(F, "G"), toRGB(F, "B"))
        lightStrip.setPixelColor(2, colorF)
        lightStrip.setPixelColor(3, colorF)
    }
    if (G != "") {
        colorG = Connected.rgb(toRGB(G, "R"), toRGB(G, "G"), toRGB(G, "B"))
        lightStrip.setPixelColor(16, colorG)
        lightStrip.setPixelColor(17, colorG)
    }
    if (H != "") {
        colorH = Connected.rgb(toRGB(H, "R"), toRGB(H, "G"), toRGB(H, "B"))
        lightStrip.setPixelColor(0, colorH)
        lightStrip.setPixelColor(1, colorH)
    }
    if (I != "") {
        colorI = Connected.rgb(toRGB(I, "R"), toRGB(I, "G"), toRGB(I, "B"))
        lightStrip.setPixelColor(18, colorI)
        lightStrip.setPixelColor(19, colorI)
    }
    lightStrip.show()
}
let colorI = 0
let colorH = 0
let colorG = 0
let colorF = 0
let colorE = 0
let colorD = 0
let colorC = 0
let colorB = 0
let colorA2 = 0
let colorA1 = 0
let position = ""
let B = 0
let G = 0
let R = 0
let lightStrip: Connected.Strip = null
let brickLights: Connected.Strip = null
let btToken = ""
let lightsAreSet = false
let test = Connected.colors(Connected.NeoPixelColors.Red)
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
brickLights = Connected.create(Connected.DigitalRJPin.W15, 8, Connected.NeoPixelMode.RGB)
brickLights.setBrightness(255)
lightStrip = Connected.create(Connected.DigitalRJPin.W1, 20, Connected.NeoPixelMode.RGB)
lightStrip.setBrightness(255)
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
pins.digitalWritePin(DigitalPin.P13, 1)
for (let index = 0; index < 0; index++) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    Kong.ksetMotorSpeed(Kong.MotorList.M1, 10)
    Kong.setServoAngel(Kong.ServoList.S0, 140)
    Kong.setServoAngel(Kong.ServoList.S1, 85)
    Kong.setServoAngel(Kong.ServoList.S2, 40)
    Kong.setServoAngel(Kong.ServoList.S3, 50)
    Kong.setServoAngel(Kong.ServoList.S4, 90)
    Kong.setServoAngel(Kong.ServoList.S5, 65)
    Kong.setServoAngel(Kong.ServoList.S6, 75)
    Kong.setServoAngel(Kong.ServoList.S7, 110)
}
setBricks("Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off")
setStrip("Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off", "Off")
basic.forever(function () {
	
})
