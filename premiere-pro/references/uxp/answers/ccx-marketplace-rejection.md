# Why would a `.ccx` package be rejected by the Creative Cloud Marketplace?

In `manifest.json`, confirm that the [`host`](../required-properties/host.md) property is an object rather than an array. Validation fails when that field is an array. For more information, see [Host Applications](../package-a-uxp-plugin/host-applications.md).
