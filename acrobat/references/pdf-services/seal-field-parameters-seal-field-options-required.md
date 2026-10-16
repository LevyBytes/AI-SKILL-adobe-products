# Seal Field Parameters (_sealFieldOptions_) : **Required**

Use the seal field parameters either to spin up a fresh signature field or to reuse one that already exists.

- **Field Name** (_fieldName_) : **Required** : The signature field's name, which cannot be an empty string. An existing field carrying this name gets reused; otherwise a field with this name is created.
- **Visible** (_visible_): Controls whether the signature field shows or stays hidden. Its default, `true`, yields a visible seal.
- **Page Number** (_pageNumber_) : **Required** : The 1-based page index where the signature field gets placed. It only matters when a visible signature field is needed and is not yet in the pdf document. Supply it alongside an existing signature field and the page number must match the page already holding that field, or an error is raised. For an invisible signature field this parameter is skipped.
- **Location** (_location_) : **Required** : The bounding-box coordinates of the seal's appearance, expressed in default PDF user space units. This is only needed when the signature field is absent from the pdf document. Hand it in together with an existing signature field and it is disregarded. An invisible signature field likewise ignores this parameter.

- **Left** (_left_) : **Required** : The left x-coordinate
  - **Bottom** (_bottom_) : **Required** : The bottom y-coordinate
  - **Right** (_right_) : **Required** : The right x-coordinate
  - **Top** (_top_) : **Required** : The top y-coordinate

For a walk-through of adding the signature field on your own, consult [how to place a signature field in a PDF](https://www.adobe.com/sign/hub/how-to/add-a-signature-block-to-pdf).
