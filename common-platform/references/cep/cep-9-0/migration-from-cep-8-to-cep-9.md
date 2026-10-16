# Migration from CEP 8 to CEP 9

    Extensions that already work in CEP 8 do not require migration. CEP 8 extensions should run in CEP 9 without changes.

Note:
Documentation makes the `<Size>` element mandatory in the manifest file, but through CEP 8 the engine still worked by using the maximum or minimum size supplied in the manifest. CEP 9 fixes that bug. Make sure the manifest defines the `<Size>` element.
