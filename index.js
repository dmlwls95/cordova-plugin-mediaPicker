var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MediaPickerOriginal = /** @class */ (function (_super) {
    __extends(MediaPickerOriginal, _super);
    function MediaPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaPickerOriginal.prototype.getMedias = function (options) { return cordova(this, "getMedias", { "callbackOrder": "reverse" }, arguments); };
    MediaPickerOriginal.pluginName = "MediaPicker";
    MediaPickerOriginal.plugin = "cordova-plugin-mediapicker-dmcsdk";
    MediaPickerOriginal.pluginRef = "cordova.plugins.mediapicker.dmcsdk";
    MediaPickerOriginal.repo = "https://github.com/DmcSDK/cordova-plugin-mediaPicker";
    MediaPickerOriginal.install = "";
    MediaPickerOriginal.installVariables = [];
    MediaPickerOriginal.platforms = ["Android", "iOS"];
    return MediaPickerOriginal;
}(IonicNativePlugin));
var MediaPicker = new MediaPickerOriginal();
export { MediaPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXBpY2tlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtRDNGLCtCQUFpQjs7OztJQVdoRCwrQkFBUyxhQUFDLE9BQTJCOzs7Ozs7OztzQkEvRHZDO0VBb0RpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVBpY2tlck9wdGlvbnMge1xuICAvKipcbiAgICogbWF4IGltYWdlcyB0byBiZSBzZWxlY3RlZCwgZGVmYXVsdHMgdG8gMTUuIElmIHRoaXMgaXMgc2V0IHRvIDEsIHVwb24gc2VsZWN0aW9uIG9mIGEgc2luZ2xlIGltYWdlLCB0aGUgcGx1Z2luIHdpbGwgcmV0dXJuIGl0LiAoQW5kcm9pZCBvbmx5KVxuICAgKi9cbiAgc2VsZWN0TW9kZT86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IHdpZHRoIHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgbWF4U2VsZWN0U2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IGhlaWdodCB0byBhbGxvdyBpbWFnZXMgdG8gYmVcbiAgICovXG4gIG1heFNlbGVjdENvdW50PzogbnVtYmVyO1xuXG59XG4vKipcbiAqIEBuYW1lIE1lZGlhIFBpY2tlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWVkaWFQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21lZGlhLXBpY2tlcic7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWFQaWNrZXI6IE1lZGlhUGlja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5tZWRpYVBpY2tlci5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01lZGlhUGlja2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWFwaWNrZXItZG1jc2RrJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tZWRpYXBpY2tlci5kbWNzZGsnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRG1jU0RLL2NvcmRvdmEtcGx1Z2luLW1lZGlhUGlja2VyJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVkaWFQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIHttZWRpYVBpY2tlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHBhcmFtIGFyZzIge251bWJlcn0gQW5vdGhlciBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGdldE1lZGlhcyhvcHRpb25zOiBNZWRpYVBpY2tlck9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxufVxuIl19