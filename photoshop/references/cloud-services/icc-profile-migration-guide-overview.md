# ICC Profile Migration Guide — Overview

Adobe Photoshop API V2 adds ICC (International Color Consortium) profile support as a **new capability**. The V1 API (`image.adobe.io`, `/pie/psdService/*`) offered no output color profile configuration. When moving to V2, specify ICC profiles to control color management for exported JPEG, PNG, TIFF, and PSD outputs.

Topics covered:

- Predefined standard ICC profiles
- User-supplied custom ICC profiles through `.icc` files
- Supported formats and restrictions
- Frequent validation errors and prevention patterns
