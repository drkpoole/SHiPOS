# ShipperOS: Architecture and Scope

## Product problem

LTL freight costs can be affected by more than scale weight. Shipment dimensions, density, pallet configuration, linear-foot usage, accessorials, carrier-specific rules, and invoice adjustments can change the economics of a move.

ShipperOS explores how to make these factors explicit so a user can compare options and understand why a shipment may carry additional cost exposure.

## Conceptual layers

1. **Rate engine** — evaluates shipment inputs against configured pricing rules. Real carrier tariffs and contracts must be maintained and validated separately.
2. **Decision support** — presents comparisons and recommendations with the assumptions and signals behind them.
3. **SkidBuilder** — explores palletization choices, including orientation, stackability, weight, dimensions, and skid count.
4. **Outcome feedback** — connects later operational outcomes, including invoice results, to the original decision for review and potential calibration.

## Design principles

- **Explainability:** show the inputs and rules that influence a result.
- **Separation of concerns:** keep pricing, packaging, and decision logic independently testable.
- **Data minimization:** use synthetic examples in public demonstrations.
- **Validation before automation:** recommendations are not contractual quotes or carrier guarantees.
- **Reconciliation as a product requirement:** quoted-versus-invoiced differences should be traceable to evidence and explicit reason codes.

## Public example

The examples folder contains a small, standalone JavaScript demonstration of a maximum-weight exposure rule and its tests. It is intentionally simplified and does not disclose the production formula, carrier-specific parameters, private rate tables, or customer-derived calibration.

Run the example tests from the repository root with:

~~~bash
node --test
~~~

## Scope and limitations

This repository is a sanitized portfolio companion, not a complete deployable application. It does not include production customer records, invoice exports, credentials, private carrier agreements, or the original development repository's commit history. The full development repository is linked from the root README and should be assessed separately for its own setup and data-handling requirements.
