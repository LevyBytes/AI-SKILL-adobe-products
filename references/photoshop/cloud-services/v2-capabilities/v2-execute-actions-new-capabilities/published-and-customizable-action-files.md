# Published and customizable action files

V1 convenience APIs such as `productCrop` used hidden server-side action files that callers could not inspect or edit. V2 makes those same action files available, so callers can review, fork, and customize them.

Several V1 convenience endpoints wrapped private Photoshop action files:

- `/pie/psdService/productCrop` - product auto-cropping with padding

In V2, these operations run through `/v2/execute-actions` and use published action files. You can:

- Review Adobe's implementation directly
- Execute the action unchanged with `additionalContents`
- Download the action and tailor it for your own requirements
- Use the published files as a reference when building similar behavior

Download links and usage details are in the individual guides:

- [Product Crop](../../product-crop-migration.md)
