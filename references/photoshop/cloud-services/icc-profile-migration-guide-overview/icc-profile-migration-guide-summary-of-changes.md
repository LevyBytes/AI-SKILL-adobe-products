# ICC Profile Migration Guide - Summary of changes

| Change | V1 | V2 |
| --- | --- | --- |
| **ICC Profile Support** | Not available | Optional `iccProfile` on output exports and document creation |
| **Output Color Management** | N/A | Add `iccProfile` to any output (JPEG, PNG, TIFF, PSD) |
| **Document Creation Color Management** | N/A | Add `iccProfile` to `image` block in `/v2/create-composite` |

- **Conversion Behavior:** Details are in the [format-support section](../output-types-migration/format-support-color-mode-and-bit-depth.md).
