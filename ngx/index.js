import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MediaPicker = /** @class */ (function (_super) {
    __extends(MediaPicker, _super);
    function MediaPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaPicker.prototype.getMedias = function (options) { return cordova(this, "getMedias", { "callbackOrder": "reverse" }, arguments); };
    MediaPicker.pluginName = "MediaPicker";
    MediaPicker.plugin = "cordova-plugin-mediapicker-dmcsdk";
    MediaPicker.pluginRef = "cordova.plugins.mediapicker.dmcsdk";
    MediaPicker.repo = "https://github.com/DmcSDK/cordova-plugin-mediaPicker";
    MediaPicker.install = "";
    MediaPicker.installVariables = [];
    MediaPicker.platforms = ["Android", "iOS"];
    MediaPicker.decorators = [
        { type: Injectable }
    ];
    return MediaPicker;
}(IonicNativePlugin));
export { MediaPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXBpY2tlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtRDNGLCtCQUFpQjs7OztJQVdoRCwrQkFBUyxhQUFDLE9BQTJCOzs7Ozs7Ozs7Z0JBWnRDLFVBQVU7O3NCQW5EWDtFQW9EaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIG1heCBpbWFnZXMgdG8gYmUgc2VsZWN0ZWQsIGRlZmF1bHRzIHRvIDE1LiBJZiB0aGlzIGlzIHNldCB0byAxLCB1cG9uIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpbWFnZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiBpdC4gKEFuZHJvaWQgb25seSlcbiAgICovXG4gIHNlbGVjdE1vZGU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heCB3aWR0aCB0byBhbGxvdyBpbWFnZXMgdG8gYmVcbiAgICovXG4gIG1heFNlbGVjdFNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heCBoZWlnaHQgdG8gYWxsb3cgaW1hZ2VzIHRvIGJlXG4gICAqL1xuICBtYXhTZWxlY3RDb3VudD86IG51bWJlcjtcblxufVxuLyoqXG4gKiBAbmFtZSBNZWRpYSBQaWNrZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1lZGlhUGlja2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tZWRpYS1waWNrZXInO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhUGlja2VyOiBNZWRpYVBpY2tlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMubWVkaWFQaWNrZXIuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNZWRpYVBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1lZGlhcGlja2VyLWRtY3NkaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubWVkaWFwaWNrZXIuZG1jc2RrJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0RtY1NESy9jb3Jkb3ZhLXBsdWdpbi1tZWRpYVBpY2tlcicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhUGlja2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSB7bWVkaWFQaWNrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBnZXRNZWRpYXMob3B0aW9uczogTWVkaWFQaWNrZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbn1cbiJdfQ==