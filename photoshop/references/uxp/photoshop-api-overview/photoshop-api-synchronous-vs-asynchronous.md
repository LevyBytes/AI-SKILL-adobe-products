# Photoshop API — Synchronous vs Asynchronous

In Photoshop, ExtendScript and CEP differ from UXP in one key way: calls made through ExtendScript were synchronous. While they ran, Photoshop UI interaction was blocked. With UXP, method calls are _asynchronous_ and leave the UI thread unblocked.

To ease migration from the ExtendScript DOM to the UXP DOM, API properties for get and set were made _synchronous_, so callers do not await them. Internally, however, those property operations still behave asynchronously.
