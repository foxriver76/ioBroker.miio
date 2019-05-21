import { MiioAdapterRWState } from "../device";
import { MiioAdapterDevicePhilipsLight } from "../VendorType/philips.light";
import { Device } from "miio-lite";
import { objectExtend } from "../../tools";
import {
    EnableAmb,
    SetAmbBright,
    SetEyeCare,
} from "../../Commands/command";
import {
    AmbStatus,
    AmbValue,
    EyeCare
} from "../../Properties/property";

export class MiioAdapterDevicePhilipsLightSread extends MiioAdapterDevicePhilipsLight {
    public get deviceName() {
        return "philips.light.sread";
    }

    public get deviceType() {
        return "VendorTypeVersionDevice";
    }

    public get rwState(): Record<string, MiioAdapterRWState> {
        return objectExtend(super.rwState, {
            colorTemperature: {
                delete: true
            },
            eyeCare: {
                command: new SetEyeCare(),
                property: new EyeCare(),
            },
            secondLightPower: {
                command: new EnableAmb(),
                property: new AmbStatus(),
            },
            secondLightBrightness: {
                command: new SetAmbBright(),
                property: new AmbValue(),
            }
        });
    }

    public constructor(miioDev: Device) {
        super(miioDev);
    }
};