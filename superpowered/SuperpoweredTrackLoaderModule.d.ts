/*
 * SuperpoweredTrackLoaderModule.d.ts
 * web-audio-javascript-webassembly-SDK-interactive-audio
 *
 * Last modified by srubin on 8/4/21, 3:27 PM
 * Copyright © 2021 Descript, Inc. All rights reserved.
 */


export interface SuperpoweredTrackMessage {
    data: {
        SuperpoweredLoad: string;
    } | string;
}

export declare class SuperpoweredTrackLoader {
    constructor(node: AudioWorkletNode);

    onmessage: (message: SuperpoweredTrackMessage) => boolean;
}

