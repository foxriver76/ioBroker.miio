"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const powerstrip_1 = require("../Type/powerstrip");
const tools_1 = require("../../tools");
const command_1 = require("../../Commands/command");
const property_1 = require("../../Properties/property");
class MiioAdapterDeviceZimiPowerstrip extends powerstrip_1.MiioAdapterDeviceTypePowerstrip {
    get deviceName() {
        return "zimi.powerstrip";
    }
    get deviceType() {
        return "VendorTypeDevice";
    }
    get rwState() {
        return tools_1.objectExtend(super.rwState, {
            powerPrice: {
                command: new command_1.SetPowerPrice(),
                property: new property_1.PowerPrice(),
            },
            wifiLed: {
                command: new command_1.SetWifiLed(),
                property: new property_1.WifiLed(),
            }
        });
    }
    constructor(miioDev) {
        super(miioDev);
    }
}
exports.MiioAdapterDeviceZimiPowerstrip = MiioAdapterDeviceZimiPowerstrip;
;
