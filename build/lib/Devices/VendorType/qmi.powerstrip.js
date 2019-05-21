"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const powerstrip_1 = require("../Type/powerstrip");
const tools_1 = require("../../tools");
const property_1 = require("../../Properties/property");
class MiioAdapterDeviceQmiPowerstrip extends powerstrip_1.MiioAdapterDeviceTypePowerstrip {
    get deviceName() {
        return "qmi.powerstrip";
    }
    get deviceType() {
        return "VendorTypeDevice";
    }
    get roState() {
        return tools_1.objectExtend(super.roState, {
            voltage: {
                property: new property_1.Voltage(),
            },
            powerFactor: {
                property: new property_1.PowerFactor(),
            },
            LeakageCurrent: {
                property: new property_1.ElecLeakage(),
            }
        });
    }
    constructor(miioDev) {
        super(miioDev);
    }
}
exports.MiioAdapterDeviceQmiPowerstrip = MiioAdapterDeviceQmiPowerstrip;
;
