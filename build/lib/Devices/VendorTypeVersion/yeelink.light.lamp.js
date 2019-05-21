"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yeelink_light_1 = require("../VendorType/yeelink.light");
const tools_1 = require("../../tools");
class MiioAdapterDeviceYeelinkLightLamp extends yeelink_light_1.MiioAdapterDeviceYeelinkLight {
    get deviceName() {
        return "yeelink.light.lamp";
    }
    get deviceType() {
        return "VendorTypeVersionDevice";
    }
    get rwState() {
        return tools_1.objectExtend(super.rwState, {
            RGB: {
                delete: true
            }
        });
    }
    constructor(miioDev) {
        super(miioDev);
    }
}
exports.MiioAdapterDeviceYeelinkLightLamp = MiioAdapterDeviceYeelinkLightLamp;
;
