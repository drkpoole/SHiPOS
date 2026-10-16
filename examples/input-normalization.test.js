import test from "node:test";
import assert from "node:assert/strict";
import { parseDimensionIn, parseWeightLbs, parseQuantity } from "./input-normalization.js";

test("parses inches and defaults a missing dimension unit to inches", () => {
  assert.equal(parseDimensionIn("24in"), 24);
  assert.equal(parseDimensionIn('24"'), 24);
  assert.equal(parseDimensionIn("24"), 24);
});

test("converts centimetres and millimetres to inches", () => {
  assert.equal(parseDimensionIn("2.54cm"), 1);
  assert.equal(parseDimensionIn("25.4mm"), 1);
});

test("rejects missing, non-positive, and malformed dimensions", () => {
  assert.equal(parseDimensionIn(""), null);
  assert.equal(parseDimensionIn("0in"), null);
  assert.equal(parseDimensionIn("wide"), null);
  assert.equal(parseDimensionIn(Number.POSITIVE_INFINITY), null);
});

test("parses pounds and converts kilograms to pounds", () => {
  assert.equal(parseWeightLbs("10lbs"), 10);
  assert.equal(parseWeightLbs("1kg"), 2.20462);
  assert.equal(parseWeightLbs(10), 10);
});

test("rejects missing, non-positive, and malformed weights", () => {
  assert.equal(parseWeightLbs(null), null);
  assert.equal(parseWeightLbs("0kg"), null);
  assert.equal(parseWeightLbs("heavy"), null);
});

test("defaults a blank quantity to one and accepts positive integers", () => {
  assert.equal(parseQuantity(" "), 1);
  assert.equal(parseQuantity("3"), 3);
});

test("rejects fractional, zero, negative, and non-numeric quantities", () => {
  assert.equal(parseQuantity("1.5"), null);
  assert.equal(parseQuantity("0"), null);
  assert.equal(parseQuantity("-2"), null);
  assert.equal(parseQuantity("many"), null);
});
