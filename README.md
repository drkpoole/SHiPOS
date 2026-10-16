# ShipperOS — LTL Freight Intelligence Portfolio

An independently developed freight-technology project exploring how less-than-truckload (LTL) shipment data can support better pricing, packaging, carrier selection, and audit decisions.

**Project focus:** translating logistics workflows into software that helps explain cost drivers and make operational decisions more transparent.

> **Portfolio scope:** This is a sanitized public companion repository, not the full application. It contains a small standalone code example and tests. It intentionally excludes production customer records, invoice exports, private carrier agreements, credentials, shipment-level business data, and the original development repository's commit history.

## What the project explores

- **Freight pricing and dimensional exposure:** compare actual weight, dimensional weight, linear-foot exposure, and shipment characteristics.
- **SkidBuilder / packing optimization:** model packaging constraints such as box rotation, stackability, layer limits, and multi-skid trade-offs.
- **Decision support:** organize carrier and shipment considerations so they can be explained and reviewed.
- **Outcome feedback:** connect operational outcomes, including invoice results, to earlier decisions for review.
- **Operational product design:** connect business rules, UI workflows, and testable software behavior.

## Public example

The `examples/` folder contains a standalone JavaScript example showing how a simplified economic-weight exposure rule can identify the largest of several weight drivers. It also includes tests for the main behavior, tied drivers, invalid inputs, and optional inputs.

This is an illustrative teaching example—not the production ShipperOS formula, not a carrier tariff, and not a guarantee of billable weight.

### Run tests

Requires Node.js 18 or newer.

~~~bash
npm test
~~~

Or run Node's test runner directly:

~~~bash
node --test
~~~

## Technology

The wider development project has used React, Vite, Vitest, React Testing Library, and Python components. This companion repo intentionally contains only a small isolated example so a reviewer can inspect its behavior without installing the full application stack.

## Architecture overview

See [docs/architecture.md](docs/architecture.md) for the conceptual rate-engine, decision-support, SkidBuilder, and outcome-feedback layers, along with design principles and current scope limitations.

## Development repository

- [ShipperOS development repository](https://github.com/SouthwellOS/ShipperOS)

The development repository is separate and may contain a broader, evolving application. Review its setup instructions and data-handling requirements independently.

## Data and confidentiality

All examples in this portfolio should use synthetic names, contacts, addresses, identifiers, and rates. Do not add customer invoices, PRO/BOL numbers, shipment exports, lane-level commercial evidence, private tariffs, credentials, or other confidential material.

## About

ShipperOS is an independent project built around applied logistics domain knowledge and software product development. It demonstrates an effort to translate freight-pricing and operational problems into explicit rules, user workflows, and testable software concepts.
