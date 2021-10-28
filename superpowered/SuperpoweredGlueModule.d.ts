import { Superpowered } from "./Superpowered";

export declare class SuperpoweredGlue {
    constructor();
    static fetch: (url: string) => Promise<Superpowered>;
    loadFromArrayBuffer(
        wasmCode: BufferSource,
        afterWASMLoaded?: {
            afterWASMLoaded: () => void;
        },
    ): Promise<void>;
    loadFromModule(
        wasmSuperpoweredModule: WebAssembly.Module,
        afterWASMLoaded?: {
            afterWASMLoaded: () => void;
        },
    ): void;
    loadFromInstance(
        wasmSuperpoweredInstance: WebAssembly.Instance,
        afterWASMLoaded?: {
            afterWASMLoaded: () => void;
        },
    ): void;
}
