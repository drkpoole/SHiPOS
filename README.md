# ShipperOS — LTL Freight Intelligence Portfolio

An independently developed freight-technology project exploring how less-than-truckload (LTL) shipment data can support better pricing, packaging, carrier selection, and audit decisions.

**Project focus:** translating logistics workflows into software that helps explain cost drivers and make operational decisions more transparent.

> **Portfolio scope:** This is a sanitized public companion repository, not the full application. It contains isolated code examples, tests, and conceptual architecture documentation. It intentionally excludes production customer records, invoice exports, private carrier agreements, credentials, shipment-level business data, and the original development repository's commit history.

## What the project explores

- **Freight pricing and dimensional exposure:** compare actual weight, dimensional weight, linear-foot exposure, and shipment characteristics.
- **SkidBuilder / packing optimization:** model packaging constraints such as box rotation, stackability, layer limits, and multi-skid trade-offs.
- **Decision support:** organize carrier and shipment considerations so they can be explained and reviewed.
- **Outcome feedback:** connect operational outcomes, including invoice results, to earlier decisions for review.
- **Operational product design:** connect business rules, UI workflows, input validation, and testable software behavior.

## Public examples

- [economic-weight.js](examples/economic-weight.js) — a simplified example that selects the largest of several weight drivers and reports ties.
- [input-normalization.js](examples/input-normalization.js) — a standalone JavaScript adaptation of input-normalization behavior from the development project. It parses dimensions and weights with supported units, converts them to consistent units, and handles invalid values and blank quantities.

The examples are deliberately limited and are not the production ShipperOS formula, a carrier tariff, or a guarantee of billable weight. They contain no customer records, private carrier calibration, or shipment-level commercial evidence.

## Run tests

Requires Node.js 18 or newer.

~~~bash
npm test
~~~

Or run Node's test runner directly:

~~~bash
node --test
~~~

The test suite covers weight-driver selection, tied drivers, input validation, dimensional-unit conversion, weight-unit conversion, and quantity defaults/validation.

## Technology

The wider development project has used React, Vite, Vitest, React Testing Library, and Python components. This companion repo intentionally contains small isolated examples so a reviewer can inspect and run them without installing the full application stack.

## Architecture overview

See [docs/architecture.md](docs/architecture.md) for the conceptual rate-engine, decision-support, SkidBuilder, and outcome-feedback layers, along with design principles and current scope limitations.

## Development repository

- [ShipperOS development repository](https://github.com/SouthwellOS/ShipperOS)

The development repository is separate and may contain a broader, evolving application. Review its setup instructions and data-handling requirements independently; this portfolio does not imply that the full development repository has been cleared for public release.

## Data and confidentiality

All portfolio examples should use synthetic names, contacts, addresses, identifiers, and rates. Do not add customer invoices, PRO/BOL numbers, shipment exports, lane-level commercial evidence, private tariffs, credentials, or other confidential material.

## About

ShipperOS is an independent project built around applied logistics domain knowledge and software product development. It demonstrates an effort to translate freight-pricing and operational problems into explicit rules, user workflows, and testable software concepts.
