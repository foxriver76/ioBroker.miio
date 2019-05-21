"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const light_1 = require("../Type/light");
const tools_1 = require("../../tools");
const command_1 = require("../../Commands/command");
const property_1 = require("../../Properties/property");
class MiioAdapterDevicePhilipsLight extends light_1.MiioAdapterDeviceTypeLight {
    get deviceName() {
        return "philips.light";
    }
    get deviceType() {
        return "VendorTypeDevice";
    }
    get rwState() {
        return tools_1.objectExtend(super.rwState, {
            colorTemperature: {
                command: new command_1.SetCct(),
                property: new property_1.Cct(),
            },
        });
    }
    constructor(miioDev) {
        super(miioDev);
    }
}
exports.MiioAdapterDevicePhilipsLight = MiioAdapterDevicePhilipsLight;
;
