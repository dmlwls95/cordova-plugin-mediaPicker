import { IonicNativePlugin } from '@ionic-native/core';
export interface MediaPickerOptions {
    /**
     * max images to be selected, defaults to 15. If this is set to 1, upon selection of a single image, the plugin will return it. (Android only)
     */
    selectMode?: number;
    /**
     * Max width to allow images to be
     */
    maxSelectSize?: number;
    /**
     * Max height to allow images to be
     */
    maxSelectCount?: number;
}
/**
 * @name Media Picker
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { MediaPicker } from '@ionic-native/media-picker';
 *
 *
 * constructor(private mediaPicker: MediaPicker) { }
 *
 * ...
 *
 *
 * this.mediaPicker.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class MediaPicker extends IonicNativePlugin {
    /**
     * This function does something
     * @param {mediaPickerOptions} options
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getMedias(options: MediaPickerOptions): Promise<any>;
}
