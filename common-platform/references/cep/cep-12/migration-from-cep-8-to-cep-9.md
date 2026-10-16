# Migration from CEP 8 to CEP 9

Extensions that function in CEP 8 do not require migration; CEP 9 should run them without additional changes.
Note:
The manifest documentation already requires the `<Size>` element, but through CEP 8 the runtime could still use the supplied max or min size. CEP 9 fixes that bug, so define the `<Size>` element in the manifest.
