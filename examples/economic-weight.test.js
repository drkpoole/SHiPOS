import test from "node:test";
import assert from "node:assert/strict";
import { calculateEconomicWeight, summarizeWeightExposure } from "./economic-weight.js";

test("uses actual weight when it is the largest input", () => {
  assert.equal(calculateEconomicWeight({
    actualWeightLb: 800, dimensionalWeightLb: 500, linearFootEquivalentLb: 600,
  }), 800);
});

test("uses dimensional weight when it is the largest input", () => {
  assert.equal(calculateEconomicWeight({
    actualWeightLb: 800, dimensionalWeightLb: 950, linearFootEquivalentLb: 600,
  }), 950);
});

test("returns every tied limiting factor", () => {
  assert.deepEqual(summarizeWeightExposure({
    actualWeightLb: 700, dimensionalWeightLb: 700, linearFootEquivalentLb: 500,
  }), { economicWeightLb: 700, limitingFactors: ["actual", "dimensional"] });
});

test("rejects negative or non-finite inputs", () => {
  assert.throws(() => calculateEconomicWeight({ actualWeightLb: -1 }), TypeError);
  assert.throws(() => calculateEconomicWeight({ actualWeightLb: Number.NaN }), TypeError);
});

test("defaults optional weight drivers to zero", () => {
  assert.equal(calculateEconomicWeight({ actualWeightLb: 400 }), 400);
});
