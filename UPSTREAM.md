# Upstream review

Based on [grunt-exec@3.0.0](https://www.npmjs.com/package/grunt-exec/v/3.0.0), commit [`25fa05b466f6e016a8998a0cf42df6dc3019f85c`](https://github.com/jharding/grunt-exec/commit/25fa05b466f6e016a8998a0cf42df6dc3019f85c). All published upstream runtime files match this commit byte-for-byte; npm tarball integrity was independently checked.

The fork preserves runtime files, exports, CLI names and engine declarations. Original license and authorship notices remain. Development tooling runs on Node24 without raising the package runtime requirement.

## Issue triage (2026-09-29)

- [#87: PATH in Magento execution](https://github.com/jharding/grunt-exec/issues/87): Preserve inherited shell/environment behavior. Real commands, exit-code handling and output callbacks run in the upstream suite and packed-consumer check.
- [#72: Multiple command documentation](https://github.com/jharding/grunt-exec/issues/72): Retain original task documentation and shell semantics. No automatic command concatenation or new quoting convention is introduced.

No upstream maintainers were contacted. These are scoped compatibility decisions, not blanket claims that upstream issues are fixed.

## Verification

`npm ci --ignore-scripts`, `npm test`, `npm run test:package`, and `npm audit --audit-level=low`. CI and CodeQL gate the exact immutable package artifact. Packed consumer tests install the resulting archive before exercising its public behavior.
