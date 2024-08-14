## Description

Sample project reproducing an error when using vitest with nest (and the @types/fhir package)

## Problem

When using the package `@types/fhir` with vitest, for some reason, it cannot be compiled.
The error that shows when running `yarn test` is:

> Error: Failed to load url fhir/r4 (resolved id: fhir/r4) in ./vitest-fhir-example/src/observation/entities/observation.model.ts. Does the file exist?
