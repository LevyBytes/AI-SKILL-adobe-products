# Migration from CEP 11 to CEP 12

Update the Node Modules: CEP 12 uses NodeJS 17.7.1 together with Node-WebKit v0.62.1. Extensions built against earlier NodeJS releases can fail to load under CEP 12 when their node modules are incompatible. Rebuild or refresh those node modules with NodeJS version 17.7.1 or later.

Also see [Known issues](../cep-12-known-issues-faq/reference-index.md) for CEP 12.
