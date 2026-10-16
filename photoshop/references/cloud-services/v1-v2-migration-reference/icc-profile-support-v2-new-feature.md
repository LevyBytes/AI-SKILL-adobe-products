# ICC profile support (V2 new feature)

ICC profile support is a **new V2 capability**; V1 did not provide output color profile settings.

### Overview

There are two locations where ICC profiles can be supplied:

1. **On `outputs`**: this sets the color space for the exported file. Place `iccProfile` on any output for `/v2/create-composite`, `/v2/create-artboard`, or `/v2/execute-actions`. JPEG, PNG, TIFF, and PSD support it; PSDC (Cloud PSD) does **not**.
2. **On `image` (document creation)**: this embeds the color profile when a new document is created. Put `iccProfile` inside the `image` block for a new document request where no `image.source` is present. Both standard and custom profiles are valid here.
