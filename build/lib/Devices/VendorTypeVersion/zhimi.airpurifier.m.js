"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const airpurifier_1 = require("../Type/airpurifier");
const tools_1 = require("../../tools");
const command_1 = require("../../Commands/command");
const property_1 = require("../../Properties/property");
class MiioAdapterDeviceZhimiAirpurifierM extends airpurifier_1.MiioAdapterDeviceTypeAirPurifier {
    get deviceName() {
        return "zhimi.airpurifier.m";
    }
    get deviceType() {
        return "VendorTypeVersionDevice";
    }
    get rwState() {
        return tools_1.objectExtend(super.rwState, {
            favoriteLevel: {
                command: new command_1.SetLevelFavorite(),
                property: new property_1.FavoriteLevel(),
            },
            learnSleepMode: {
                command: new command_1.SetActSleep(),
                property: new property_1.ActSleep(),
            }
        });
    }
    get roState() {
        return tools_1.objectExtend(super.roState, {
            averageAqi: {
                property: new property_1.AverageAqi(),
            },
            humidity: {
                property: new property_1.Humidity(),
            },
            Temperature: {
                property: new property_1.TempDec(),
            },
            usedTime: {
                property: new property_1.UseTime(),
            },
            purifyVolume: {
                property: new property_1.PurifyVolume(),
            },
            illuminance: {
                delete: true,
            }
        });
    }
    constructor(miioDev) {
        super(miioDev);
    }
}
exports.MiioAdapterDeviceZhimiAirpurifierM = MiioAdapterDeviceZhimiAirpurifierM;
;
