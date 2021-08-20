/*
 * SuperpoweredGlueModule.d.ts
 * web-audio-javascript-webassembly-SDK-interactive-audio
 *
 * Last modified by srubin on 8/4/21, 3:27 PM
 * Copyright © 2021 Descript, Inc. All rights reserved.
 */

import {Superpowered, SuperpoweredFloat32Buffer} from "./Superpowered";

export declare class SuperpoweredGlue {
  constructor();
  static fetch: (url: string) => Promise<Superpowered>;
}
