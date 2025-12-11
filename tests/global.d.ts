/// <reference types="vitest/globals" />

// Import types from the package
import type { Simnet } from "@stacks/clarinet-sdk";
import type { Assertion } from "vitest";
import type { ClarityValue } from "@stacks/transactions";

declare global {
  var simnet: Simnet;
  
  namespace Vi {
    interface Assertion<T = any> {
      toBeBool(expected?: boolean): T;
      toBeUint(expected?: bigint | number): T;
      toBeInt(expected?: bigint | number): T;
      toBeList(expected?: any[]): T;
      toBeSome(expected?: ClarityValue): T;
      toBeNone(): T;
      toBeOk(expected?: ClarityValue): T;
      toBeErr(expected?: ClarityValue): T;
    }
  }
}

export {};

