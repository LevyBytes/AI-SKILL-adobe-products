# Migration from CEP 8 to CEP 9

    CEP 8 extensions do not require migration work. Extensions that run in CEP 8 should launch in CEP 9 without further changes.

Note:
The manifest must include a `<Size>` element. Earlier releases through CEP 8 could run by taking the manifest's max or min size, even though the documentation marked `<Size>` as required. CEP 9 fixes that bug, so define `<Size>` in the manifest.
