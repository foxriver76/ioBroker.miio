"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
/**
 * Tests whether the given variable is a real object and not an Array
 * @param it The variable to test
 */
function isObject(it) {
    // This is necessary because:
    // typeof null === 'object'
    // typeof [] === 'object'
    // [] instanceof Object === true
    return Object.prototype.toString.call(it) === "[object Object]";
}
exports.isObject = isObject;
/**
 * Tests whether the given variable is really an Array
 * @param it The variable to test
 */
function isArray(it) {
    if (Array.isArray != null)
        return Array.isArray(it);
    return Object.prototype.toString.call(it) === "[object Array]";
}
exports.isArray = isArray;
/**
 * Translates text using the Google Translate API
 * @param text The text to translate
 * @param targetLang The target languate
 */
function translateText(text, targetLang) {
    return __awaiter(this, void 0, void 0, function* () {
        if (targetLang === "en")
            return text;
        try {
            const url = `http://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}&ie=UTF-8&oe=UTF-8`;
            const response = yield axios_1.default({ url, timeout: 5000 });
            if (isArray(response.data)) {
                // we got a valid response
                return response.data[0][0][0];
            }
            throw new Error("Invalid response for translate request");
        }
        catch (e) {
            throw new Error(`Could not translate to "${targetLang}": ${e}`);
        }
    });
}
exports.translateText = translateText;
function RGBToHex(rgb) {
    //RGB format is [255,255,255]
    let hexColor = "#";
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 3; i++) {
        let r = null;
        let c = rgb[i];
        let pos = 0;
        const hexAr = [];
        while (c > 16) {
            r = c % 16;
            c = (c / 16) >> 0;
            hexAr.push(hex[r]);
            pos++;
        }
        hexAr.push(hex[c]);
        if (pos === 0) {
            hexAr.push("0");
        }
        hexColor += hexAr.reverse().join("");
    }
    return hexColor;
}
exports.RGBToHex = RGBToHex;
function HextoRGB(hex) {
    const rgb = [];
    const rawHex = hex.replace(/^#/, "");
    for (let i = 0; i < 3; i++) {
        const r = rawHex.substring(i * 2, i * 2 + 2);
        rgb.push(parseInt(r, 16));
    }
    return rgb;
}
exports.HextoRGB = HextoRGB;
function objectExtend(target, source) {
    if (!source) {
        return target;
    }
    if (source.delete) {
        return {};
    }
    for (const obj in source) {
        if (!target.hasOwnProperty(obj)) {
            target[obj] = source[obj];
        }
        else {
            if (isObject(source[obj])) {
                const t = objectExtend(target[obj], source[obj]);
                if (JSON.stringify(t) === "{}") {
                    delete target[obj];
                }
                else {
                    target[obj] = t;
                }
            }
            else {
                target[obj] = source[obj];
            }
        }
    }
    return target;
}
exports.objectExtend = objectExtend;
