# Unified JavaScript Engine

As the platform's name [suggests](../premiere-the-unified-extensibility-platform/reference-index.md), UXP uses a _unified_ JavaScript engine that can reach Premiere APIs and UXP Core APIs directly. That is a major difference from the earlier CEP extensibility model, where extension logic and the host application communicated through the CSInterface bridge by passing messages between separate runtimes.

In UXP, the code runs natively in one environment; load the needed API modules with `require()`.
