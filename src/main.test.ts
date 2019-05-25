/**
 * This is a dummy TypeScript test file using chai and mocha
 *
 * It's automatically excluded from npm and its build output is excluded from both git and npm.
 * It is advised to test all your modules with accompanying *.test.ts-files
 */

import { expect } from "chai";
// import { functionToTest } from "./moduleToTest";
// import { tests, utils} from "@iobroker/testing";
import * as utils from "@iobroker/adapter-core";
import * as miio from "./lib/miio";

describe("module to test => function to test", () => {
    // initializing logic
    const expected = 5;

    it(`should return ${expected}`, () => {
        const result = 5;
        // assign result a value from functionToTest
        expect(result).to.equal(expected);
        // or using the should() syntax
        result.should.equal(expected);
    });
    // ... more tests => it

});

const controller = new miio.Controller({});
let deviceId = 1;

function runOneDeviceTest(vendor: string, type: string, version: string, states: Record<string,ioBroker.StateCommon>) {
    const model = `${vendor}.${type}.${version}`;
    states["connected"] = {
        "desc": "Will be set to false if get property failed for 5 times",
        "name": "Is device connected",
        "read": true,
        "role": "indicator.reachable",
        "type": "boolean",
        "write": false
    },
    states["model"] = {
        "desc": "show current device's MIIO model",
        "name": "device model",
        "read": true,
        "role": "info",
        "type": "string",
        "write": false
    },
    it(model, async () => {
        const id = deviceId++;
        await controller.registerDevice({
            id: `miio:${id}`,
            management: {
                model: `${model}`,
                address: "127.0.0.1",
                token: "ca82c4b695b908c0803779a606edaf3c"
            },
            destroy: () => {},
            propertyUpdated: (p: string, v: any) => {},
            call: (command: string, paras?: (string|number)[]) => {},
            checkOk: () => {},
            defineProperty: (prop: any, def?: any) => {},
            updatePollDuration: (ms: number) => {},
            on: (event: string, cb?: any) => {},
            loadProperties: (props: any) => {return {};}
        }, true);
        const device = controller.deviceRegistered[id];
        expect(device.miioInfo).to.deep.equal({
            "id": `${id}`,
            "vendor": vendor,
            "type": type,
            "version": version,
            "model": model
        });
        expect(device.device.states).to.deep.equal(states);
    });
}

describe("my test", () => {
    runOneDeviceTest("zhimi", "humidifier", "v3", {
        "power": {
            "write": true,
            "read": true,
            "name": "power",
            "role": "state",
            "type": "boolean"
        },
        "mode": {
            "write": true,
            "read": true,
            "name": "mode",
            "role": "state",
            "type": "string"
        },
        "buzzer": {
            "write": true,
            "read": true,
            "name": "buzzer",
            "role": "state",
            "type": "boolean"
        },
        "ledBrightnessLevel": {
            "write": true,
            "read": true,
            "name": "ledBrightnessLevel",
            "role": "state",
            "type": "number",
            "min": 0,
            "max": 2
        },
        "childLock": {
            "write": true,
            "read": true,
            "name": "childLock",
            "role": "state",
            "type": "boolean"
        },
        "targetHumidity": {
            "write": true,
            "read": true,
            "name": "targetHumidity",
            "unit": "%",
            "role": "state",
            "type": "number"
        },
        "temperature": {
            "write": false,
            "read": true,
            "name": "temperature",
            "role": "state",
            "type": "number",
            "unit": "°C"
        },
        "humidity": {
            "write": false,
            "read": true,
            "name": "humidity",
            "role": "state",
            "type": "number",
            "unit": "%"
        },
        "hardwareVersion": {
            "write": false,
            "read": true,
            "name": "hardwareVersion",
            "role": "state",
            "type": "number"
        },
        "usedTime": {
            "write": false,
            "read": true,
            "name": "usedTime",
            "role": "state",
            "type": "number",
            "unit": "secs"
        },
        "LastPressedButton": {
            "write": false,
            "read": true,
            "name": "LastPressedButton",
            "role": "state",
            "type": "string"
        }
    });
    runOneDeviceTest("chuangmi", "plug", "v3", {
        "power": {
            "write": true,
            "read": true,
            "name": "power",
            "role": "state",
            "type": "boolean"
        },
        "usbPower": {
            "write": true,
            "read": true,
            "name": "usbPower",
            "role": "state",
            "type": "boolean"
        },
        "wifiLed": {
            "write": true,
            "read": true,
            "name": "wifiLed",
            "role": "state",
            "type": "boolean"
        },
        "temperature": {
            "write": false,
            "read": true,
            "name": "temperature",
            "role": "state",
            "type": "number",
            "unit": "°C"
        },
        "loadPower": {
            "name": "loadPower",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "W",
            "write": false,
        }
    });
    runOneDeviceTest("philips", "light", "bulb", {
        "brightness": {
            "max": 100,
            "min": 0,
            "name": "brightness",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "%",
            "write": true
        },
        "colorTemperature": {
            "max": 100,
            "min": 1,
            "name": "colorTemperature",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "%",
            "write": true
        },
        "power": {
            "name": "power",
            "read": true,
            "role": "state",
            "type": "boolean",
            "write": true
        }
    });
    runOneDeviceTest("yunmi", "waterpuri", "lx3", {
        "FilteredWaterTDS": {
            "name": "FilteredWaterTDS",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "TDS",
            "write": false
        },
        "FrontActiveCarbonFilter": {
            "name": "FrontActiveCarbonFilter",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "%",
            "write": false
        },
        "FrontActiveCarbonFilterDay": {
            "name": "FrontActiveCarbonFilterDay",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "days",
            "write": false
        },
        "PPCottonFilter": {
            "name": "PPCottonFilter",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "%",
            "write": false
        },
        "PPCottonFilterDay": {
            "name": "PPCottonFilterDay",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "days",
            "write": false
        },
        "ROFilter": {
            "name": "ROFilter",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "%",
            "write": false
        },
        "ROFilterDay": {
            "name": "ROFilterDay",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "days",
            "write": false
        },
        "RearActiveCarbonFilter": {
            "name": "RearActiveCarbonFilter",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "%",
            "write": false
        },
        "RearActiveCarbonFilterDay": {
            "name": "RearActiveCarbonFilterDay",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "days",
            "write": false
        },
        "TapWaterTDS": {
            "name": "TapWaterTDS",
            "read": true,
            "role": "state",
            "type": "number",
            "unit": "TDS",
            "write": false
        }
    });
});

// ... more test suites => describe
