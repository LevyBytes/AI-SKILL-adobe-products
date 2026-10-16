# Migration from CEP 8 to CEP 9

    CEP 8 extensions do not require migration. Extensions that work on CEP 8 should run on CEP 9 without additional changes.

Note:
Documentation marks the `<Size>` element in the manifest file as mandatory. Through CEP 8, extensions could still work by using the max or min size from the manifest, but CEP 9 fixed that bug. Define `<Size>` explicitly in your manifest.
