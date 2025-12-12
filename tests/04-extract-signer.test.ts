import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";

import {
  bufferHexFromOk,
  getTxnHash,
  initMultisigWithSigners,
  makeRandomSigner,
  signHash,
  submitStxTxn,
} from "./helpers/signing";

describe("Issue #4: extract-signer", () => {
  it("returns signer principal for a valid signature from a configured signer", () => {
    const signer = makeRandomSigner();

    initMultisigWithSigners([signer.address], 1);
    submitStxTxn(signer.address);

    const hashResult = getTxnHash(0, signer.address);
    const hashHex = bufferHexFromOk(hashResult);
    const signature = signHash(hashHex, signer.privateKey);

    const extractResult = simnet.callReadOnlyFn(
      "multisig",
      "extract-signer",
      [Cl.bufferFromHex(hashHex), Cl.bufferFromHex(signature)],
      signer.address,
    );

    expect(extractResult.result).toBeOk(Cl.principal(signer.address));
  });

  it("rejects signature when recovered principal is not a configured signer", () => {
    const signer = makeRandomSigner();
    const outsider = makeRandomSigner();

    initMultisigWithSigners([signer.address], 1);
    submitStxTxn(signer.address);

    const hashResult = getTxnHash(0, signer.address);
    const hashHex = bufferHexFromOk(hashResult);
    const outsiderSig = signHash(hashHex, outsider.privateKey);

    const extractResult = simnet.callReadOnlyFn(
      "multisig",
      "extract-signer",
      [Cl.bufferFromHex(hashHex), Cl.bufferFromHex(outsiderSig)],
      signer.address,
    );

    expect(extractResult.result).toBeErr(Cl.uint(12));
  });

  it("rejects malformed signatures that cannot be recovered", () => {
    const signer = makeRandomSigner();

    initMultisigWithSigners([signer.address], 1);
    submitStxTxn(signer.address);

    const hashResult = getTxnHash(0, signer.address);
    const hashHex = bufferHexFromOk(hashResult);
    const badSignature = "00".repeat(65);

    const extractResult = simnet.callReadOnlyFn(
      "multisig",
      "extract-signer",
      [Cl.bufferFromHex(hashHex), Cl.bufferFromHex(badSignature)],
      signer.address,
    );

    expect(extractResult.result).toBeErr(Cl.uint(12));
  });
});
