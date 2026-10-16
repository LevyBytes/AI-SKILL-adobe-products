# Migrating ExtendScript/EvalScript to the Photoshop DOM API

JSX files contain functions and objects meant to run inside Photoshop's ExtendScript environment. CEP runs them either when the plugin loads or through `evalScript`. The path to JSX files is declared in the &lt;ScriptPath&gt; node in manifest.xml.

ExtendScript calls into Photoshop were synchronous, blocking the host application's UI while they ran. UXP method calls are asynchronous and leave the UI thread unblocked. To ease movement from the ExtendScript DOM to the UXP API, UXP functions are asynchronous by design, but they may be used for synchronous-style execution without requiring `await`.

UXP cannot directly load and run JSX files. Use the Photoshop DOM API instead to reach the Photoshop DOM directly. If the current implementation does not cover a needed operation, run Photoshop actions with [`batchPlay`](https://developer.adobe.com/photoshop/uxp/ps_reference/media/advanced/batchplay/).

`batchPlay` advances beyond ExtendScript's `executeAction`. `executeAction` played one descriptor at a time, while `batchPlay` takes an array of action descriptors. ExtendScript supplied classes for building descriptors and references and assigning values. With `batchPlay`, those related classes are replaced by `actionJSON`. Developers familiar with `executeAction` in ExtendScript may remember 4-character codes (OSTypes) and helper methods around them. In `actionJson`, use extended string identifiers such as `colorSampler` instead. An OSType can still be used by prefixing it with `$` and passing that value as a string, as in `$app `.
