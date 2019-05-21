"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const philips_light_1 = require("../VendorType/philips.light");
const tools_1 = require("../../tools");
const command_1 = require("../../Commands/command");
const property_1 = require("../../Properties/property");
class MiioAdapterDevicePhilipsLightMoonlight extends philips_light_1.MiioAdapterDevicePhilipsLight {
    get deviceName() {
        return "philips.light.moonlight";
    }
    get deviceType() {
        return "VendorTypeVersionDevice";
    }
    get rwState() {
        return tools_1.objectExtend(super.rwState, {
            RGB: {
                command: new command_1.SetRgb(),
                property: new property_1.Rgb(),
            },
            power: {
                property: new property_1.Pow(),
            },
            brightness: {
                property: new property_1.Bri(),
            }
        });
    }
    constructor(miioDev) {
        super(miioDev);
    }
}
exports.MiioAdapterDevicePhilipsLightMoonlight = MiioAdapterDevicePhilipsLightMoonlight;
;
