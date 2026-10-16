/**
 * Standalone portfolio example adapted from ShipperOS input-normalization work.
 * It demonstrates defensive parsing of dimensional and weight inputs only;
 * it does not contain carrier tariffs, customer data, or production pricing logic.
 */

const DIMENSION_PATTERN = /^\s*([+-]?\d+(?:\.\d+)?)\s*(in|"|cm|mm)?\s*$/i;
const WEIGHT_PATTERN = /^\s*([+-]?\d+(?:\.\d+)?)\s*(lb|lbs|kg)?\s*$/i;

export function parseDimensionIn(raw) {
  if (raw === null || raw === undefined || raw === "") return null;
  if (typeof raw === "number") return Number.isFinite(raw) && raw > 0 ? raw : null;

  const match = String(raw).match(DIMENSION_PATTERN);
  if (!match) return null;

  const value = Number.parseFloat(match[1]);
  if (!Number.isFinite(value) || value <= 0) return null;

  switch ((match[2] ?? "in").toLowerCase()) {
    case "cm": return value / 2.54;
    case "mm": return value / 25.4;
    default: return value;
  }
}

export function parseWeightLbs(raw) {
  if (raw === null || raw === undefined || raw === "") return null;
  if (typeof raw === "number") return Number.isFinite(raw) && raw > 0 ? raw : null;

  const match = String(raw).match(WEIGHT_PATTERN);
  if (!match) return null;

  const value = Number.parseFloat(match[1]);
  if (!Number.isFinite(value) || value <= 0) return null;
  return (match[2] ?? "lb").toLowerCase() === "kg" ? value * 2.20462 : value;
}

export function parseQuantity(raw) {
  if (raw === null || raw === undefined || String(raw).trim() === "") return 1;
  const quantity = Number(raw);
  return Number.isInteger(quantity) && quantity >= 1 ? quantity : null;
}
