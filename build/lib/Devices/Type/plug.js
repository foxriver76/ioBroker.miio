"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceClass = void 0;
const device_1 = require("../device");
const command_1 = require("../../Commands/command");
const property_1 = require("../../Properties/property");
class DeviceClass extends device_1.MiioAdapterDevice {
    get deviceName() {
        return "plug";
    }
    get deviceType() {
        return "TypeDevice";
    }
    get rwState() {
        return {
            power: {
                command: new command_1.SetPower(),
                property: new property_1.Power(),
            }
        };
    }
    get roState() {
        return {
            temperature: {
                property: new property_1.Temperature(),
            }
        };
    }
    get polling() {
        return 3000;
    }
    constructor(miioDev) {
        super(miioDev);
    }
}
exports.DeviceClass = DeviceClass;
;
