import { MiioAdapterRWState } from "../device";
import { MiioAdapterDeviceTypeLight } from "../Type/light";
import { Device } from "miio-lite";
import { objectExtend } from "../../tools";
import {
    SetCct
} from "../../Commands/command";
import {
    Cct
} from "../../Properties/property";

export class MiioAdapterDevicePhilipsLight extends MiioAdapterDeviceTypeLight {
    public get deviceName() {
        return "philips.light";
    }

    public get deviceType() {
        return "VendorTypeDevice";
    }

    public get rwState(): Record<string, MiioAdapterRWState> {
        return objectExtend(super.rwState, {
            colorTemperature: {
                command: new SetCct(),
                property: new Cct(),
            },
        });
    }

    public constructor(miioDev: Device) {
        super(miioDev);
    }
};