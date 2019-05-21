import { MiioAdapterROState } from "../device";
import { MiioAdapterDeviceTypeHumidifier } from "../Type/humidifier";
import { Device } from "miio-lite";
import { objectExtend } from "../../tools";

import {
    ButtonPressed
} from "../../Properties/property";

export class MiioAdapterDeviceZhimiHumidifierV extends MiioAdapterDeviceTypeHumidifier {
    get deviceName() {
        return "zhimi.humidifier.v";
    }

    get deviceType() {
        return "VendorTypeVersionDevice";
    }

    get roState(): Record<string, MiioAdapterROState> {
        return objectExtend(super.roState, {
            LastPressedButton: {
                property: new ButtonPressed(),
            }
        });
    }

    constructor(miioDev: Device) {
        super(miioDev);
    }
};