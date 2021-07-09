'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var MediaPicker = /** @class */ (function (_super) {
    tslib.__extends(MediaPicker, _super);
    function MediaPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaPicker.prototype.getMedias = function (options) { return core.cordova(this, "getMedias", { "callbackOrder": "reverse" }, arguments); };
    MediaPicker.pluginName = "MediaPicker";
    MediaPicker.plugin = "cordova-plugin-mediapicker-dmcsdk";
    MediaPicker.pluginRef = "cordova.plugins.mediapicker.dmcsdk";
    MediaPicker.repo = "https://github.com/DmcSDK/cordova-plugin-mediaPicker";
    MediaPicker.install = "";
    MediaPicker.installVariables = [];
    MediaPicker.platforms = ["Android", "iOS"];
    MediaPicker.decorators = [
        { type: core$1.Injectable }
    ];
    return MediaPicker;
}(core.IonicNativePlugin));

exports.MediaPicker = MediaPicker;
