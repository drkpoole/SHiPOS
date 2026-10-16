/**
 * Illustrative freight-weight decision helper for the public portfolio.
 * This is a synthetic teaching example, not the production ShipperOS formula
 * and not a substitute for carrier-specific tariff rules.
 */

export function calculateEconomicWeight({
  actualWeightLb,
  dimensionalWeightLb = 0,
  linearFootEquivalentLb = 0,
}) {
  const inputs = { actualWeightLb, dimensionalWeightLb, linearFootEquivalentLb };

  for (const [name, value] of Object.entries(inputs)) {
    if (!Number.isFinite(value) || value < 0) {
      throw new TypeError(name + " must be a finite, non-negative number");
    }
  }

  return Math.max(actualWeightLb, dimensionalWeightLb, linearFootEquivalentLb);
}

export function summarizeWeightExposure(shipment) {
  const economicWeightLb = calculateEconomicWeight(shipment);
  const drivers = [
    ["actual", shipment.actualWeightLb],
    ["dimensional", shipment.dimensionalWeightLb ?? 0],
    ["linear-foot", shipment.linearFootEquivalentLb ?? 0],
  ];
  return {
    economicWeightLb,
    limitingFactors: drivers
      .filter(([, weight]) => weight === economicWeightLb)
      .map(([name]) => name),
  };
}
