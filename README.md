# ShipperOS — LTL Freight Intelligence Portfolio

An independently developed freight-technology project exploring how less-than-truckload (LTL) shipment data can support better pricing, packaging, carrier selection, and audit decisions.

**Project focus:** translating logistics workflows into software that helps explain cost drivers and make operational decisions more transparent.

> **Portfolio note:** This is a public portfolio landing page. The development codebase lives separately. This repository intentionally excludes production customer records, invoice exports, private carrier agreements, credentials, and shipment-level business data.

## What the project explores

- **Freight pricing and dimensional exposure:** compare actual weight, dimensional weight, linear-foot exposure, and shipment characteristics.
- **SkidBuilder / packing optimization:** model packaging constraints such as box rotation, stackability, layer limits, and multi-skid trade-offs.
- **Decision support:** organize carrier and shipment considerations so they can be explained and reviewed.
- **Workflow feedback:** learn from shipment outcomes while distinguishing observed outcomes from recommendations.
- **Operational product design:** connect business rules, UI workflows, and testable software behavior.

## Technology

The wider project has used React, JavaScript, Vite, Vitest, React Testing Library, and Python components. Public code should be added selectively after review for data sensitivity and reproducibility.

## Domain concepts

### Dimensional weight

Shipment dimensions can materially affect billable weight. A common volume-based calculation is:

`dimensional weight = (length × width × height ÷ divisor) × conversion factor`

The divisor, density assumptions, rounding, and carrier-specific rules vary. Demonstration rates and thresholds should be labelled illustrative, not presented as carrier contracts.

### True Economic Weight

The project explores a decision-support concept that considers multiple economic drivers—not just scale weight—including dimensional weight, linear-foot exposure, packaging geometry, and potential re-handling or recube penalties.

The exact production formula and carrier-specific tuning are intentionally not published here.

### SkidBuilder

The packing component explores how carton orientation, layer consistency, stackability, weight limits, and skid count can affect estimated space usage and cost exposure.

## Engineering approach

- Decompose domain-specific rules into testable components.
- Keep assumptions visible instead of presenting estimates as guaranteed carrier quotes.
- Use synthetic examples for public demonstrations.
- Treat auditability and quoted-versus-invoiced charge reconciliation as important product requirements.
- Prefer a narrow, verifiable MVP over claims of a complete transportation-management platform.

## Current limitations

This is an evolving independent project, not a claim of a fully production-ready commercial system. Live carrier pricing, contractual tariff coverage, and end-to-end shipment-to-invoice reconciliation require additional integration, validation, and testing before operational use.

## Development repository

- [ShipperOS development repository](https://github.com/SouthwellOS/ShipperOS)

Review the development repository's setup instructions before running it. Keep environment files and local data free of credentials and confidential records.

## Data and confidentiality

All sample names, contacts, addresses, identifiers, and rates added to this portfolio should be synthetic. Do not add customer invoices, PRO/BOL numbers, shipment exports, lane-level commercial evidence, private tariffs, or secrets.

## About

ShipperOS is an independent project built around applied logistics domain knowledge and software product development. It demonstrates an effort to translate freight-pricing and operational problems into explicit rules, user workflows, and testable software concepts.
