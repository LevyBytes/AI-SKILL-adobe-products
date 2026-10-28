# Required parameters

**`width`**

- Type: Integer
- Range: 1-32000 pixels
- Description: Document width in pixels

**`height`**

- Type: Integer
- Range: 1-32000 pixels
- Description: Document height in pixels

**`resolution`**

- Type: Object made up of `unit` and `value`
- Format: `{"unit": "density_unit", "value": N}` with N at least 1 (value >= 1)
- Description: Pixels-per-inch (PPI) resolution for the document
- Common values: web 72, draft print 150, high-quality print 300
- Example: `{"unit": "density_unit", "value": 72}`
