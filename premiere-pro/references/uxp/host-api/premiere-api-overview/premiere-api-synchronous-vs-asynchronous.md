# Premiere API — Synchronous vs Asynchronous

ExtendScript (and CEP) differed from UXP in Premiere in one key way: every ExtendScript call into Premiere ran synchronously. While those calls executed, the Premiere UI was blocked. In UXP, method calls are _asynchronous_, so the UI thread is not blocked.

To ease movement from the ExtendScript DOM to the UXP DOM, the API keeps all property accessors (get and set) _synchronous_, so they do not require `await`. Under the hood, however, those operations are still asynchronous in nature.
