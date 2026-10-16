# batchPlay

`batchPlay` sits at the center of these APIs. It runs Photoshop action commands, one or many, and returns the results.

> Prefer DOM APIs first; reach for batchPlay only when those APIs do not cover the operation.

Access `batchPlay` directly from the Photoshop action module. By default, it runs asynchronously and resolves through a promise.

Documented signature (call contract, not a function implementation):

`require('photoshop').action.batchPlay( descriptors: ActionDescriptor[], options: Object ): Promise<Object[]>`

The sections below cover how JavaScript defines action commands and which options are available.
