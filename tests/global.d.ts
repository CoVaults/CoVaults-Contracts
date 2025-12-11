/// <reference types="vitest/globals" />

import type { Simnet } from "@stacks/clarinet-sdk";

declare global {
  var simnet: Simnet;
  
  namespace Vi {
    interface Assertion<T = any> {
      toBeBool(expected?: boolean): T;
      toBeUint(expected?: bigint | number): T;
      toBeInt(expected?: bigint | number): T;
      toBeList(expected?: any[]): T;
      toBeSome(expected?: any): T;
      toBeNone(): T;
      toBeOk(expected?: any): T;
      toBeErr(expected?: any): T;
    }
  }
}

export {};
