/*
 * Superpowered.d.ts
 * web-audio-javascript-webassembly-SDK-interactive-audio
 *
 * Last modified by srubin on 8/4/21, 3:27 PM
 * Copyright © 2021 Descript, Inc. All rights reserved.
 */

declare class SuperpoweredProcessor {
    constructor(samplerate: number);
    process: (
        inMemoryPointer: SuperpoweredMemoryPointer,
        outMemoryPointer: SuperpoweredMemoryPointer,
        bufferSize: number,
    ) => void;
}

declare class Bitcrusher extends SuperpoweredProcessor {
    enabled: boolean;
    frequency: number;
    bits: number;
}

declare interface ProcessorConstructable<T> {
    new(samplerate: number): T;
}

export declare class Superpowered {
    Initialize(options: {
        licenseKey: string;
    } & Partial<{
        enableAudioAnalysis: boolean;
        enableFFTAndFrequencyDomain: boolean;
        enableAudioTimeStretching: boolean;
        enableAudioEffects: boolean;
        enableAudioPlayerAndDecoder: boolean;
        enableCryptographics: boolean;
        enableNetworking: boolean;
    }>): void;

    wasmCode: any;
    __maxChannels__: number;

    createFloatArray(length: number): SuperpoweredFloat32Buffer;
    bufferToWASM(output: SuperpoweredFloat32Buffer, input: AudioBuffer): void;
    bufferToJS(input: SuperpoweredFloat32Buffer, output: AudioBuffer): void;

    // Flesh this out with proper types as we go
    Bitcrusher: ProcessorConstructable<Bitcrusher>;
}

export declare interface SuperpoweredMemoryPointer {}

export declare interface SuperpoweredFloat32Buffer {
    array: Float32Array;
    pointer: SuperpoweredMemoryPointer;
}
