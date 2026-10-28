# Font management

V1 placed custom font inputs and missing-font behavior on the request through `options.fonts`, `options.manageMissingFonts`, and `options.globalFont`. For V2, the `/v2/execute-actions` payload carries those settings under `options.fontOptions`.
